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

    const [data, setData] = useState([]); // Initialize state to hold fetched data

    useEffect(() => {
        // Fetch data from the API
        fetch('http://192.168.1.7:8019/get-autonomo')
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData);
                console.log(data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.list}>
                <View>
                    <TouchableOpacity>
                        <Image style={{width: 15, height: 18}} source={require('../img/icons/gps.png')}/>
                        <Text style={styles.profissao}>Filtrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.list}>
                    {data.map((item) => (
                        <View style={styles.box} key={item.id}>
                            {/*<Image source={require(`../img/profissoes/${item.profissao}.png`)} style={styles.icon}/>*/}
                            <View style={styles.content}>
                                <Text>{item.nome_completo}</Text>
                                <Text>
                                    Profissão: <Text style={styles.span}>{item.profissao}</Text>
                                </Text>
                                <View style={styles.avaliation}>
                                    {Array.from({ length: item.media_avaliacao }).map((_, index) => (
                                        <Image
                                            source={require('../img/icons/star.png')}
                                            style={styles.avaliationIcon}
                                            key={index}
                                        />
                                    ))}
                                    <Text style={styles.numberAvaliation}>
                                        ({item.media_avaliacao} avaliações)
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
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