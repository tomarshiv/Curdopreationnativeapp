import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Todo = () => {
    const [inputData, setInputData] = useState('')
    const [item, setItem] = useState([])
    const [editData, setEditData] = useState('')



    /////////////editItemData==============
   

    const editItem = (index) => {
        const findData = item.find((curElement) => {
            return curElement.id === index
    
        })
        setInputData(findData.name)
        setEditData(index)
       
    }


    // addItem in list==========
    const addItem = () => {
        if (!inputData) {
            alert('please fill the data')
        }


        // else if (inputData) {
        //     setItem(
        //         item.map((curElem) => {
        //             if (curElem.id === editData) {
        //                 return { ...curElem, name: inputData };
        //             }
        //             return curElem;
        //         })
        //     );


        //     setInputData("")
        //     setEditData(null)
           
        // }
        else {

            const newData = {
                id: new Date().getTime().toString(),
                name: inputData
            }

            console.log('$$$$$$$$$$', newData)

            setItem([...item, newData])
            setInputData('')

        }
    }

   













    ////////////////////////////////////


    // deleteItem -in List==================>
    const deleteItem = (index) => {
        const filterdata = item.filter((curElement) => {
            return curElement.id !== index

        })
        setItem(filterdata)
    }

//////////////Remove All List/////////////////
const RemoveAll=()=>{
    setItem([])
}



    return (
        <View style={{ alignItems: 'center', padding: 8 }}>
            <View style={{ backgroundColor: '#fff', width: '90%', height: 'auto', alignItems: 'center', elevation: 8 }}>
                <Image source={require('../../Assest/Image/book1.jpg')} style={{ width: 120, height: 90, margin: 7 }} />
                <Text style={{ fontSize: 15, color: '#000', fontWeight: 'bold' }}>Add Your Item🤞 </Text>
                <View style={{ borderColor: 'gray', borderWidth: 1, height: 40, width: '83%', flexDirection: 'row', }}>
                    <TextInput placeholder="Add Item ✍"
                        onChangeText={text => setInputData(text)}
                        value={inputData}
                    />
                    <TouchableOpacity onPress={addItem}><Icon name='plus' style={{ fontSize: 30, paddingLeft: '47%', padding: 5 }} /></TouchableOpacity>

                </View>

                {item.map((item, index) => {
                    return (<View key={index} style={{ borderColor: 'gray', borderWidth: 1, height: 40, width: '83%', flexDirection: 'row', margin: 8 }}>


                        <Text style={{ fontSize: 16, margin: 5 }}>{item.name}</Text>

                        <TouchableOpacity><Icon name='playlist-edit' style={{ fontSize: 24, margin: 6, paddingLeft: '40%' }} onPress={()=> editItem(item.id)} /></TouchableOpacity>
                        <TouchableOpacity><Icon name='delete' style={{ fontSize: 24, marginRight: '50%', margin: 5 }} onPress={() => deleteItem(item.id)} /></TouchableOpacity>


                    </View>)

                })}


                <View style={{ borderColor: 'skyblue', borderWidth: 1, height: 40, width: '30%', margin: 8, borderRadius: 6, alignItems: 'center', backgroundColor: 'skyblue' }}>
                    <TouchableOpacity onPress={RemoveAll}>
                        <Text style={{ margin: 8, color: '#fff', fontSize: 14 }}>Button</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}
export default Todo;