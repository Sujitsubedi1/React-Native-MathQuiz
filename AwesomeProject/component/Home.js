import React, { Component } from 'react';

import {View, Button} from 'react-native';

export default class Home extends React.Component{

    static navigationOptions= {
        headerShown: false
    }

    constructor(props){
     
            super(props)
      
    }


    render(){
        return(
            <View style ={{flex:1}}>
                <View style ={{height:30, width:90, flex:0.2, justifyContent:"center", alignContent:"center"}}>
              <Button
                title = "START"
                onPress={()=> this.props.navigation.navigate('Main')}

                >

              </Button>

              </View>

            </View>
        )
    }
}