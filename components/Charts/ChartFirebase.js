import React, {useEffect, useState} from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {BarChart} from "react-native-chart-kit";
import database from '@react-native-firebase/database';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const reference = database().ref('/data');

const ChartFirebase: () => Node = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData();
        sendData();
    }, []);

    const getData = () => {
        console.log('eee')
        database()
            .ref('/data')
            .on('value', snapshot => {
                console.log('fff')
                console.log('User data: ', snapshot.val());
                setData(snapshot.val());
            });
    };

    const sendData = () => {
        database()
            .ref('/users/user')
            .set({
                temp: 10.03,
                weight: 1.5,
            })
            .then(() => console.log('Data set.'));
    };


    console.log('aaaaaaaaaaaaa')
    console.log('bbb',data)

    return (
        <View>
            {data}
            <Text>data</Text>
        </View>
    );
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

export default ChartFirebase;
