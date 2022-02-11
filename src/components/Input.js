import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

export default class Input extends Component {
    render() {
        return (
            <View style={{ borderColor: '#dbdad9', borderWidth: 1, borderRadius: 5, width: '100%', flexDirection: 'row', alignItems: 'center', height:'auto' }}>
                <TextInput
                placeholder={this.props.placeholder} 
                secureTextEntry={this.props.secureTextEntry}
                 style={{ flex: 1, padding:10 }} />
                {this.props.icone && this.props.icone}
            </View>
        )
    }
}