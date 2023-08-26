import React, {useEffect, useState} from 'react';
import {
    BackHandler,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';

export default function Listagem({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.list}>
                <View>
                    <TouchableOpacity>
                        <Image style={{width: 15, height: 18}} source={require('../img/icons/gps.png')}/>
                        <Text style={styles.profissao}>Filtrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <Image source={require('../img/profissoes/pintorIcon.png')} style={styles.icon}/>
                    <View style={styles.content}>
                        <Text>Lucas Gouvêa Alves de Oliveira</Text>
                        <Text>Profissão: <Text style={styles.span}>Pintor</Text></Text>
                        <View style={styles.avaliation}>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Text style={styles.numberAvaliation}>(4) avaliações</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <Image source={require('../img/profissoes/eletricistaIcon.png')} style={styles.icon}/>
                    <View style={styles.content}>
                        <Text>Guilherme Soares Lourenço</Text>
                        <Text>Profissão: <Text style={styles.span}>Eletricista</Text></Text>
                        <View style={styles.avaliation}>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Text style={styles.numberAvaliation}>(4) avaliações</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <Image source={require('../img/profissoes/faxineiraIcon.png')} style={styles.icon}/>
                    <View style={styles.content}>
                        <Text>Antônio Boeri</Text>
                        <Text>Profissão: <Text style={styles.span}>Faxineiro(a)</Text></Text>
                        <View style={styles.avaliation}>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Text style={styles.numberAvaliation}>(4) avaliações</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <Image source={require('../img/profissoes/pedreiroIcon.png')} style={styles.icon}/>
                    <View style={styles.content}>
                        <Text>Luiz Geraldo Campos</Text>
                        <Text>Profissão: <Text style={styles.span}>Pedreiro</Text></Text>
                        <View style={styles.avaliation}>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Text style={styles.numberAvaliation}>(4) avaliações</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <Image source={require('../img/profissoes/ecanadorIcon.png')} style={styles.icon}/>
                    <View style={styles.content}>
                        <Text>Natalia Oliveira</Text>
                        <Text>Profissão: <Text style={styles.span}>Ecanador(a)</Text></Text>
                        <View style={styles.avaliation}>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Text style={styles.numberAvaliation}>(4) avaliações</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <Image source={require('../img/profissoes/cuidadorIcon.png')} style={styles.icon}/>
                    <View style={styles.content}>
                        <Text>Bianca Henrique Almeida</Text>
                        <Text>Profissão: <Text style={styles.span}>Cuidador(a)</Text></Text>
                        <View style={styles.avaliation}>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Text style={styles.numberAvaliation}>(4) avaliações</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <Image source={require('../img/profissoes/piscineiroIcon.png')} style={styles.icon}/>
                    <View style={styles.content}>
                        <Text>Gilson Mariano Souza</Text>
                        <Text>Profissão: <Text style={styles.span}>Piscineiro</Text></Text>
                        <View style={styles.avaliation}>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Text style={styles.numberAvaliation}>(4) avaliações</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <Image source={require('../img/profissoes/jardineiroIcon.png')} style={styles.icon}/>
                    <View style={styles.content}>
                        <Text>Fernando Depieri Junior</Text>
                        <Text>Profissão: <Text style={styles.span}>Jardineiro</Text></Text>
                        <View style={styles.avaliation}>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Text style={styles.numberAvaliation}>(4) avaliações</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <Image source={require('../img/profissoes/chaveiroIcon.png')} style={styles.icon}/>
                    <View style={styles.content}>
                        <Text>Bruno Alcantra</Text>
                        <Text>Profissão: <Text style={styles.span}>Chaveiro</Text></Text>
                        <View style={styles.avaliation}>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Image source={require('../img/icons/star.png')} style={styles.avaliationIcon}/>
                            <Text style={styles.numberAvaliation}>(4) avaliações</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    list: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    box: {
        flexDirection: 'row',
        padding: 15,
        paddingTop: 15,
        paddingBottom: 1,
        borderTopWidth: 1,
        borderColor: '#d5d5d5eb',
        margin: 10,
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    content: {
        flexDirection: 'column',
        flex: 1,
        gap: 5,
    },
    span: {
        color: '#666666',
    },
    avaliation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avaliationIcon: {
        width: 20,
        height: 20,
    },
    numberAvaliation: {
        marginLeft: 8,
        fontSize: 14,
    },
});