import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import { db } from "../firebase";

class TaskDetails extends Component {
  state = {
    tarefa: {},
  };

  componentDidMount() {
    // Obtém a tarefa do banco de dados
    const id = this.props.route.params.id;

    db
      .collection("tarefas")
      .doc(id)
      .get()
      .then((data) => {
        this.setState({ tarefa: data.data });
      });
  }

  render() {
    const { tarefa } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Detalhes da tarefa</Text>
        <Text style={styles.titulo}>{tarefa.titulo}</Text>
        <Text style={styles.descricao}>{tarefa.descricao}</Text>
        <Button
          title="Voltar"
          onPress={() => this.props.navigation.goBack()}
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
  titulo: {
    fontSize: 18,
  },
  descricao: {
    fontSize: 16,
  },
});

export default TaskDetails;
