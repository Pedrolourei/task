import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

class AttTask extends Component {
  state = {
    tarefa: {},
  };

  componentDidMount() {
    const { selectedTask } = this.props;

    if (selectedTask) {
      this.setState({ tarefa: selectedTask });
    }
  }

  handleNomeChange = (event) => {
    const { tarefa } = this.state;

    tarefa.nome = event.nativeEvent.text;

    this.setState({ tarefa });
  };

  handleFinalizadaChange = (event) => {
    const { tarefa } = this.state;

    tarefa.finalizada = event.target.checked;

    this.setState({ tarefa });
  };

  handleDescricaoChange = (event) => {
    const { tarefa } = this.state;

    tarefa.descricao = event.nativeEvent.text;

    this.setState({ tarefa });
  };

  handleSalvar = () => {
    const { tarefa } = this.state;

    // Atualiza a tarefa no banco de dados
    const db = firebase.database();

    db.ref("tarefas").child(tarefa.id).update({
      nome: tarefa.nome,
      finalizada: tarefa.finalizada,
      descricao: tarefa.descricao,
    });

    // Volta para a página de lista de tarefas
    this.props.onUpdate();
  };

  render() {
    const { tarefa } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Atualizar tarefa</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={tarefa.nome}
          onChange={this.handleNomeChange}
        />
        <Switch
          style={styles.switch}
          checked={tarefa.finalizada}
          onChange={this.handleFinalizadaChange}
        />
        <Text style={styles.subtitle}>Finalizada</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={tarefa.descricao}
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

export default AttTask;
