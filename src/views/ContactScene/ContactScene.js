import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image, Text } from "react-native";

// Importing Images
import detalheContato from "./../../assets/img/detalhe_contato.png";

// Importing Components
// import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";

const styles = StyleSheet.create({
  titulo: {
    flexDirection: "row",
    marginTop: 20
  },
  colorText: {
    fontSize: 30,
    color: "#61BD8C",
    alignItems: "center",
    marginTop: 25,
    marginLeft: 10
  },
  content: {
    margin: 20
  },
  text: {
    fontSize: 18,
    paddingLeft: 15,
    paddingVertical: 5
  }
});

class ContactScene extends Component {
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
      backgroundColor: "#61BD8C"
    };
    return { headerTitle, headerTitleStyle, headerStyle };
  };
  render() {
    return (
      <View style={{ backgroundColor: "#FFF", flex: 1 }}>
        <StatusBar backgroundColor="#61BD8C" />
        {/* <BarraNavegacao voltar /> */}
        <View style={styles.titulo}>
          <Image source={detalheContato} />
          <Text style={styles.colorText}>Nosso Contato</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.text}>TEL: (16) 1234-5678</Text>
          <Text style={styles.text}>CEL: (16) 99876-5432</Text>
          <Text style={styles.text}>EMAIL: contato@atmc.com</Text>
        </View>
      </View>
    );
  }
}

export default ContactScene;
