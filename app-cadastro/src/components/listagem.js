import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ListagemFornecedores = () => {
    const [fornecedores, setFornecedores] = useState([]);

    const [filter, setFilter] = useState('');
    const [campoSelecionado, setCampoSelecionado] = useState('nome');

    const filteredData = fornecedores.filter((fornecedor) =>
        fornecedor[campoSelecionado]?.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fornecedores Cadastrados</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite para procurar"
                value={filter}
                onChangeText={setFilter}
            />
            <View style={styles.buttonContainer}>
                {['nome', 'endereco', 'contato', 'categorias'].map((campo) => (
                    <TouchableOpacity
                        key={campo}
                        style={[
                            styles.button,
                            campoSelecionado === campo && styles.buttonSelected,
                        ]}
                        onPress={() => setCampoSelecionado(campo)}
                    >
                        <Text style={styles.buttonText}>{campo}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>Nome: {item.nome}</Text>
                        <Text style={styles.itemText}>Endereço: {item.endereco}</Text>
                        <Text style={styles.itemText}>Contato: {item.contato}</Text>
                        <Text style={styles.itemText}>Categoria: {item.categorias}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>Nenhum fornecedor encontrado.</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7ecef',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#274c77',
        marginBottom: 20,
        marginLeft: 30,
        textAlign: 'start'
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#ea7317',
        width: 155,
        margin: 30,
        borderRadius: 8,
        marginTop: 30,
        padding: 15,
        alignItems: 'center',
    },
    buttonSelected: {
        backgroundColor: '#274c77'
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    item: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    itemText: {
        fontSize: 20,
        color: '#31393c'
    },
    emptyText: {
        textAlign: 'start',
        color: '#888',
        fontSize: 20,
        margin: 30,
        marginTop: 20,
    },
});

export default ListagemFornecedores;
