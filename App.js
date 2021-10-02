import React, {useState} from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HeaderComponent from "./components/Header/HeaderComponent";
import ChartsType from "./components/Charts/ChartsType";
import Charts from "./components/Charts/Charts";
import Location from "./components/Location/Location";

const Section = ({children, title}): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [chartType, setChartType] = useState(0);
    const handleTypeChange = (chartType) => {
        setChartType(chartType);
    };

    function getChartTitle(chartType) {
        const buttons = ["Total Trees", "Acre Areas", "Product Per Month", "Product Per Year"];
        return `Chart of ${buttons[chartType]} values`;
    }

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                {/*<Header/>*/}
                <HeaderComponent/>
                <Location/>
                <ChartsType value={chartType} onTypeChange={handleTypeChange}/>
                <Charts type={chartType}/>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Section title="Agri Tech">
                        <Text style={styles.chartTitle}>
                            {getChartTitle(chartType)}
                        </Text>
                    </Section>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    chartTitle: {
        fontWeight: "bold",
        fontSize: 20,
    },
});

export default App;
