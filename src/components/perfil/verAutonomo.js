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
import { useRoute } from '@react-navigation/native';

export default function VerAutonomo({navigation}) {

    const route = useRoute();
    const {userId} = route.params;

    const professionalData = route.params.professionalData;

    const handleSubmit = async () => {
        navigation.navigate('Agenda', {professionalData, userId});
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.topo}>
                <Image style={{flex: 1, width: '100%', marginTop: 10, height: 350, borderRadius: 20}}
                       source={require('../img/homem.jpg')}/>
                {/*<Image style={{flex: 1, width: '100%', marginTop: 10, height: 350, borderRadius: 20}}*/}
                {/*       source={professionalData.foto}/>*/}
            </View>
            <View style={styles.all}>
                <Text style={styles.title}>{professionalData.nome_completo}, {professionalData.idade}</Text>
                <TouchableOpacity style={styles.starGroup}>
                    <View style={styles.alignStar}>
                        {professionalData.media_avaliacao > 0 ? (
                            Array.from({ length: professionalData.media_avaliacao }).map((_, index) => (
                                <Image style={{margin: 2, width: 15, height: 18}}
                                       source={require('../img/icons/star.png')}/>
                            ))
                        ) : (
                            <Text style={styles.noAvaliation}>Não possui avaliações</Text>
                        )}
                    </View>
                    {professionalData.media_avaliacao > 0 && (
                        <Text style={styles.starText}>
                            (Média: {(Math.round(professionalData.media_avaliacao * 10) / 10).toFixed(1)})
                        </Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignInfo}>
                    <Image style={{ width: 15, height: 18 }} source={require('../img/icons/building.png')} />
                    <Text style={[styles.profissao, { textTransform: 'capitalize' }]}>
                        Profissão: {professionalData.profissao}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignInfo}>
                    <Image style={{ width: 15, height: 18 }} source={require('../img/icons/gender.png')} />
                    <Text style={[styles.profissao, { textTransform: 'capitalize' }]}>
                        Gênero: {professionalData.genero}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignInfo}>
                    <Image style={{ width: 15, height: 18 }} source={require('../img/icons/gps.png')} />
                    <Text style={[styles.profissao, { textTransform: 'capitalize' }]}>
                        Cidade: {professionalData.cidade} - {professionalData.estado}
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.info}>
                <Text style={styles.descricaoTitleText}>
                    Sobre mim
                </Text>
                <View style={styles.descricaoBox}>
                    <Text style={styles.descricao}>{professionalData.descricao}
                    </Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btnEdit} onPress={handleSubmit}>
                    <Image source={require('../img/icons/file-earmark-text-fill.png')}/>
                    <Text style={styles.btnText}>Verificar Agenda</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        flex: 1,
    },
    topo: {
        padding: 15,
        paddingBottom: 0,
        flexDirection: 'column',
        alignItems: 'center',
    },
    info: {
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
    },
    title: {
        fontSize: 25,
        fontWeight: "normal",
        color: '#666',
    },
    all: {
        padding: 15,
        alignItems: 'flex-start',
        color: '#666',
    },
    profissao: {
        fontSize: 20,
        fontWeight: "normal",
        color: '#666',
        paddingLeft: 10,
    },

    descricaoTitleText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#666',
    },
    descricaoBox: {
        minHeight: 45,
        color: '#666',
    },
    descricao: {
        fontSize: 16,
        color: '#666',
    },
    alignInfo: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
    },
    alignStar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4
    },
    starGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    starText: {
        paddingLeft: 5,
        fontSize: 14,
        color: '#666',
    },
    buttons: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    btnEdit: {
        marginBottom: 15,
        width: '100%',
        height: 46,
        borderRadius: 8,
        backgroundColor: '#1333cd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 16,
        marginLeft: 6,
        color: '#fff',
    }
});