import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default class LoginPage extends Component {

    state = {
        text: '',
        email: '',
        password: ''
    };

    login = () => {
        let credentials = {
            email: this.state.email,
            password: this.state.password,
        }
        this.setState({
            text: 'Logging in . . .',
            email: '',
            password: ''
        })
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(data => data.json())
            .then(response => {
                if(response && !response.completed){
                    this.setState({ text: '' });
                    this.props.navigation.navigate('Profile');
                }
            });
    }

    signup(){
        this.props.navigation.navigate('Signup');
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.text} onPress={()=>{this.props.navigation.navigate('Signup')}}>
                    {(this.state.text) ? this.state.text : `Don't have any Account ?`}
                </Text>

                <View style={styles.formContainer}>

                    <TextInput style={styles.input}
                        onChange={i => { this.setState({ email: i.nativeEvent.text }) }}
                        value={this.state.email} placeholderTextColor='blue'
                        placeholder="Email Id" autoCompleteType={"email"} />

                    <TextInput style={styles.input}
                        onChange={i => { this.setState({ password: i.nativeEvent.text }) }}
                        value={this.state.password} placeholderTextColor='blue'
                        placeholder="Password" secureTextEntry={true} />

                    <Button style={styles.button} title="Login" onPress={this.login} />

                </View>

                <StatusBar style="auto" />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#7BDCB5',
        height: '100%'
    },
    //=======================

    text: {

        position: 'absolute',
        top: 40,
        textAlign: 'center',
        paddingTop: 5,
        borderRadius: 9,
        backgroundColor: '#B279D2',
        width: '90%',
        height: 40,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    },

    formContainer: {
        position: 'absolute',
        top: 200,
        width: '90%',
        flex: 1,
        alignItems: 'center',

    },
    //=======================
    input: {
        padding: 12,
        height: 40,
        width: "90%",
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 9,
        marginTop: 4,
        marginBottom: 4,
        color: 'black'
    },

    //=======================
    button: {
        // height: 40,
        // width: 40,
        // color: 'white',
        // fontSize: 40,
        // fontWeight: 'bold',
        // backgroundColor: 'black',
    }
    //=======================
});