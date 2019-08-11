import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import voltar from "./../../assets/img/btn_voltar.png";

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: "#ccc",
    padding: 10,
    height: 60,
    flexDirection: "row"
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    color: "black"
  }
});

class BarraNavegacao extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.voltar) {
      return (
        <View style={styles.barraTitulo}>
          <Image source={voltar} />
          <Text style={styles.titulo}>ATM Consulturia</Text>
        </View>
      );
    }
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}>ATM Consulturia</Text>
      </View>
    );
  }
}

export default BarraNavegacao;
