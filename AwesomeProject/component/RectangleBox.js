import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class Rectanglebox extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
   
        return(
        
                 <View style = {styles.rectanglebox}>
                                    <View style = {{flex:0.5}}/>
                                <View style = {styles.QuestionView}>
                              <Text style = {styles.questiontext}> {this.props.firstnum}</Text>
                              <Text style = {styles.questiontext}> {this.props.operator}</Text>
                              <Text style = {styles.questiontext}> {this.props.secondnum}</Text>
                              <Text style= {styles.questiontext} > = ? </Text>
                               </View>

                          </View> 



        )
    }
}

const styles =StyleSheet.create({

 
  questiontext:{
    fontSize: 60,
    fontWeight: 'bold',
},
QuestionView:{
    flexDirection:'row',
    justifyContent:'center',
    
},
rectanglebox:{
    width: '100%',
    height: 200,
    borderWidth:3,
    borderStyle: 'solid',
    borderColor:'white'
   
    
},

  })
    