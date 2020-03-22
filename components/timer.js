import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Timer({
  minuteCounter,
  secondCounter,
  isTwentySecsLeft,
  isTenSecsLeft
}) {
  const [showText, setShowText] = useState(true);
  useEffect(() => {
    if (isTenSecsLeft) {
      setInterval(() => {
        setShowText(!showText);
      }, 3000);
    }
  });
  let minute = `${minuteCounter < 10 ? 0 : ""}${minuteCounter}`;
  let second = `${secondCounter < 10 ? 0 : ""}${secondCounter}`;
  return (
    <View style={styles.timerWrapper}>
      <View style={styles.card}>
        <Text
          style={isTwentySecsLeft === false ? styles.timerValue : styles.danger}
        >
          {minute}
        </Text>
      </View>
      <Text style={styles.colon}> : </Text>
      <View style={styles.card}>
        <Text
          style={isTwentySecsLeft === false ? styles.timerValue : styles.danger}
        >
          {second}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50
  },
  timerValue: {
    fontSize: 50,
    color: "#30374e"
  },
  danger: {
    fontSize: 50,
    color: "#bb2254"
  },
  blink: {
    color: "#fff",
    fontSize: 50
  },
  card: {
    backgroundColor: "#fff",
    height: "auto",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 7
  },
  colon: {
    color: "#fff",
    fontSize: 50,
    marginTop: 15
  }
});
