import React, {Component} from 'react';
import {Platform,Dimensions,ScrollView, StyleSheet, Text, View, Button, Alert, FlatList} from 'react-native';



export default class HomeScr extends React.Component {
    render() {
        let scrnW = Dimensions.get('window').width;
        let scrnH = Dimensions.get('window').height;

        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}>

                <View style={{
                    backgroundColor:'yellow',
                    flex:1,
                    marginTop:20,
                    width:scrnW,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text>This is Yellow screen.</Text>
                </View>
                <View style={{
                    backgroundColor:'blue',
                    flex:1,
                    marginTop:20,
                    width:scrnW,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text>This is Blue Screen.</Text>
                </View>
                <View style={{
                    backgroundColor:'red',
                    flex:1,
                    marginTop:20,
                    width:scrnW,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text>This is Red Screen.</Text>
                </View>
                <View style={{
                    backgroundColor:'green',
                    flex:1,
                    marginTop:20,
                    width:scrnW,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text>This is Green Screen.</Text>
                    <Button title="Show List" onPress={()=>this.props.navigation.navigate('List')}/>
                </View>
            </ScrollView>

        );
    }
}