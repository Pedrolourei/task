import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

class CreatTask extends Component {
  state = {
    nome: "",
    finalizada: false,
    descricao: "",
  };

  handleNomeChange = (event) => {
    this.setState({ nome: event.nativeEvent.text });
  };

  handleFinalizadaChange = (event) => {
    this.setState({ finalizada: event.target.checked });
  };

  handleDescricaoChange = (event) => {
    this.setState({ descricao: event.nativeEvent.text });
  };

  handleSalvar = () => {
    // Cria uma nova tarefa no banco de dados
    const db = firebase.database();

    const tarefa = {
      id: uuidv4(),
      nome: this.state.nome,
      finalizada: this.state.finalizada,
      descricao: this.state.descricao,
    };

    db.ref("tarefas").push(tarefa);

    // Volta para a página de lista de tarefas
    this.props.onSalvar();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Criar tarefa</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={this.state.nome}
          onChange={this.handleNomeChange}
        />
        <Switch
          style={styles.switch}
          checked={this.state.finalizada}
          onChange={this.handleFinalizadaChange}
        />
        <Text style={styles.subtitle}>Finalizada</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={this.state.descricao}
          onChange={this.handleDescricaoChange}
        />
        <Button
          title="Salvar"
          onPress={this.handleSalvar}
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
    width: 200,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  subtitle: {
    fontSize: 16,
  },
  switch: {
    marginVertical: 10,
  },
});

export default CreatTask;
