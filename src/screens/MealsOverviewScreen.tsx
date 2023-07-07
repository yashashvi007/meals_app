import { FlatList, Text, View } from 'react-native'
import React, { Component } from 'react'
import { CATEGORIES, MEALS } from '../data/data'
import MealItem from '../components/MealItem'

interface MyProps {

}

interface MyState {
    catId : string
}

export class MealsOverviewScreen extends Component<MyProps , MyState> {
    constructor(props : MyProps){
        super(props)
        this.state = {
            catId : this.props.route.params.categoryId
        }
    }

    componentDidMount(): void {
      const categoryTitle = CATEGORIES.find((category)=> category.id === this.state.catId).title
      this.props.navigation.setOptions({
        title : categoryTitle
      })
    }

    renderMealItem = (itemData) => {
        return <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability}  />
    }

  render() {

    const displayedMeals = MEALS.filter((mealItem)=> {
        return mealItem.categoryIds.indexOf(this.state.catId) >=0 
    })

    
    return (
      <View>
        <FlatList
           data={displayedMeals}
           keyExtractor={(item)=> item.id}
           renderItem={this.renderMealItem}
        />
      </View>
    )
  }
}

export default MealsOverviewScreen