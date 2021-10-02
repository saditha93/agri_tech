import React from "react";
import {Dimensions, StyleSheet, Text} from "react-native";
import type {Node} from "react";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Location: () => Node = () => {
    return (
        <Text style={styles.location}>
            Currunt Location : Colombo
        </Text>
    );
}

const styles = StyleSheet.create({
    location: {
        backgroundColor: "#7adeb6",
        width: screenWidth,
        fontWeight: "bold",
        fontSize: 20,
        color: "#062f1f",
        textAlignVertical: "center",
        minHeight: screenHeight / 15,
    },
});

export default Location;
