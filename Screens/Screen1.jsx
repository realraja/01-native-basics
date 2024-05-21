import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { Button } from 'react-native-paper'


const Screen1 = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems:'center',gap:15}}>
        <Text style={{margin: '100x',fontSize:30,textTransform:'uppercase'}}>Screen One</Text>
        <Image width={150} height={150} style={{borderRadius: 100}} source={{
          uri: 'https://ih1.redbubble.net/image.4737341136.4939/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg',
        }} />
        <Button textColor='red' style={{backgroundColor: 'gray',paddingHorizontal:50}} onPress={()=> navigation.navigate('Home')} >
            Home
        </Button>
      </View>
  )
}

export default Screen1
