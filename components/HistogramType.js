import React, { Component, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { ButtonGroup } from "react-native-elements";

const screenWidth = Dimensions.get("window").width;

export default class HistogramType extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selectedIndex) {
        this.props.onTypeChange(selectedIndex);
    }

    render() {
        const histogramType = this.props.value != undefined ? this.props.value : 0;
        const buttons = ["Total", "Acre", "Olive oil (tn)", "Olive oil (kg)"];

        return (
            <ButtonGroup
                selectedButtonStyle={{ backgroundColor: "#037d50" }}
                onPress={this.handleChange}
                selectedIndex={histogramType}
                buttons={buttons}
                containerStyle={styles.container}
                textStyle={{ fontSize: 18 }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginTop: 30,
        minWidth: screenWidth * 0.9,
    },
});
