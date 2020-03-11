import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import RectangleBox from './RectangleBox';
import CountDown from 'react-native-countdown-component';
import Tets from './tets';

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
            changeTimer:20,
            mike:"unchanged"
            
        }

        this.getdata= this.getdata.bind(this);

    }


    componentDidMount = () => {
        console.log("HELLO" +this.state.mike);
        <Tets sendData={ v => this.setState({mike: v}) } />
        console.log(this.state.mike);
     

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
             this.state.calc = (this.state.firstnumber / this.state.secondnumber).toFixed(2);
                }

                // console.log(this.state.calc)
                this.state.Stringed= this.state.calc.toString();
        }

        getAnswer(answer){
            if(answer == this.state.calc){


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


            <ImageBackground source={require("../Images/BG.jpg")} style={{flex:1}}>
               
          
                <View>

                <View style ={styles.questionview}>
                            <Text style = {{fontSize: 25}}>
                            QUESTION 1</Text>


                     <Text style={{padding:10, margin:50, fontSize:25}}>
                     {this.state.Score}

                   </Text>

                   <CountDown
                      until={this.state.Timer}
                      onFinish={() => this.GameOver()}
                    onChange ={() => this.recordtime()}
                     size={20}
                     timeToShow={['S']}
                     timeLabels={{s: 'SS'}}
                         />
                            </View>


                          <View style ={{flex:0.2}}/>

                        <RectangleBox firstnum = {this.state.firstnumber} secondnum = {this.state.secondnumber} operator={this.state.selectedoperator}/> 
                        
                        <View style ={{flex:0.2}}/>
                        <View style= {styles.OptionsView}>
                            
            <TouchableOpacity onPress = {() => this.getAnswer(this.state.Button1)}>
                                <Text style = {{color: 'black', fontSize:30}}>{this.state.Button1}
                                </Text>

                     </TouchableOpacity>

                    <View style ={{flex:0.2}}/>

                    <TouchableOpacity onPress = {() =>this.getAnswer(this.state.Button2)}>
                                <Text style = {{color: 'black', fontSize:30}}> {this.state.Button2}
                                </Text>

                     </TouchableOpacity>



                     <View style={{flex:0.2}}/>


                     <TouchableOpacity onPress = {() =>this.getAnswer(this.state.Button3)}>
                                <Text style = {{color: 'black', fontSize:30}}>{this.state.Button3}
                                </Text>

                     </TouchableOpacity>



                     <View style={{flex:0.2}}/>
                     <TouchableOpacity onPress = {() =>this.getAnswer(this.state.Button4)}>

                                <Text style = {{color: 'black', fontSize:30}}>{this.state.Button4}
                                </Text>

                     </TouchableOpacity>
        
                     </View>


                        </View>
                    
          

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({



    questionview:{

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'


    },

 QuestionView:{
        flexDirection:'row',
        justifyContent:'center',

    },

  

    questiontext:{
        fontSize: 60,
        fontWeight: 'bold',
    },
    OptionsView:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },

  });