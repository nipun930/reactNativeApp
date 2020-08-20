import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, Button, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
// import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';


export default class SignupPage extends Component {
    state = {
        text: '',
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',

        hasCameraPermission: null,
        picture: null
    };
    componentDidMount() {
        // console.log('props => ', this.props)
    }
    componentDidUpdate() {
        // console.log('props => ', this.props);
        // (this?.props?.route?.params?.Pictire) ?
        //     this.setState({}) :
        //     null;
    }

    signup = () => {
        this.setState({
            text: 'Creating Account . . .',
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
        setTimeout(() => {
            this.setState({ text: '' });
            this.props.navigation.navigate('Login');
        }, 4000)
    }

    login() {
        this.props.navigation.navigate('Login');
    }

    askPermission = async () => {
        return await Permissions.askAsync(Permissions.CAMERA);
    }
    readPermissions = async () => {
        return await Permissions.getAsync(Permissions.CAMERA);
    }

    getProfilePicToUpload = async () => {
        let camPermission = await Permissions.getAsync(Permissions.CAMERA);
        if (camPermission.status == 'granted') {
            this.props.navigation.navigate('CameraComponent')
        } else {
            let askedPermission = await Permissions.askAsync(Permissions.CAMERA);
            (askedPermission.status == 'granted') ?
                this.props.navigation.navigate('CameraComponent') :
                null;

        }
    }

    render() {
        // let cam = 
        // let img = 

        // const Image = () => {
        //     return (this?.props?.route?.params?.Pictire) ?
        //         img
        //         :
        //         cam;
        // }
        return (

            <SafeAreaView>
                <ScrollView contentContainerStyle={styles.container}>
                    {/* <View style={styles.container}> */}

                        <Text style={styles.text} onPress={() => { this.props.navigation.navigate('Login') }}>
                            {(this.state.text) ? this.state.text : `Already have an Account ?`}
                        </Text>

                        <Image
                            style={styles.camera} tou={this.getProfilePicToUpload}
                            source={{ uri: this?.props?.route?.params?.Pictire?.uri }} >
                        </Image>
                        <Button title='Add Picture' style={styles.addPic} onPress={this.getProfilePicToUpload} />

                        {/* <ScrollView contentContainerStyle={styles.formContainer}> */}

                            <TextInput style={styles.input}
                                onChange={i => { this.setState({ fullName: i.nativeEvent.text }) }}
                                value={this.state.fullName} placeholderTextColor='blue'
                                placeholder="Full Name" />
                            <TextInput style={styles.input}
                                onChange={i => { this.setState({ email: i.nativeEvent.text }) }}
                                value={this.state.email} placeholderTextColor='blue'
                                placeholder="Email Id" autoCompleteType={"email"} />

                            <TextInput style={styles.input}
                                onChange={i => { this.setState({ password: i.nativeEvent.text }) }}
                                value={this.state.password} placeholderTextColor='blue'
                                placeholder="Enter Password" secureTextEntry={true} />

                            <TextInput style={styles.input}
                                onChange={i => { this.setState({ confirmPassword: i.nativeEvent.text }) }}
                                value={this.state.confirmPassword} placeholderTextColor='blue'
                                placeholder="Confirm Password" secureTextEntry={true} />

                            <Button style={styles.button} title="Signup" onPress={this.signup} />

                        {/* </ScrollView> */}

                        <StatusBar style="auto" />

                    {/* </View> */}
                </ScrollView>

            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#7BDCB5',
        height: '100%',
        width: '100%'
    },
   
    //=======================

    text: {
        // position: 'relative',
        marginTop: 40,
        textAlign: 'center',
        // top: 40,
        paddingTop: 5,
        borderRadius: 9,
        backgroundColor: '#B279D2',
        width: '90%',
        height: 40,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
     //=======================
     camera: {
        // position: 'relative',
        // top: 95,
        marginTop: 10,
        marginBottom: 10,
        height: 90,
        width: 90,
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5
    },

    formContainer: {
        // position: 'absolute',
        // top: '30%',
        // width: '90%',
        // flex: 1,
        // alignItems: 'center',
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
    },

    //=======================
    button: {
        // height: 40,
        // width: 40,
        // color: 'white',
        // backgroundColor: 'black',
    },
    
    addPic: {
        // position: 'relative',
        // top: 110,
        // height: 90,
        // width: 90,
        // backgroundColor: 'transparent',
        // borderColor: 'black',
        // borderWidth: 2,
        // borderRadius: 5
        // marginBottom: 20
    }
    //=======================
});