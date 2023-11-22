import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useAuthState } from "react-firebase";

class Auth extends Component {
  state = {
    isLoggedIn: false,
  };

  componentDidMount() {
    // Obtém o estado de autenticação do Firebase
    const auth = useAuthState();

    // Verifica se o usuário está autenticado
    if (auth.currentUser) {
      this.setState({ isLoggedIn: true });
    }
  }

  handleLogin = () => {
    // Redireciona para a página de login
    const { navigate } = this.props;

    navigate("login");
  };

  handleCadastro = () => {
    // Redireciona para a página de cadastro
    const { navigate } = this.props;

    navigate("cadastro");
  };

  render() {
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Bem-vindo!</Text>
          <Button
            title="Sair"
            onPress={() => {
              // Faz o logout do usuário
              const auth = useAuthState();

              auth.signOut();

              // Redireciona para a página de login
              this.setState({ isLoggedIn: false });
            }}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Autenticação</Text>
          <Button
            title="Login"
            onPress={this.handleLogin}
          />
          <Button
            title="Cadastro"
            onPress={this.handleCadastro}
          />
        </View>
      );
    }
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

export default Auth;
