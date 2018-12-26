import React from "react";
import { View, Text } from "react-native";
import {createStackNavigator} from "react-navigation";
import HomeScr from "./src/HomeScr";
import LoginScr from "./src/LoginScr";
import FlatListShowing from "./src/FlatListShowing"




export default class App extends React.Component{

    render(){
        return(
            <AppStackNav/>
        );
    }
}

const AppStackNav = createStackNavigator(
    {
        Login: LoginScr,
        Home: HomeScr,
        List: FlatListShowing
    }
)