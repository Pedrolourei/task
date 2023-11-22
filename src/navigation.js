import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation";

const AppNavigator = createStackNavigator({
  Auth: {
    screen: Auth,
  },
  ListaTarefas: {
    screen: ListaTarefas,
  },
  CriarTarefa: {
    screen: CriarTarefa,
  },
  DetalhesTarefa: {
    screen: DetalhesTarefa,
  },
  RemoverTarefa: {
    screen: RemoverTarefa,
  },
  AtualizarTarefa: {
    screen: AtualizarTarefa,
  },
});

class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
