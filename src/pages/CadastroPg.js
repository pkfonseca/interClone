import React, { Component } from "react";
import { KeyboardAvoidingView, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Botao from "../components/Botao";
import Header from "../components/Header";
import Input from "../components/Input";
import Constante from "../util/Constante";
import Entypo from 'react-native-vector-icons/Entypo'

export default class CadastroPg extends Component {
    constante = new Constante();

    state = {
        nome: '',
        dataDeNascimento: '',
        cpf: '',
        modalVisivel: false,
        termosDeServico: false
    }
    render() {
        return (
            <View style={{ flex: 1, height: '100%', padding: 20,}}>
                <Modal
                    visible={this.state.modalVisivel}
                >

                    <View style={{ flex: 1, height: 'auto', padding: 20 }}>
                        <Header
                            onPress={() => this.setState({ modalVisivel: !this.state.modalVisivel })}
                            style={{ ...this.constante.fonts.texto.negrito.pequeno }}
                            titulo='CPF'
                        />
                        <Text style={{ marginTop: 10 }}>
                            <Text style={{ color: this.constante.cor.principal }}>{this.state.nome}</Text>
                            <Text>, somos um banco digital e de verdade. Pra registrar tudo direitinho, precisamos do seu CPF.</Text>
                        </Text>

                        <Text style={{ marginTop: 20 }}>CPF</Text>
                        <Input
                            onChangeText={(pTexto) => this.setState({ cpf: pTexto })}
                            style={{ backgroundColor: '#edebeb' }}
                            placeholder='Digite apenas os dígitos' />

                        <View style={{ width: '100%', height: 'auto', marginTop: 'auto', flexDirection: "row", alignItems: "center", padding: 2, justifyContent: "space-around" }}>
                            {this.state.cpf === '' && (
                                <Text style={{ width: '77%', fontSize: 12, textAlign: "left" }}>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Li e concordo com os Termos e Condições de </Text>
                                    <Text>Abertura de Conta, </Text>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>com a </Text>
                                    <Text>Política de privicade Inter </Text>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>e com os termos e condições de </Text>
                                    <Text>Uso do Super App Inter</Text>
                                    <Text>.</Text>
                                </Text>

                            )}
                            {this.state.cpf === '' && (
                                <TouchableOpacity style={{ width: 20, height: 20, borderWidth: 2, borderColor: 'gray', borderRadius: 5, padding: 2 }}
                                    activeOpacity={1}
                                />
                            )}

                            {this.state.cpf !== '' && (
                                <Text style={{ width: '77%', fontSize: 12, textAlign: "left" }}>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Li e concordo com os Termos e Condições de </Text>
                                    <Text style={{ color: this.constante.cor.principal, fontWeight: 'bold' }}>Abertura de Conta, </Text>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>com a </Text>
                                    <Text style={{ color: this.constante.cor.principal, fontWeight: 'bold' }}>Política de privicade Inter </Text>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>e com os termos e condições de </Text>
                                    <Text style={{ color: this.constante.cor.principal, fontWeight: 'bold' }}>Uso do Super App Inter</Text>
                                    <Text>.</Text>
                                </Text>
                            )}
                            {this.state.cpf !== '' && this.state.termosDeServico !== true && (
                                <TouchableOpacity style={{ width: 20, height: 20, borderWidth: 2, borderColor: 'gray', borderRadius: 5, padding: 2 }}
                                    onPress={() => this.setState({ termosDeServico: !this.state.termosDeServico })}
                                />
                            )}

                            {this.state.termosDeServico && (

                                <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: this.constante.cor.principal, borderRadius: 5, padding: 2 }}
                                    onPress={() => this.setState({ termosDeServico: !this.state.termosDeServico })}>
                                    <Entypo name="check" color={'white'} size={15} />
                                </TouchableOpacity>
                            )}
                        </View>
                        {this.state.termosDeServico ?
                            <Botao
                                titulo='Continuar'
                                color='white'
                                onPress={() => this.setState({ modalVisivel: !this.state.modalVisivel })}
                            />
                            :
                            <Botao
                                titulo='Continuar'
                                color='#C7C9CD'
                                activeOpacity={1}
                                style={{ backgroundColor: '#DEDFE4' }}
                            />
                        }
                    </View>
                </Modal>
                <Header
                    style={{ ...this.constante.fonts.texto.negrito.pequeno }}
                    titulo='Boas-vindas!'
                    onPress={() => this.props.navigation.goBack()}
                />
                <Text>Para começar, informe pra gente seu nome e sua data de nascimento.</Text>
                <Text style={{ marginTop: 10 }}>
                    <Text>Caso vocês esteja abrindo a conta para uma pessoa</Text>
                    <Text style={{ fontWeight: 'bold' }}> menor de idade,</Text>
                    <Text> preencha com o nome e a data de nascimento dessa pessoa.</Text>
                </Text>

                <View style={{ width: '100%', marginTop: 30 }}>
                    <Text>Nome</Text>
                    <Input
                        onChangeText={(pTexto) => this.setState({ nome: pTexto })}
                        style={{ backgroundColor: '#edebeb' }}
                        placeholder='Digite aqui seu nome' />

                    <Text style={{ marginTop: 20 }}>Data de nascimento</Text>
                    <Input
                        onChangeText={(pTexto) => this.setState({ dataDeNascimento: pTexto })}
                        style={{ backgroundColor: '#edebeb' }}
                        placeholder='DD/MM/AAAA' />
                </View>


                {this.state.nome !== '' && this.state.dataDeNascimento !== '' ?
                    <Botao
                        titulo='Continuar'
                        color='white'
                        onPress={() => this.setState({ modalVisivel: !this.state.modalVisivel })}
                        style={{ marginTop: 'auto' }}
                    />
                    :
                    <Botao
                        titulo='Continuar'
                        color='#C7C9CD'
                        activeOpacity={1}
                        style={{ marginTop: 'auto', backgroundColor: '#DEDFE4' }}
                    />
                }
            </View >
        )
    }
}