import { FlatList, Text, View } from 'react-native'
import React, { Component } from 'react'
import { CATEGORIES } from '../data/data'
import CategoryTile from '../components/CategoryTile'

type Item = {
  index : number , 
  item : {
    id : string , 
    title : string , 
    color : string
  }
}

export class CategoriesScreen extends Component {


    renderCategoryItem = (itemData : Item)=> {
      return <CategoryTile 
      title={itemData.item.title} 
      color={itemData.item.color} 
      onPress={
        ()=> this.props.navigation.navigate("MealsOverview", {
          categoryId : itemData.item.id
        })} 
      />
    }

  render() {
    return (
      <React.Fragment>
        <FlatList 
          data={CATEGORIES}
          keyExtractor={(item)=> item.id}
          renderItem={this.renderCategoryItem}
          numColumns={2}
        />
      </React.Fragment>
    )
  }
}

export default CategoriesScreen