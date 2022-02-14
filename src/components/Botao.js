import React, { Component } from "react";
import { Text, TouchableOpacity } from 'react-native';
import Constante from "../util/Constante";

export default class Botao extends Component {
    constante = new Constante();
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                activeOpacity={this.props.activeOpacity}
                style={{ paddingVertical: 10, borderRadius: 10, alignItems: 'center', backgroundColor: this.constante.cor.principal, ...this.props.style }}>
                <Text
                    style={{ ...this.constante.fonts.texto.negrito.medio, color: this.props.color, }}
                >
                    {this.props.titulo}
                </Text>
                {this.props.icone && this.props.icone}
            </TouchableOpacity>
        );
    }
}