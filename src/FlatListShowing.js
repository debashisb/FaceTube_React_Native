import React, {Component} from 'react';
import {Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    FlatList,
    ScrollView,
    Image
} from 'react-native';
import jsData from './jsData';
import Swipeout from 'react-native-swipeout';


class FlatListItem extends React.Component{
    render(){

        var swipeBtn = [{
            text: 'Delete',
            backgroundColor: 'red',
        }]
        return(
            <Swipeout right = {swipeBtn}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor:this.props.index%2==0?'white':'yellow',
                margin: 1,
                paddingLeft:5,
                paddingTop:6,
                paddingBottom:6
            }}>
                <Image

                    source={{uri: this.props.item.imageUri}}
                    style={{
                        width: 100, height: 100, margin:3
                    }}
                >

                </Image>
                <View
                    style={{
                        flex:1,
                        flexDirection:'column'
                    }}
                >
                    <Text>{this.props.item.name}</Text>
                    <Text>{this.props.item.institute}</Text>
                    <Text>{this.props.item.address}</Text>
                </View>


            </View>
            </Swipeout>
        );
    }
}

export default class FlatListShowing extends React.Component{

    render(){
        return(
            <View>
                <FlatList
                data={jsData}
                renderItem={({item,index})=>
                {
                    //console.log(`Item=${JSON.stringify(item)},index = ${index}`);
                    return(
                        <FlatListItem item={item} index={index}></FlatListItem>
                    );

                }}>


                </FlatList>
            </View>

        );
    }


}