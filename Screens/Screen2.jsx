import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { Button } from 'react-native-paper'


const Screen2 = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems:'center',gap:15}}>
        <Text style={{margin: '100x',fontSize:30,textTransform:'uppercase'}}> Home Screen two </Text>
        <Image width={150} height={150} style={{borderRadius: 100}} source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzKUfzwH0pTOcdcjraORLN97lAfNNrPbez_l3RkenSw&s',
        }} />
        <Button textColor='red' style={{backgroundColor: 'gray',paddingHorizontal:50}} onPress={()=> navigation.navigate('Screen1')}>
            Screen One
        </Button>
      </View>
  )
}

export default Screen2

