import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

import CountDown from 'react-native-countdown-component';


export default class Main extends React.Component{


    constructor(props){
        super(props)
      
       

        this.state ={
            firstnumber:'',
            secondnumber:'',
            calc: '',
            operator: ['+', '-', '*', '/'],
            selectedoperator:'',
            Stringed:'',
            Button1:'',
            Button2:'',
            Button3: '',
            Button4:'',
            Score: 0,
            Timer:10,
            changeTimer:10
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
            else if(this.state.selectedoperator == '*' ){
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
          
            <View>

                <View>
                <Text>
              {this.state.firstnumber} 
      
                {this.state.selectedoperator}
         
              {this.state.secondnumber}
              
              </Text>
            </View>

            <View>
                <Button
                title= {this.state.Button1}
                onPress = {()=>this.Answer(this.state.Button1)}
                />
                <Button
                title= {this.state.Button2}
                onPress = {()=>this.Answer(this.state.Button2)}
                />
                   
                 <Button
                title= {this.state.Button3}
                onPress = {()=>this.Answer(this.state.Button3)}
                />
                      
                 <Button
                title= {this.state.Button4}
                onPress = {()=>this.Answer(this.state.Button4)}
                />

            </View>

            <View>
                <Text>
                   Score : {this.state.Score}
                   <CountDown
                      until={this.state.Timer}
                      onFinish={() => this.GameOver()}
                    onChange ={() => this.recordtime()}
                     size={50}
                     timeToShow={['S']}
                     timeLabels={{s: 'SS'}}
                         />



                  
                </Text>
                </View>

       
       
            </View>
        )
    }
}