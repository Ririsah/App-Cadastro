import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const Cadastro = () => {

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [contato, setContato] = useState('');
    const [categorias, setCategorias] = useState('');
    const [image, setImage] = useState(null);


        const handleCadastro = () => {
            if (nome && endereco && contato && categorias && image) {
                setNome('');
                setEndereco('');
                setContato('');
                setCategorias('');
                setImage(null);
            }
        };


        return (
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro</Text>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                />
                <Text style={styles.label}>Endereço</Text>
                <TextInput
                    style={styles.input}
                    value={endereco}
                    onChangeText={setEndereco}
                />
                <Text style={styles.label}>Contato</Text>
                <TextInput
                    style={styles.input}
                    value={contato}
                    onChangeText={setContato}
                />
                <Text style={styles.label}>Categorias</Text>
                <TextInput
                    style={styles.input}
                    value={categorias}
                    onChangeText={setCategorias}
                />
                <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#e7ecef',
            justifyContent: 'center',
        },
        title: {
            backgroundColor: '#274c77',
            fontSize: 50,
            fontWeight: 'bold',
            color: '#ffffff',
            padding: 40,
            marginBottom: 40,
        },
        label: {
            fontSize: 20,
            marginLeft: 30,
            marginTop: 20,
            marginBottom: 5,
            color: '#31393c',
        },
        input: {
            height: 50,
            maxWidth: 800,
            borderColor: '#ffffff',
            borderWidth: 1,
            borderRadius: 8,
            marginLeft: 30,
            marginRight: 30,
            paddingHorizontal: 10,
            marginBottom: 20,
            backgroundColor: '#ffffff',
        },
        button: {
            backgroundColor: '#ea7317',
            width: 300,
            margin: 30,
            borderRadius: 8,
            marginTop: 30,
            marginBottom: 100,
            padding: 15,
            alignItems: 'center',
        },
        buttonText: {
            color: '#ffffff',
            fontSize: 20,
            fontWeight: 'bold',
        },
    });


export default Cadastro;