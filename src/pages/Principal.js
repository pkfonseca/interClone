import React from "react";
import { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Constante from "../util/Constante";
import Ionicons from 'react-native-vector-icons/Ionicons'
import BotaoMenu from "../components/BotaoMenu";
import Fontisto from 'react-native-vector-icons/Fontisto'

export default class PrincipalPg extends Component {
    constante = new Constante();

    state = {
        saldoVisivel: false
    }

    render() {
        return (
            <View style={{ width: '100%', height: '100%', padding: 0 }}>
                <View style={{ padding: 10, width: '100%', height: 'auto'}}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 80, height: 80, justifyContent: 'center' }}>
                            <Image source={require('../assets/logointer.png')} style={{ width: '100%', height: '100%' }} />
                        </View>

                        <TouchableOpacity style={{ marginLeft: 'auto' }}>
                            <AntDesign name='search1'
                                size={26}
                                style={{ color: this.constante.cor.principal }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 26 }}>
                            <SimpleLineIcons name='menu'
                                size={26}
                                style={{ color: this.constante.cor.principal }} />
                        </TouchableOpacity>
                    </View>

                    {this.state.saldoVisivel ?
                        <View style={{ width: '100%', height: 'auto', flexDirection: 'row' }}>
                            <View style={{ borderRadius: 5, height: 30, width: 140, borderWidth: 1, borderColor: '#cecfcc', paddingVertical: 5 }}>
                                <Text style={{ ...this.constante.fonts.texto.negrito.medio, textAlign: "center", color: 'black' }}>R$ 1.500,00</Text>
                            </View>

                            <TouchableOpacity style={{ marginLeft: 15 }}>
                                <Ionicons name='eye'
                                    size={26}
                                    style={{ color: this.constante.cor.principal }} onPress={() => this.setState({ saldoVisivel: !this.state.saldoVisivel })} />
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{ width: '100%', height: 'auto', flexDirection: 'row' }}>
                            <View style={{ backgroundColor: '#c4c4c4', width: 140, height: 30, borderRadius: 5 }} />
                            <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => this.setState({ saldoVisivel: !this.state.saldoVisivel })}>
                                <Ionicons name='eye-off'
                                    size={26}
                                    style={{ color: this.constante.cor.principal }} />
                            </TouchableOpacity>
                        </View>
                    }
                    <TouchableOpacity style={{ marginTop: 5 }}>
                        <Text style={{ ...this.constante.fonts.texto.negrito.pequeno, color: this.constante.cor.principal }}>Ver extrato</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: '100%', height: 'auto', marginTop: 15, flexDirection: 'row' }}>
                    <BotaoMenu
                        icone={
                            <Ionicons name='card-outline' style={{ marginTop: 20, color: this.constante.cor.principal }} size={28} />
                        }
                        titulo='Cartões'
                    />
                    <BotaoMenu
                        icone={
                            <Ionicons name='md-pie-chart' style={{ marginTop: 20, color: this.constante.cor.principal }} size={28} />
                        }
                        titulo='Pix'
                    />
                    <BotaoMenu
                        icone={
                            <Fontisto name='line-chart' style={{ marginTop: 20, color: this.constante.cor.principal }} size={28} />
                        }
                        titulo='Investir'
                    />
                </View>
            </View>
        )
    }
}