import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

interface MyProps {
    title : string , 
    color : string , 
    onPress : ()=> void
}

interface MyState {

}

export class CategoryTile extends Component<MyProps , MyState> {
    

  render() {
    const {title , color , onPress}  =this.props
    return (
      <View style={[styles.gridItem ,{backgroundColor : color}]} >
        <Pressable 
            android_ripple={{color : '#ccc'}} 
            style={({pressed})=> [styles.button , pressed ? styles.buttonPressed : null]} 
            onPress={onPress}
        >
            <View style={styles.innerContainer} >
                <Text style={styles.title} >{title}</Text>
            </View>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    gridItem : {
        flex : 1 , 
        margin : 16 , 
        height : 150 , 
        borderRadius : 8 , 
        elevation : 4 , 
        shadowColor : 'black' , 
        shadowOpacity : 0.25 , 
        shadowOffset : {width : 0 , height : 2} , 
        shadowRadius : 8 , 
        overflow : 'hidden'
    } , 
    button : {
        flex : 1
    } , 
    buttonPressed : {
        opacity : 0.5
    } , 
    innerContainer : {
        flex : 1 , 
        padding : 16 , 
        justifyContent : 'center' , 
        alignItems : 'center'
    } , 
    title : {
        fontWeight : 'bold' , 
        fontSize : 18
    }
})

export default CategoryTile