import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity
} from "react-native";

export default function Speedup({
  minuteCounter,
  secondCounter,
  speedUp,
  isCountingDown
}) {
  const [pressStatus_1, setPressStatus_1] = useState(false);
  const [pressStatus_2, setPressStatus_2] = useState(false);
  const [pressStatus_3, setPressStatus_3] = useState(false);

  const speedUpCounter = speedupValue => {
    speedUp(minuteCounter, secondCounter, speedupValue);
  };
  return (
    <View style={styles.speedupWrapper}>
      <TouchableOpacity
        style={
          pressStatus_1 ? styles.speedupCardHighlighted : styles.speedupCard
        }
        onFocus={() => {
          setPressStatus_1(true);
        }}
        onPress={() => {
          speedUpCounter(1.0);
        }}
        onBlur={() => {
          setPressStatus_1(false);
        }}
        disabled={!isCountingDown}
      >
        <View style={styles.speedupValue}>
          <Text style={pressStatus_1 ? styles.textBold : styles.text}>
            1.0x
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          pressStatus_2 ? styles.speedupCardHighlighted : styles.speedupCard
        }
        onFocus={() => {
          setPressStatus_2(true);
        }}
        onPress={() => {
          speedUpCounter(1.5);
        }}
        onBlur={() => {
          setPressStatus_2(false);
        }}
        disabled={!isCountingDown}
      >
        <View style={styles.speedupValue}>
          <Text style={pressStatus_2 ? styles.textBold : styles.text}>
            1.5x
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          pressStatus_3 ? styles.speedupCardHighlighted : styles.speedupCard
        }
        onFocus={() => {
          setPressStatus_3(true);
        }}
        onPress={() => {
          speedUpCounter(2.0);
        }}
        onBlur={() => {
          setPressStatus_3(false);
        }}
        disabled={!isCountingDown}
      >
        <View style={styles.speedupValue}>
          <Text style={pressStatus_3 ? styles.textBold : styles.text}>2x</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  speedupWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 20
  },
  speedupCard: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 4,
    width: 40,
    // flex: 1,
    margin: 10,
    height: 30,
    padding: 5
  },
  speedupCardHighlighted: {
    backgroundColor: "#fff",
    color: "#30374e",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 4,
    width: 40,
    // flex: 1,
    margin: 10,
    height: 30,
    padding: 5
  },
  speedupValue: {
    // padding:
    // color: ""
  },
  text: {
    color: "#fff",
    textAlign: "center"
  },
  textBold: {
    color: "#30374e",
    textAlign: "center"
  }
});
