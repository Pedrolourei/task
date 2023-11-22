import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";
import { AppNavigator } from "./navegação";

const App = createAppContainer(AppNavigator);

AppRegistry.registerComponent("Aplicativo", () => App);
