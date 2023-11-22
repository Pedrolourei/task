import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useAuthState } from "react-firebase";

class Register extends Component {
  state = {
    email: "",
    senha: "",
    nome: "",
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.nativeEvent.text });
  };

  handleSenhaChange = (event) => {
    this.setState({ senha: event.nativeEvent.text });
  };

  handleNomeChange = (event) => {
    this.setState({ nome: event.nativeEvent.text });
  };

  handleCadastro = () => {
    // Tenta cadastrar o usuário com as credenciais fornecidas
    const { email, senha, nome } = this.state;

    const auth = useAuthState();

    auth.createUserWithEmailAndPassword(email, senha).then(() => {
      // Redireciona para a página principal
      this.props.onCadastro();
    }).catch((error) => {
      // Mostra um erro
      console.log(error);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={this.state.senha}
          onChange={this.handleSenhaChange}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={this.state.nome}
          onChange={this.handleNomeChange}
        />
        <Button
          title="Cadastrar"
          onPress={this.handleCadastro}
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
});

export default Register;
