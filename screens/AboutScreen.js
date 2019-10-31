import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class AboutScreen extends React.Component {
    _onPressHome = () => {
        this.props.navigation.openDrawer()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>ABOUT SCREEN</Text>
                <TouchableOpacity onPress={this._onPressHome}>
                    <Text>Go Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});