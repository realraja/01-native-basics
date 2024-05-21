import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'


const Home = ({navigation}) => {
  return (
    <View style={styles.MainView}>
        <Text style={{margin: '100x',fontSize:30,textTransform:'uppercase'}}>Rajesh Kumar </Text>
        <Image width={150} height={150} style={{borderRadius: 100}} source={{
          uri: 'https://i.pinimg.com/736x/55/ab/16/55ab1628666d1125e7aae69b45f7fe6a.jpg',
        }} />
        <Button textColor='red' style={{backgroundColor: 'gray',paddingHorizontal:50}} onPress={()=> navigation.navigate('Screen1')} onLongPress={()=> navigation.navigate('Screen')}>
            Click Me
        </Button>
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
    MainView: {flex:1, justifyContent: 'center', alignItems:'center',gap:15}
})
