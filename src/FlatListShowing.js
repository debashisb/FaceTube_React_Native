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
import listData from "./jsdata";


class FlatData extends React.Component{
    render(){
        return(
            <View style={{
                flex: 1,
                backgroundColor:this.props.index%2==0?'white':'green'
            }}>
                <Text>{this.props.item.Name}</Text>
                <Text>{this.props.item.Institute}</Text>
                <Text>{this.props.item.Address}</Text>

            </View>
        );
    }
}

export default class FlatListShowing extends React.Component{

    render(){
        return(
            <View>
                <FlatList
                data={listData}
                renderItem={(item,index)=>
                {
                    return(
                        <FlatData item={item} index={index}></FlatData>
                    );

                }}>


                </FlatList>
            </View>

        );
    }


}