import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image } from "react-native";

// Importing Images
import logo from "./../../assets/img/logo.png";
import menuCliente from "./../../assets/img/menu_cliente.png";
import menuContato from "./../../assets/img/menu_contato.png";
import menuEmpresa from "./../../assets/img/menu_empresa.png";
import menuServico from "./../../assets/img/menu_servico.png";

// Importing Components
// import BarraNavegacao from "../../components/BarraNavegacao/BarraNavegacao";

import { TouchableHighlight } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: "center"
  },
  menu: {
    alignItems: "center"
  },
  menuGrupo: {
    flexDirection: "row"
  },
  imgMenu: {
    margin: 15
  }
});

class MainScene extends Component {
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
      backgroundColor: "#ccc"
    };
    return { headerTitle, headerTitleStyle, headerStyle };
  };

  render() {
    return (
      <View style={{ backgroundColor: "#FFF", flex: 1 }}>
        <StatusBar backgroundColor="#CCC" />
        {/* <BarraNavegacao /> */}

        <View style={styles.logo}>
          <Image source={logo} />
        </View>

        <View style={styles.menu}>
          <View style={styles.menuGrupo}>
            <TouchableHighlight
              underlayColor={"transparent"}
              activeOpacity={0.7}
              onPress={() => this.props.navigation.push("ClientScene")}
            >
              <Image style={styles.imgMenu} source={menuCliente} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={"transparent"}
              activeOpacity={0.7}
              onPress={() => this.props.navigation.push("ContactScene")}
            >
              <Image style={styles.imgMenu} source={menuContato} />
            </TouchableHighlight>
          </View>
          <View style={styles.menuGrupo}>
            <TouchableHighlight
              underlayColor={"transparent"}
              activeOpacity={0.7}
              onPress={() => this.props.navigation.push("CompanyScene")}
            >
              <Image style={styles.imgMenu} source={menuEmpresa} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={"transparent"}
              activeOpacity={0.7}
              onPress={() => this.props.navigation.push("ServiceScene")}
            >
              <Image style={styles.imgMenu} source={menuServico} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default MainScene;
