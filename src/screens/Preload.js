import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import firebase from '../firebase/FirebaseConnection';

export default class Preload extends Component{

    static navigationOptions = {
        title:'Home',
        header:null
    }

    constructor(props){
        super(props);
        this.state = {};

        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.props.navigation.navigate('Interna');
            }else{
                this.props.navigation.navigate('Home');
            }
        });
    }

    render(){
        return(
            <ImageBackground source={require('../../images/coin.jpg')} style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>Fluxo de Caixa</Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        width:null
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:30,
        backgroundColor:'transparent'
    }
});