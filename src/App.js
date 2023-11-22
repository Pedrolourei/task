import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useAuthState } from "react-firebase";

import firebase from "firebase";

class App extends Component {
  componentDidMount() {
    // Inicializa o Firebase
    const firebaseConfig = require("./firebase.json");

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Aplicativo React Native</Text>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Botão"/>
      </View>
    );
  }
}

const style= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

class App extends Component {
  state = {
    tarefas: [],
  };

  componentDidMount() {
    // Obtém as tarefas do banco de dados
    const { tarefas: tarefasFirebase } = useAuthState().currentUser;

    // Atualiza o estado com as tarefas do banco de dados
    this.setState({ tarefas: tarefasFirebase });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lista de tarefas</Text>
        <ListaTarefas tarefas={this.state.tarefas} />
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
});

export default App;
