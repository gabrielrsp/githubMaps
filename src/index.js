import React, { Component } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  Alert,
  Modal,
  Button,
  Text,
  TextInput,
  View
} from "react-native";
import MapView from "react-native-maps";

export default class App extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  handlerLongClick = () => {
    Alert.alert(" Show de Bola");
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031
          }}
          onLongPress={() => {
            this.setModalVisible(true);
          }}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.state.modalVisible = false;
          }}
        >
          <View style={styles.modalView}>
            <View style={styles.modalContainer}>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ marginTop: 20, fontSize: 20, color: "#4d4d4d" }}>
                  Adicionar usuário no Mapa
                </Text>
              </View>

              <View style={styles.inputStyle}>
                <TextInput placeholder="Usuário do Github" />
              </View>

              <View
                style={{
                  marginTop: 25,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around"
                }}
              >
                <View style={styles.buttonStyle}>
                  <Button
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                    title="Cancelar"
                    color="#ff3333"
                    accessibilityLabel="Action Button"
                  />
                </View>
                <View style={styles.buttonStyle}>
                  <Button
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                    title="Salvar"
                    color="#33cc33"
                    accessibilityLabel="Action Button"
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute"
  },

  modalView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  modalContainer: {
    width: 300,
    height: 200,
    display: "flex",
    backgroundColor: "#cccccc",
    borderRadius: 6
  },

  inputStyle: {
    display: "flex",
    margin: 10,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 6
  },

  buttonStyle: {
    width: 110,
    bottom: 20
  }
});
