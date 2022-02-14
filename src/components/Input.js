import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import Constante from '../util/Constante';

export default class Input extends Component {
    constante = new Constante();
    render() {
        return (
            <View style={{ borderColor: '#dbdad9', borderWidth: 1, borderRadius: 5, width: '100%', flexDirection: 'row', alignItems: 'center', height:'auto' }}>
                <TextInput
                onChangeText={this.props.onChangeText}
                placeholder={this.props.placeholder} 
                secureTextEntry={this.props.secureTextEntry}
                selectionColor={this.constante.cor.principal}
                 style={{ flex: 1, padding:10, ...this.props.style}} />
                {this.props.icone && this.props.icone}
            </View>
        )
    }
}