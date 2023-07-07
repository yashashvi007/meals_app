import { StatusBar, Text, View } from 'react-native'
import React, { Component } from 'react'
import CategoriesScreen from './src/screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './src/screens/MealsOverviewScreen'

const Stack = createNativeStackNavigator()

export class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle : {
              backgroundColor : '#351401', 
            }, 
            headerTintColor : 'white' , 
            contentStyle : {backgroundColor : '#3f2f25'}
          }} >
            <Stack.Screen name='MealsCategories' component={CategoriesScreen}
               options={{
                title : 'All categories' ,
               
               }}
            />
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}
              //  options={({route , navigation})=> {
              //   const catId = route.params.categoryId
              //   return {
              //     title : catId
              //   }
              //  }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  }
}

export default App