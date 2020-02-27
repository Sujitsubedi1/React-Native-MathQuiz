import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import CountDown from 'react-native-countdown-component';
import { Svg } from 'expo';




export default class Main extends React.Component{

    static navigationOptions= {
        headerShown: false
    }


    constructor(props){
        super(props)
      
       

        this.state ={
            firstnumber:'',
            secondnumber:'',
            calc: '',
            operator: ['+', '-', 'X', '/'],
            selectedoperator:'',
            Stringed:'',
            Button1:'',
            Button2:'',
            Button3: '',
            Button4:'',
            Score: 0,
            Timer:20,
            changeTimer:20
        }
        
    }
    componentDidMount = () => {
        var RandomNumber1 = Math.floor(Math.random() * 100) + 1 ;
        var RandomNumber2 = Math.floor(Math.random() * 100) + 1 ;
        var random = this.state.operator[Math.floor(Math.random()*this.state.operator.length)]
        this.state.firstnumber= RandomNumber1;
        this.state.secondnumber= RandomNumber2;
        this.state.selectedoperator=random;
        this.performcalc();
        this.CustomizeButton();
       
        
        this.setState({
            firstnumber:RandomNumber1,
            secondnumber:RandomNumber2,
            selectedoperator: random,
        })
     
      }
      
   

        performcalc(){
            if(this.state.selectedoperator == '+' ){
                    this.state.calc = this.state.firstnumber + this.state.secondnumber;
            }
           else if(this.state.selectedoperator == '-' ){
                this.state.calc = this.state.firstnumber - this.state.secondnumber;
        }
            else if(this.state.selectedoperator == 'X' ){
            this.state.calc = this.state.firstnumber * this.state.secondnumber;
                 }
            else if(this.state.selectedoperator == '/' ){
             this.state.calc = this.state.firstnumber / this.state.secondnumber;
                }
         
                this.state.Stringed= this.state.calc.toString();            
        }

        Answer(getanswer){
            if(getanswer == this.state.calc){
              
          
                this.ScoreUpdate();
            }
            else {
              this.GameOver();
            }   
                
        }

        GameOver(){
            this.state.Score = 0;
            this.state.Timer=0;
            console.log('Game Over')

            this.props.navigation.navigate('Home')
        }


        ScoreUpdate(){
            this.state.Score = this.state.Score+1;
            this.state.Timer=this.state.changeTimer+5;
            var abc = this.state.Timer;  
            this.state.changeTimer= abc;
            this.componentDidMount();
        }

   

        recordtime(){
            this.state.changeTimer= this.state.changeTimer-1;
            
         
        }

        checkdigit(){

        }

        CustomizeButton(){
            var a,b,c,d;
             a = this.state.Stringed;

            var temp = -1;
            var value;
            while(temp==-1){
             value = (Math.floor(Math.random()*10)+this.state.calc).toString();
            if(value!=a){
                        b= value;
                        temp=0;
            }      
        }
        var temp = -1;
        while(temp==-1){
         value = (Math.floor(Math.random()*10)+this.state.calc).toString();
        if(value!=a && value!=b){
                    c=value;
                    temp=0;
        }
             
    }

    var temp = -1;
    while(temp==-1){
     value = (Math.floor(Math.random()*10)+this.state.calc).toString();
    if(value!=a && value != b && value != c){
                d=value;
                temp=0;
    }      
}
        var array = [a,b,c,d];
        var cool = -1;
         
            this.state.Button1=  array[Math.floor(Math.random()*array.length)]
           
            while(cool==-1){
                this.state.Button2= array[Math.floor(Math.random()*array.length)]
                if(this.state.Button2 != this.state.Button1){
                    cool =0;
                }
            }
            
            var cool = -1;
            while(cool==-1){
                this.state.Button3= array[Math.floor(Math.random()*array.length)];
                if(this.state.Button3 != this.state.Button2  && this.state.Button3 != this.state.Button1){
                    cool =0;
                }
            }
           

            var cool = -1;
            while(cool==-1){
                this.state.Button4= array[Math.floor(Math.random()*array.length)];
                if(this.state.Button4 != this.state.Button3  && this.state.Button4 != this.state.Button2 && this.state.Button4 != this.state.Button1){
                    cool =0;
                }
            }
   
      
        }
    

