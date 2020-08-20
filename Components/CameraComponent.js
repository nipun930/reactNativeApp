import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons'; 
import * as Permissions from 'expo-permissions';


export default class CameraComponent extends Component {

    state = {
        cameraReady: false,
        camRef: null,
        cameraType: 'rear'
    };

    // const ref = null;

    onCameraReady = () => {
        this.setState({ cameraReady: true })
    }

    handleCameraType = async () => {
        if (this.state.cameraReady && this.camera) {
            this.setState({
                cameraType: (this.state.cameraType === Camera.Constants.Type.back) ? Camera.Constants.Type.front : Camera.Constants.Type.back
            })
        }else{
            // console.log('not working');
        }
    }

    clickPic = async (ref) => {
        if (this.state.cameraReady && this.camera) {
            const pic = await this.camera.takePictureAsync()
            // console.log('picture', pic);
            this.props.navigation.navigate('Signup', { Pictire: pic })
        } else {
            // console.log('not clicking camera');
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Camera style={styles.camera} type={this.state.cameraType} ratio={'16:9'}
                    onCameraReady={this.onCameraReady} ref={ref => this.camera = ref}>
                    <View style={styles.cameraUI} >
                        <View style={styles.clickButton}>
                            {/* <Ionicons name="md-camera" size={65} color="grey" onPress={this.clickPic} /> */}
                            <MaterialIcons name="camera" size={70} color="grey" onPress={this.clickPic} />
                        </View>
                        <View style={styles.changeCam}>
                            <Ionicons name="md-reverse-camera" size={50} color="grey" onPress={this.handleCameraType} />
                        </View>
                    </View>
                </Camera>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    camera: {
        flex: 1,
        // alignItems: 'center',
    },

    cameraUI: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        // textAlign: 'center',
        // borderRadius: 60,
        backgroundColor: "rgba(29,27,28,.5)",
        width: '100%',
        height: 100,
        position: 'absolute',
        bottom: 0,
    },

    clickButton: {
        // fontSize: 20,
        // fontWeight: 'bold',
        // paddingTop: 14
        position: 'absolute',
        left: '40%',
    },
    changeCam: {
        position: 'absolute',
        left: '70%',
        // height: 50,
        borderWidth: 2,
        borderRadius: 10
    }

});
