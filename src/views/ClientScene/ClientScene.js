import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image, Text } from "react-native";

// Importing Images
import detalheClientes from "./../../assets/img/detalhe_cliente.png";
import cliente1 from "./../../assets/img/cliente1.png";
import cliente2 from "./../../assets/img/cliente2.png";

// Importing Components
// import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";

const styles = StyleSheet.create({
  titulo: {
    flexDirection: "row",
    marginTop: 20
  },
  colorText: {
    fontSize: 30,
    color: "#B9C941",
    alignItems: "center",
    marginTop: 25
  },
  content: {
    margin: 20
  },
  text: {
    fontSize: 18,
    paddingLeft: 15
  }
});

class ClientScene extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = ({ navigation }) => {
    let headerTitle = "ATM Consultoria";
    let headerTitleStyle = {
      flex: 1,
      fontSize: 18,
      textAlign: "center",
      color: "black"
    };
    let headerStyle = {
      backgroundColor: "#B9C941"
    };
    return { headerTitle, headerTitleStyle, headerStyle };
  };
  render() {
    return (
      <View style={{ backgroundColor: "#FFF", flex: 1 }}>
        <StatusBar backgroundColor="#B9C941" />
        {/* <BarraNavegacao voltar /> */}
        <View style={styles.titulo}>
          <Image source={detalheClientes} />
          <Text style={styles.colorText}>Nossos Clientes</Text>
        </View>

        <View style={styles.content}>
          <Image source={cliente1} />
          <Text style={styles.text}>Eu amet ex enim sint.</Text>
        </View>
        <View style={styles.content}>
          <Image source={cliente2} />
          <Text style={styles.text}>Eu amet ex enim sint.</Text>
        </View>
      </View>
    );
  }
}

export default ClientScene;
