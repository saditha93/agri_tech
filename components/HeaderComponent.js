import React from "react";
import {Dimensions, StyleSheet} from "react-native";
import {Header} from "react-native-elements";
import type {Node} from "react";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const HeaderComponent: () => Node = () => {
    return (
        <Header
            containerStyle={styles.header}
            leftComponent={{icon: "menu", color: "#fff"}}
            centerComponent={{
                text: "Agriculture task",
                style: {color: "#fff", fontSize: 20},
            }}
            rightComponent={{icon: "home", color: "#fff"}}
        />
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#037d50",
        width: screenWidth,
        minHeight: screenHeight / 15,
    },
});

export default HeaderComponent;
