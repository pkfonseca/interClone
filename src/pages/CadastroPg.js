import React, { Component } from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import Constante from "../util/Constante";

export default class CadastroPg extends Component {
    constante = new Constante();

    render() {
        return (
            <View style={{ flex: 1, height: 'auto', padding: 20 }}>
                <Header
                    style={{...this.constante.fonts.texto.negrito.pequeno}}
                    titulo='Boas-vindas!'
                />

                <Text>Para começar, informe pra gente seu nome e sua data de nascimento.</Text>

            </View>
        )
    }
}