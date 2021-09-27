import React, {Component} from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {BarChart} from "react-native-chart-kit";

import data_mock from "../mock/co2_data.json";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default class Histogram extends Component {
    constructor(props) {
        super(props);
    }

    createData(data, histogramType) {
        let createdData;
        switch (histogramType) {
            case 0:
                createdData = data.map((row) => parseFloat(row.total));
                break;
            case 1:
                createdData = data.map((row) => parseFloat(row.acre));
                break;
            case 2:
                createdData = data.map((row) => parseFloat(row.product_month));
                break;
            case 3:
                createdData = data.map((row) => parseFloat(row.product_year));
                break;
            default:
                createdData = data.map((row) => parseFloat(row.total));
        }
        return createdData;
    }

    createDataLabals(data) {
        return data.map((row) => row.label);
    }

    render() {
        const histogramType = this.props.type;
        const data = {
            labels: this.createDataLabals(Object.values(data_mock)),
            datasets: [
                {
                    data: this.createData(Object.values(data_mock), histogramType),
                },
            ],
        };
        const chartConfig = {
            backgroundGradientFrom: "#037d50",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#037d50",
            backgroundGradientToOpacity: 0,
            color: (opacity = 1) => `rgba(3, 125, 80, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            fillShadowGradient: "#037d50",
            fillShadowGradientOpacity: 0.8,
            barPercentage: 0.7,
            style: {
                fontSize: 20,
            },
        };

        return (
            <View style={styles.container}>
                <BarChart
                    data={data}
                    width={screenWidth}
                    height={screenHeight * 0.6}
                    chartConfig={chartConfig}
                    verticalLabelRotation={90}
                    fromZero={true}
                    style={styles.barChartStyle}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 15,
        marginTop: 20,
    },
    barChartStyle: {
        borderRadius: 16,
        fontWeight: "bold",
        fontSize: 20,
    },
});
