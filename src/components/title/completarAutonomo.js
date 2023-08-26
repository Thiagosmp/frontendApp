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
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import {Camera} from "expo-camera";
import CameraPhoto from "./camera";

export default function CompletarAutonomo({navigation, route}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profession, setProfession] = useState('');
    const [description, setDescription] = useState('');
    const [estado, setEstado] = useState('');
    const [photo, setPhoto] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [option, setOption] = useState(false);

    const handleSubmit = async () => {
        navigation.navigate('Perfil');
    };

    const addPhoto = () => {
        navigation.navigate('Camera');
        setOption(false);
        // setPhoto(true);
    };

    const carregarPhoto = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.cancelled) {
                setPhoto(result.uri);
            }
        } catch (error) {
            console.log('Error selecting image:', error);
        }

        setOption(false);
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        });
    }, []);

    const closeOption = () => {
        setOption(false);
    };

    useEffect(() => {
        if (route.params && route.params.photoSaved) {
            setPhoto(route.params.photoSaved);
        }
    }, [route.params]);


    return (
        <ScrollView style={styles.container}>
            {option && (
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={closeOption}
                >
                    <View style={styles.option}>
                        <TouchableOpacity
                            style={styles.btnPhotos}
                            onPress={carregarPhoto}
                        >
                            <Text style={styles.btnText}>Carregar Imagem</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnPhotos} onPress={addPhoto}>
                            <Text style={styles.btnText}>Tirar foto</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )}
            <View style={styles.topo}>
                <Text style={styles.title}>Complete seu cadastro</Text>
                {photo ?
                    <>
                        <Image style={{flex: 1, width: '100%', margin: 10, height: 300, borderRadius: 20}}
                               source={{uri: photo}}/>
                        <TouchableOpacity onPress={() => setOption(true)}>
                            <Text style={styles.btnText}>Trocar foto</Text>
                        </TouchableOpacity>
                    </>
                    :
                    <TouchableOpacity onPress={() => setOption(true)}>
                        <Image
                            source={require('../img/profile.png')}
                            style={{width: 140, height: 140}}
                        />
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.form}>
                <Text style={styles.subtitle}>
                    Nome completo
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    value={username}
                    placeholder="Nome"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <View style={styles.inputContainer}>
                    <View style={styles.inputFlex}>
                        <Text style={styles.subtitle}>Idade</Text>
                        <TextInput
                            style={styles.inputIdade}
                            onChangeText={setUsername}
                            value={username}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                        />
                    </View>
                    <View style={styles.inputFlex}>
                        <Text style={styles.subtitle}>Profissão</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={profession}
                            onValueChange={(itemValue) => setProfession(itemValue)}
                        >
                            <Picker.Item label="Selecione uma opção" value=""/>
                            <Picker.Item label="Pintor" value="pintor"/>
                            <Picker.Item label="Eletricista" value="eletricista"/>
                            <Picker.Item label="Pedreiro" value="pedreiro"/>
                            <Picker.Item label="Faxineiro(a)" value="faxineiro"/>
                            <Picker.Item label="Cuidador(a)" value="cuidador"/>
                            <Picker.Item label="Encanador(a)" value="encanador"/>
                            <Picker.Item label="Piscineiro" value="piscineiro"/>
                            <Picker.Item label="Chaveiro" value="chaveiro"/>
                        </Picker>
                    </View>
                </View>
                <Text style={styles.subtitle}>
                    Gênero
                </Text>
                <Picker
                    style={styles.pickerGenero}
                    selectedValue={profession}
                    onValueChange={(itemValue) => setProfession(itemValue)}
                >
                    <Picker.Item label="Selecione uma opção" value=""/>
                    <Picker.Item label="Feminino" value="feminino"/>
                    <Picker.Item label="Masculino" value="masculino"/>
                    <Picker.Item label="Outro" value="outro"/>
                </Picker>
                <Text style={styles.subtitle}>
                    Telefone
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    value={username}
                    placeholder="(xx) x xxxx-xxxx"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <View style={styles.inputContainer}>
                    <View style={styles.inputFlex}>
                        <Text style={styles.subtitle}>Estado</Text>
                        <Picker
                            style={styles.pickerEstado}
                            selectedValue={estado}
                            onValueChange={(itemValue) => setProfession(itemValue)}
                        >
                            <Picker.Item label="Selecione uma opção" value=""/>
                            <Picker.Item label="AC" value="AC"/>
                            <Picker.Item label="AL" value="AL"/>
                            <Picker.Item label="AP" value="AP"/>
                            <Picker.Item label="AM" value="AM"/>
                            <Picker.Item label="BA" value="BA"/>
                            <Picker.Item label="CE" value="CE"/>
                            <Picker.Item label="DF" value="DF"/>
                            <Picker.Item label="ES" value="ES"/>
                            <Picker.Item label="GO" value="GO"/>
                            <Picker.Item label="MA" value="MA"/>
                            <Picker.Item label="MT" value="MT"/>
                            <Picker.Item label="MS" value="MS"/>
                            <Picker.Item label="MG" value="MG"/>
                            <Picker.Item label="PA" value="PA"/>
                            <Picker.Item label="PB" value="PB"/>
                            <Picker.Item label="PR" value="PR"/>
                            <Picker.Item label="PE" value="PE"/>
                            <Picker.Item label="PI" value="PI"/>
                            <Picker.Item label="RJ" value="RJ"/>
                            <Picker.Item label="RN" value="RN"/>
                            <Picker.Item label="RS" value="RS"/>
                            <Picker.Item label="RO" value="RO"/>
                            <Picker.Item label="RR" value="RR"/>
                            <Picker.Item label="SC" value="SC"/>
                            <Picker.Item label="SP" value="SP"/>
                            <Picker.Item label="SE" value="SE"/>
                            <Picker.Item label="TO" value="TO"/>
                        </Picker>
                    </View>
                    <View style={styles.inputFlex}>
                        <Text style={styles.subtitle}>Cidade</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={profession}
                            onValueChange={(itemValue) => setProfession(itemValue)}
                        >
                            <Picker.Item label="Selecione uma opção" value=""/>
                            <Picker.Item label="Pintor" value="pintor"/>
                            <Picker.Item label="Eletricista" value="eletricista"/>
                            <Picker.Item label="Pedreiro" value="pedreiro"/>
                            <Picker.Item label="Faxineiro(a)" value="faxineiro"/>
                            <Picker.Item label="Cuidador(a)" value="cuidador"/>
                            <Picker.Item label="Encanador(a)" value="encanador"/>
                            <Picker.Item label="Piscineiro" value="piscineiro"/>
                            <Picker.Item label="Chaveiro" value="chaveiro"/>
                        </Picker>
                    </View>
                </View>
                <Text style={styles.subtitle}>
                    Descrição
                </Text>
                <TextInput
                    style={styles.description}
                    onChangeText={setDescription}
                    value={description}
                    placeholder="Digite uma descrição"
                    multiline={true}
                    numberOfLines={4}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Registrar</Text>
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
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 25,
        color: '#333',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666666',
    },
    heading: {
        color: '#1333cd',
        fontSize: 24,
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666666',
        textAlign: 'center',
    },
    form: {
        padding: 20,
    },
    picker: {
        borderWidth: 2,
        borderColor: 'transparent',
        transitionProperty: 'borderColor, boxShadow',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        width: 280,
        padding: 12,
        marginVertical: 8,
        boxSizing: 'border-box',
        height: 50,
        backgroundColor: '#f3f3fd',
        color: '#8c8b8b'
    },
    pickerGenero: {
        borderWidth: 2,
        borderColor: 'transparent',
        transitionProperty: 'borderColor, boxShadow',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        width: '100%',
        padding: 12,
        marginVertical: 8,
        boxSizing: 'border-box',
        height: 50,
        backgroundColor: '#f3f3fd',
        color: '#8c8b8b'
    },
    pickerEstado: {
        borderWidth: 2,
        borderColor: 'transparent',
        transitionProperty: 'borderColor, boxShadow',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        width: 70,
        padding: 12,
        marginVertical: 8,
        marginRight: 20,
        boxSizing: 'border-box',
        height: 50,
        backgroundColor: '#f3f3fd',
    },
    input: {
        borderWidth: 2,
        borderColor: 'transparent',
        transitionProperty: 'borderColor, boxShadow',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        width: '100%',
        padding: 12,
        marginVertical: 8,
        boxSizing: 'border-box',
        height: 50,
        backgroundColor: '#f3f3fd',
    },
    description: {
        borderWidth: 2,
        borderColor: 'transparent',
        transitionProperty: 'borderColor, boxShadow',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        width: '100%',
        padding: 12,
        marginVertical: 8,
        boxSizing: 'border-box',
        height: 80,
        backgroundColor: '#f3f3fd',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputFlex: {
        flexDirection: 'column'
    },
    inputIdade: {
        borderWidth: 2,
        borderColor: 'transparent',
        transitionProperty: 'borderColor, boxShadow',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        width: 70,
        padding: 12,
        marginVertical: 8,
        marginRight: 20,
        boxSizing: 'border-box',
        height: 50,
        backgroundColor: '#f3f3fd',
    },
    button: {
        backgroundColor: '#1333cd',
        color: 'white',
        padding: 12,
        marginVertical: 8,
        borderWidth: 0,
        fontWeight: '600',
        borderRadius: 4,
        width: '100%',
        fontSize: 17,
        shadowColor: '#00000033',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    toggleButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggleButtonText: {
        // aqui você define o estilo do Text
    },
    option: {
        position: "absolute",
        justifyContent: 'center',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.68)',
        zIndex: 2000,
        height: '100%'
    },
    btnPhotos: {
        backgroundColor: '#fff',
        height: 66,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    btnText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent', // Make the overlay transparent
        zIndex: 1000, // Lower zIndex than the option view
    },
});