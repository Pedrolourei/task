import React, { Component } from "react";
import { StyleSheet, Text, View, ListView, TouchableOpacity } from "react-native";

class TaskList extends Component {
  static defaultProps = {
    tarefas: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedTask: null,
    };
  }

  render() {
    const { tarefas } = this.props;

    return (
      <ListView
        enableEmptySections={true}
        data={tarefas}
        renderRow={(task) => (
          <TouchableOpacity
            key={task.id}
            onPress={() => this.handleSelectTask(task)}
          >
            <View style={styles.item}>
              <Text style={styles.title}>{task.nome}</Text>
              <Text style={styles.subtitle}>{task.finalizada ? "Concluída" : "Pendente"}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }

  handleSelectTask = (task) => {
    this.setState({ selectedTask: task });
  };
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
  },
});

export default TaskList;
