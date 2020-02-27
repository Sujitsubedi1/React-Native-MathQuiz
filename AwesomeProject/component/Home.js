import React, { Component } from 'react';

import {View, Button, Text, TouchableOpacity, ImageBackground,StyleSheet} from 'react-native';

export default class Home extends React.Component{

    static navigationOptions= {
        headerShown: false
    }

    constructor(props){
     
            super(props)
      
    }


    render(){
        return(
             <ImageBackground source={require("../Images/BG.jpg")} style={styles.container}>
                 <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Main')}}>
            <Text style={styles.texting}>
                START
            </Text>
            </TouchableOpacity>

            <View style ={{flex:0.2}}/>

            <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Instructions')}}>
            <Text style={styles.texting}>
                INSTRUCTIONS
            </Text>
            </TouchableOpacity>

            </ImageBackground>
                  
           
        )
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    texting:{
        fontSize: 50,
    }
})