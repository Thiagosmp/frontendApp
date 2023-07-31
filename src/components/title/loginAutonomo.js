import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, ScrollView,
} from 'react-native';
import axios from 'axios';

export default function Autonomo({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const goToLogin = () => {
    navigation.navigate('Login Autonomo');
  }

  const handleSubmit = async () => {
    let hasError = false;

    if (!email) {
      setEmailError('Insira seu email');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Insira sua senha');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirme sua senha');
      hasError = true;
    } else {
      setConfirmPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('As senhas não correspondem');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    navigation.navigate('Completar Cadastro');
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  }, []);

  return (
      <ScrollView  style={styles.container}>
        <View style={styles.topo}>
          <Image
              source={require('../img/logo.png')}
              style={{ width: 140, height: 140 }}
          />
          <Text style={styles.title}>Criar Conta Autônomo</Text>
          <Text style={styles.subtitle}>
            Crie uma conta para poder explorar todas as vantagens do nosso aplicativo
          </Text>
        </View>
        <View style={styles.form}>
          <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="E-mail"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
          />
          {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
          <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Senha"
              secureTextEntry={true}
              textContentType="password"
          />
          {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
          <TextInput
              style={styles.input}
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              placeholder="Confirmar senha"
              secureTextEntry={true}
              textContentType="password"
          />
          {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.toggleButton} onPress={goToLogin}>
          <Text style={styles.toggleButtonText}>Já tenho uma conta</Text>
        </TouchableOpacity>
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
    marginBottom: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: '#1333cd',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
    textAlign: 'center',
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
  error: {
    color: 'red',
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
    borderRadius: 11,
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
    shadowOffset: { width: 0, height: 0 },
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
});
