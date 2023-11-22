import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class RemoveTask extends Component {
  state = {
    tarefa: {},
  };

  componentDidMount() {
    const { selectedTask } = this.props;

    if (selectedTask) {
      this.setState({ tarefa: selectedTask });
    }
  }

  handleRemover = () => {
    const { tarefa } = this.state;

    // Remove a tarefa do banco de dados
    const db = firebase.database();

    db.ref("tarefas").child(tarefa.id).remove();

    // Volta para a página de lista de tarefas
    this.props.onRemove();
  };

  render() {
    const { tarefa } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Remover tarefa</Text>
        <Text style={styles.subtitle}>Tem certeza que deseja remover a tarefa?</Text>
        <Button
          title="Remover"
          onPress={this.handleRemover}
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
  subtitle: {
    fontSize: 16,
  },
});

export default RemoveTask;
