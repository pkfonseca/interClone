import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Constante from "../util/Constante";
export default class Header extends Component {
    constante = new Constante();

    render() {
        return (
            <View style={{width:'100%', height:'auto',flexDirection:'row', justifyContent:'space-between'}}>

                <TouchableOpacity style={{width:50, height:50, borderRadius:500}}>
                <AntDesign name='arrowleft' size={25} color={this.constante.cor.principal}/>
                </TouchableOpacity>

                <Text style={{...this.constante.fonts.texto.negrito.medio, color:this.constante.cor.tituloPreto, ...this.props.style}}>{this.props.titulo}</Text>
                <View style={{width:50, height:50}}/>
            </View>
        )
    }
}