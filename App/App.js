// import React from "react";
import {} from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

// Importing View
import MainScene from "../src/views/MainScene/MainScene";
import ClientScene from "../src/views/ClientScene/ClientScene";
import ContactScene from "../src/views/ContactScene/ContactScene";
import CompanyScene from "../src/views/CompanyScene/CompanyScene";
import ServiceScene from "../src/views/ServiceScene/ServiceScene";

const Navigator = createStackNavigator({
  MainScene: {
    screen: MainScene
  },
  ClientScene: {
    screen: ClientScene
  },
  ContactScene: {
    screen: ContactScene
  },
  CompanyScene: {
    screen: CompanyScene
  },
  ServiceScene: {
    screen: ServiceScene
  }
});

export default createAppContainer(Navigator);
