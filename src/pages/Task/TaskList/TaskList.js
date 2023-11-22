import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import { db } from "../firebase";

class ListaTarefas extends Component {
  state = {
    tarefas: [],
  };

  componentDidMount() {
    // Obtém as tarefas do banco de dados
    db
      .collection("tarefas")
      .get()
      .then((data) => {
        this.setState({ tarefas: data.docs });
      });
  }

  render() {
    const { tarefas } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lista de tarefas</Text>
        <ScrollView>
          <FlatList
            data={tarefas}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.titulo}>{item.data().titulo}</Text>
                <Button
                  title="Ver detalhes"
                  onPress={() => this.props.navigation.navigate("detalhesTarefa", { id: item.id })}
                />
              </View>
            )}
          />
        </ScrollView>
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
  item: {
    width: "100%",
    margin: 10,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 18,
  },
});

export default ListaTarefas;
