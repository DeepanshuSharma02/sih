import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'; // Updated import
import { LineChart, BarChart, XAxis, YAxis, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";

// LineChartComponent component
const LineChartComponent = ({ pdata }) => (
  <View style={styles.chartContainer}>
    <LineChart
      style={{ height: 200 }}
      data={pdata.map((item) => item.amount)}
      svg={{ stroke: "#a6abff" }}
      contentInset={{ top: 20, bottom: 20 }}
      curve={shape.curveMonotoneX}
    >
      <Grid />
    </LineChart>
    <XAxis
      style={{ marginHorizontal: -10 }}
      data={pdata}
      formatLabel={(value, index) => pdata[index].day}
      contentInset={{ left: 10, right: 10 }}
      svg={{ fontSize: 10, fill: "white" }}
    />
  </View>
);

// BarChartComponent component
const BarChartComponent = ({ pdata }) => (
  <View style={styles.chartContainer}>
    <BarChart
      style={{ height: 200 }}
      data={pdata.map((item) => item.amount)}
      svg={{ fill: "#8884d8" }}
      contentInset={{ top: 30, bottom: 30 }}
    >
      <Grid />
    </BarChart>
    <XAxis
      style={{ marginHorizontal: -10 }}
      data={pdata}
      formatLabel={(value, index) => pdata[index].day}
      contentInset={{ left: 10, right: 10 }}
      svg={{ fontSize: 10, fill: "white" }}
    />
  </View>
);

// HomePage component
const HomePage = () => {
  const [refresh, setRefresh] = useState(0);
  const data = useData(refresh);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Weekly Insights</Text>
        <TouchableOpacity onPress={() => setRefresh(refresh + 1)}>
          <Icon name="refresh-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.infoBox}>
          <View style={styles.infoHeader}>
            <Icon name="wallet-outline" size={24} color="black" />
            <Text style={styles.infoText}>Amount Processed</Text>
          </View>
          <Image source={require("../assets/home_page.png")} style={styles.image} />
          <Text style={styles.amountText}>${data?.totalAmountProcessed}</Text>
        </View>
        <View style={styles.chartBox}>
          {data ? <BarChartComponent pdata={data.lastWeekMetric} /> : null}
        </View>
      </View>

      <View style={styles.chartBox}>
        {data ? <LineChartComponent pdata={data.lastWeekMetric} /> : null}
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBox: {
    width: "40%",
    backgroundColor: "#a6abff",
    padding: 16,
    borderRadius: 10,
  },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "black",
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  amountText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },
  chartBox: {
    width: "55%",
    backgroundColor: "#37373f",
    padding: 16,
    borderRadius: 10,
  },
  chartContainer: {
    height: 200,
  },
});

// Mock function to simulate data fetching
const useData = (refresh) => {
  return {
    totalAmountProcessed: 12000,
    lastWeekMetric: [
      { day: "Mon", amount: 2000 },
      { day: "Tue", amount: 1500 },
      { day: "Wed", amount: 1000 },
      { day: "Thu", amount: 2500 },
      { day: "Fri", amount: 3000 },
    ],
  };
};

export default HomePage;
