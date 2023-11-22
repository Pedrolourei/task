import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useAuthState } from "react-firebase";

class Login extends Component {
  state = {
    email: "",
    senha: "",
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.nativeEvent.text });
  };

  handleSenhaChange = (event) => {
    this.setState({ senha: event.nativeEvent.text });
  };

  handleLogin = () => {
    // Tenta fazer login com as credenciais fornecidas
    const { email, senha } = this.state;

    const auth = useAuthState();

    auth.signInWithEmailAndPassword(email, senha).then(() => {
      // Redireciona para a página principal
      this.props.onLogin();
    }).catch((error) => {
      // Mostra um erro
      console.log(error);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
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
        <Button
          title="Login"
          onPress={this.handleLogin}
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

export default Login;
