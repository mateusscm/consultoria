import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image, Text } from "react-native";

// Importing Images
import detalheEmpresa from "./../../assets/img/detalhe_empresa.png";

// Importing Components
// import BarraNavegacao from "./../../components/BarraNavegacao/BarraNavegacao";

const styles = StyleSheet.create({
  titulo: {
    flexDirection: "row",
    marginTop: 20
  },
  colorText: {
    fontSize: 30,
    color: "#EC7148",
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

class CompanyScene extends Component {
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
      backgroundColor: "#EC7148"
    };
    return { headerTitle, headerTitleStyle, headerStyle };
  };
  render() {
    return (
      <View style={{ backgroundColor: "#FFF", flex: 1 }}>
        <StatusBar backgroundColor="#EC7148" />
        {/* <BarraNavegacao voltar /> */}
        <View style={styles.titulo}>
          <Image source={detalheEmpresa} />
          <Text style={styles.colorText}>A Empresa</Text>
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

export default CompanyScene;
