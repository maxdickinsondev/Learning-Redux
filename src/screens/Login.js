import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import { connect } from 'react-redux';
import { editEmail, editSenha } from '../actions/AuthActions';

export class Login extends Component{

    static navigationOptions = {
        title:'Login',
        headerStyle:{
            backgroundColor:'#ffff00'
        },
        headerTintColor:'#000000'
    }

    constructor(props){
        super(props);
        this.state = {};

        this.entrar = this.entrar.bind(this);
    }
    
    entrar(){

    }

    render(){
        return(
            <View style={styles.container}>
                <Text>E-mail</Text>
                <TextInput 
                    value={this.props.email} 
                    style={styles.input}
                    onChangeText={(text) => this.props.editEmail(text)} 
                />

                <Text>Senha</Text>
                <TextInput 
                    value={this.props.senha} 
                    secureTextEntry={true} 
                    style={styles.input}
                    onChangeText={(text) => this.props.editSenha(text)} 
                />

                <Button title='Entrar' onPress={this.entrar} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        margin:10
    },
    input:{
        height:40,
        backgroundColor:'#CCCCCC',
        padding:5,
        marginBottom:10
    }
});

const mapStateToProps = (state) => {
    return {
        email:state.auth.email,
        senha:state.auth.senha
    }
};

const LoginConnect = connect(mapStateToProps, { editEmail, editSenha })(Login);

export default LoginConnect;