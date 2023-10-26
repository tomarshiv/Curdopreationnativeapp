import React from 'react';
import  {Text,View ,StyleSheet,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const TextBox =({placeholder})=>{
    return(
        <View  style={styles.container}>
         {/* <Text style={styles.text}>shivani</Text> */}
         <Icon name='account' style={{margin:8,fontSize:20}}/>
         <TextInput 
            placeholder={placeholder}
         />
        </View>
    )
}
export default TextBox;

const styles = StyleSheet.create({
      container: {
       alignItems: 'center',
      width:'90%',
    //   height:'16%',
    //backgroundColor:'gray',
      margin:6,
      borderWidth:1,
      borderColor:'gray',
      flexDirection:'row'
    },
    text: {
      fontSize: 16,
      color: 'blue',
      fontWeight: 'bold',
    },
  })