    render(){
       

           
        return(
          
            <View style = {styles.container}>

                <View style ={styles.questionview}>

                    {this.state.firstnumber/10 < 0.99 ? (
                              <View style={styles.SquareShapeView}>
                              <Text style = {styles.questiontext}> 0{this.state.firstnumber}</Text>
                              </View>
                    ):
                    (
                        <View style={styles.SquareShapeView}>
                        <Text style = {styles.questiontext}> {this.state.firstnumber}</Text>
                        </View>
                    )}     

       
            {this.state.selectedoperator == '-' || this.state.selectedoperator == '/' ? (
                    <View style={{ width: 30,  height: 50, backgroundColor: '#04BC4E'}}>
                    <Text style = {{fontSize: 30,fontWeight: 'bold'}}> {this.state.selectedoperator}</Text>
                    </View>
                         ): (
                  <View style={{ width: 50,  height: 50, backgroundColor: '#04BC4E'}}>
                  <Text style = {{fontSize: 30,fontWeight: 'bold'}}> {this.state.selectedoperator}</Text>
                  </View> 
                  )}
          

                     {this.state.secondnumber/10 < 0.99 ? (
                              <View style={styles.SquareShapeView}>
                              <Text style = {styles.questiontext}> 0{this.state.secondnumber}</Text>
                              </View>
                    ):
                    (
                        <View style={styles.SquareShapeView}>
                        <Text style = {styles.questiontext}> {this.state.secondnumber}</Text>
                        </View>
                    )}    
           
                     <Text style={{padding:10, margin:60}}>
                   Score : {this.state.Score}
                   </Text>

                            </View>

                           
                            
               
                   <View>
                   <CountDown
                      until={this.state.Timer}
                      onFinish={() => this.GameOver()}
                    onChange ={() => this.recordtime()}
                     size={20}
                     timeToShow={['S']}
                     timeLabels={{s: 'SS'}}
                         />
                         </View>
                      
               

            <View style= {{flex:1,  justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress = {() => {this.Answer(this.state.Button1)}}>
                        <View style = {{backgroundColor: 'red', alignItems: 'center', 
                           justifyContent: 'center',  height:30, width:150}}
                            >
                                <Text style = {{color: 'white'}}>{this.state.Button1}</Text>
                      </View>
                     </TouchableOpacity>

                     <View style={{flex:0.1}}/>

                     <TouchableOpacity onPress = {() => {this.Answer(this.state.Button2)}}>
                        <View style = {{backgroundColor: 'red', alignItems: 'center', 
                           justifyContent: 'center',  height:30, width:150}}
                            >
                                <Text style = {{color: 'white'}}>{this.state.Button2}</Text>
                      </View>
                
                     </TouchableOpacity>

                     <View style={{flex:0.1}}/>

                     <TouchableOpacity onPress = {() => {this.Answer(this.state.Button3)}}>
                        <View style = {{backgroundColor: 'red', alignItems: 'center', 
                           justifyContent: 'center',  height:30, width:150}}
                            >
                                <Text style = {{color: 'white'}}>{this.state.Button3}</Text>
                      </View>
                     </TouchableOpacity>

                 

                     <View style={{flex:0.1}}/>
                    <TouchableOpacity onPress = {() => {this.Answer(this.state.Button4)}}>
                        <View style = {{backgroundColor: 'red', alignItems: 'center', 
                           justifyContent: 'center',  height:30, width:150}}
                            >
                                <Text style = {{color: 'white'}}>{this.state.Button4}</Text>
                      </View>
                     </TouchableOpacity>
                      
                         

            </View>

       
       
            </View>
        )
    }
}

const styles = StyleSheet.create({
 
    container: {
   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },

    questionview:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
     
     
    },
   
    SquareShapeView: {
      width: 50,
      height: 50,
      backgroundColor: '#04BC4E'
    },


    questiontext:{
        fontSize: 30,
        fontWeight: 'bold',
    }
   
  
   
  });