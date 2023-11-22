import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import { db } from "../firebase";

class CreatTask extends Component {
  state = {
    titulo: "",
    descricao: "",
  };

  handleTitulo = (texto) => {
    this.setState({ titulo: texto });
  };

  handleDescricao = (texto) => {
    this.setState({ descricao: texto });
  };

  handleCriarTarefa = () => {
    // Cria uma nova tarefa
    const tarefa = {
      titulo: this.state.titulo,
      descricao: this.state.descricao,
    };

    // Adiciona a tarefa ao banco de dados
    db.collection("tarefas").add(tarefa);

    // Redireciona para a página de lista de tarefas
    this.props.navigation.navigate("listaTarefas");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Criar tarefa</Text>
        <TextInput
          style={styles.input}
          placeholder="Título"
          onChangeText={this.handleTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          onChangeText={this.handleDescricao}
        />
        <Button
          title="Criar"
          onPress={this.handleCriarTarefa}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: 300,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default CreatTask;
