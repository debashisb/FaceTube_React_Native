import React, {Component} from 'react';
import {Platform,
        StyleSheet,
        Text,
        TextInput,
        View,
        Button,
        Alert,
        FlatList,
        ScrollView} from 'react-native';



export default class LoginScr extends React.Component {

    constructor(props){
        super(props);
        this.state={
            Email: '',
            Password: ''
        };

    }

    render() {

        return (
            <View>

                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                           keyboardType='email-address'
                           placeholder='Enter your email'
                           placeholderTextColor='red'
                           onChangeText={
                               (text)=>{
                                   this.setState(
                                       (previousState)=>{
                                           return{
                                               Email: text
                                           };
                                       }
                                   );
                               }
                           }
                           />
                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding:10,
                    borderColor:'green',
                    borderWidth:1
                }}
                            keyboardType='default'
                            placeholder='Enter password'
                            placeholderTextColor='red'
                            secureTextEntry={true}
                           onChangeText={
                               (text)=>{
                                   this.setState(
                                       (previousState)=>{
                                           return{
                                               Password: text
                                           };
                                       }
                                   );
                               }
                           }
                />
                <TextInput

                    style={{
                        height: 100,
                        margin:20,
                        padding: 10,
                        borderColor:'red',
                        borderWidth:1
                    }}
                    multiline={true}
                    keyboardType='default'
                />

                <Button title="Login" onPress={()=>this.props.navigation.navigate("Home")}/>


            </View>


        );
    }
}

export class DataSender extends React.Component{

    render(){
        return(
            <View>

            <Text>Email is: {this.state.Email} </Text>
            <Text>Entered is: { this.state.Password }</Text>
            </View>
        );
    }

}