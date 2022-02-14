import React, { Component } from "react";
import { Dimensions, Image, KeyboardAvoidingView, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Botao from "../components/Botao";
import Input from "../components/Input";
import Constante from "../util/Constante";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from "../components/Header";
export default class LoginPg extends Component {
    constante = new Constante();

    state = {
        senhaVisivel: false,
        modalVisivel: false,
    }

    render() {
        return (
            <KeyboardAvoidingView>
                <ScrollView>
                    <Modal
                        visible={this.state.modalVisivel}>
                        <View style={{ flex: 1, height: 'auto', padding: 20 }}>
                            <Header
                                onPress={()=>this.setState({modalVisivel: !this.state.modalVisivel})}
                                titulo='Contas' />

                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", borderRadius: 10, borderWidth: 1, padding: 10, justifyContent: 'space-between', borderColor: this.constante.cor.principal, marginTop: 'auto' }}>
                                <Text style={{ ...this.constante.fonts.texto.negrito.pequeno, color: this.constante.cor.principal }}>Entrar com outra conta</Text>
                                <AntDesign size={25} name='arrowright' color={this.constante.cor.principal} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cadastro')} style={{ flexDirection: "row", alignItems: "center", borderRadius: 10, padding: 10, justifyContent: 'space-between', backgroundColor: this.constante.cor.principal, marginTop: 10 }}>
                                <Text style={{ ...this.constante.fonts.texto.negrito.pequeno, color: this.constante.cor.secundaria }}>Abrir conta completa e gratuita</Text>
                                <AntDesign size={25} name='arrowright' color={this.constante.cor.secundaria} />
                            </TouchableOpacity>
                        </View>
                    </Modal>

                    <View style={{ width: '100%', height: Dimensions.get('window').height, padding: 20 }}>

                        <View style={{ width: '100%', height: 'auto', }}>
                            <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => { console.log('clicou') }}>
                                <AntDesign name='questioncircleo' size={26} color={this.constante.cor.principal} />
                            </TouchableOpacity>
                        </View>


                        <Image source={require('../assets/logointer.png')} style={{ width: 140, height: 140, alignSelf: 'center' }} resizeMode='contain' />

                        <Text style={{ ...this.constante.fonts.texto.normal.medio }}>E-mail</Text>
                        <Input />

                        <Text style={{ ...this.constante.fonts.texto.normal.medio, marginTop: 20 }}>Senha</Text>
                        <Input
                            placeholder='Senha'
                            secureTextEntry={this.state.senhaVisivel ? false : true}
                            icone={
                                <TouchableOpacity style={{ width: 40 }} onPress={() => this.setState({ senhaVisivel: !this.state.senhaVisivel })}>
                                    {this.state.senhaVisivel ?
                                        <Ionicons name='eye' size={30} color={this.constante.cor.principal} />
                                        :
                                        <Ionicons name='eye-off' size={30} color={this.constante.cor.principal} />
                                    }
                                </TouchableOpacity>
                            } />

                        <Botao titulo='Entrar' style={{ marginTop: 20,}} color={'white'} />


                        <TouchableOpacity style={{ width: '100%', alignItems: "center", marginTop: 20 }}>
                            <Text style={{ ...this.constante.fonts.texto.normal.pequeno, color: this.constante.cor.principal }}>Esqueci minha senha</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: "row", alignItems: "center", width: '100%', justifyContent: 'space-between', height: 'auto', marginTop: '23%' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialCommunityIcons name='shield-lock-outline' size={20} color={this.constante.cor.principal} />
                                <Text style={{ ...this.constante.fonts.texto.normal.pequeno, color: this.constante.cor.principal }}>iSafe</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ modalVisivel: true })}>
                                <Text style={{ ...this.constante.fonts.texto.normal.pequeno, color: this.constante.cor.principal }}>Trocar ou abrir conta</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}