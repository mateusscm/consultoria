import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image, Text } from "react-native";

// Importing Images
import detalheServico from "./../../assets/img/detalhe_servico.png";

// Importing Components
// import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";

const styles = StyleSheet.create({
  titulo: {
    flexDirection: "row",
    marginTop: 20
  },
  colorText: {
    fontSize: 30,
    color: "#19D1C8",
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

class ServiceScene extends Component {
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
      backgroundColor: "#19D1C8"
    };
    return { headerTitle, headerTitleStyle, headerStyle };
  };
  render() {
    return (
      <View style={{ backgroundColor: "#FFF", flex: 1 }}>
        <StatusBar backgroundColor="#19D1C8" />
        {/* <BarraNavegacao voltar /> */}
        <View style={styles.titulo}>
          <Image source={detalheServico} />
          <Text style={styles.colorText}>Nossos Serviços</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.text}>
            Pariatur qui in fugiat ut. Reprehenderit culpa cillum anim tempor
            consectetur velit exercitation nostrud consectetur duis sunt est
            mollit. Id officia commodo cupidatat culpa.
          </Text>
        </View>
      </View>
    );
  }
}

export default ServiceScene;
