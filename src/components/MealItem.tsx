import { Image, Pressable, Text, View , StyleSheet } from 'react-native'
import React, { Component } from 'react'

interface MyProps {
    title : string , 
    imageUrl : string , 
    duration : number , 
    affordability : string , 
    complexity : string
}

interface MyState {
    
}


export class MealItem extends Component<MyProps , MyState> {
    constructor(props : MyProps){
        super(props)
        
    }


  render() {
    const {title , imageUrl , duration , complexity , affordability}  = this.props
    return (
      <View style={styles.mealItem} >
        <Pressable android_ripple={{color : '#ccc'}} >
           <View>
              <Image source={{uri : imageUrl}} style={styles.image} />
              <Text style={styles.title} >{title}</Text>
           </View>
           <View style={styles.details} >
             <Text style={styles.detailItem} >{duration}</Text>
             <Text style={styles.detailItem} >{complexity}</Text>
             <Text style={styles.detailItem} >{affordability}</Text>
           </View>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mealItem : {
    margin : 16 , 
    borderRadius : 8 ,
    overflow : 'hidden', 
    backgroundColor : 'white' , 
    elevation : 4,
    shadowColor : 'black' , 
    shadowOpacity : 0.25 , 
    shadowOffset : {width : 0 , height : 2} , 
    shadowRadius : 8 
  } , 
  image : {
    width : '100%' ,
    height : 200
  } , 
  title : {
    fontWeight : 'bold' , 
    textAlign : 'center' , 
    fontSize : 18 , 
    margin : 8
  } , 
  details : {
    flexDirection : 'row' , 
    alignItems : 'center' , 
    justifyContent : 'center',
    padding : 8
  } , 
  detailItem : {
    marginHorizontal : 4
  }
})

export default MealItem