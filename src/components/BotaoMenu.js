import React from "react";
import { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Constante from "../util/Constante";


export default class BotaoMenu extends Component {
    constante = new Constante();
    render() {
        return (
            <>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={{ backgroundColor: '#fefffc', width: 100, height: 110, borderRadius: 10, borderWidth:1, elevation:0.5, borderColor:'#ECECEC', alignItems:'center', paddingVertical:10, marginHorizontal:10, ...this.props.style}}
                >
                    {this.props.icone && this.props.icone}

                    <Text style={{...this.constante.fonts.texto.negrito.medio, color: this.constante.cor.tituloPreto, marginTop:20, textAlign:"center"}}>{this.props.titulo}</Text>
                </TouchableOpacity>
            </>
        )
    }
}