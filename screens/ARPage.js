import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Unity, { UnityContext } from "react-unity-webgl";

/*
const unityContext = new UnityContext({
  loaderUrl: "build/unitybuild.loader.js",
  dataUrl: "build/unitybuild.data",
  frameworkUrl: "build/unitybuild.framework.js",
  codeUrl: "build/unitybuild.wasm",
});
*/

const ARPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>AR Experience</Text>
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C4BDAC",
  },
  header: {
    backgroundColor: "#C4BDAC",
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  unityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  unityView: {
    width: '100%',
    height: 400, // Adjust the height as needed
  },
});

export default ARPage;
