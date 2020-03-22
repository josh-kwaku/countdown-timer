import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native";

import { Feather } from "@expo/vector-icons";

export default function Form({
  startCountdown,
  pauseCountdown,
  minuteCounter,
  secondCounter,
  isDone
}) {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(59);
  const [timerHasStarted, setTimerHasStarted] = useState(false);

  const initCountdown = value => {
    setMinute(value);
  };

  const handleStart = () => {
    setTimerHasStarted(true);
    startCountdown(minute, second);
  };

  const handlePause = () => {
    setTimerHasStarted(false);
    setMinute(minuteCounter + 1);
    setSecond(secondCounter);
    pauseCountdown();
  };

  return (
    <View style={styles.form}>
      <View style={styles.inputHolder}>
        <TextInput
          style={styles.input}
          placeholder="10"
          placeholderTextColor="#30374e"
          onChangeText={initCountdown}
        />
        <Text style={styles.placeholder}>(minutes)</Text>
      </View>
      <View style={styles.playPause}>
        {!timerHasStarted || isDone ? (
          <TouchableOpacity
            style={{ marginTop: 0 }}
            onPress={handleStart}
            disabled={!minute}
          >
            <Feather
              name="play"
              color="#bb2254"
              size={55}
              iconStyle={{ size: 60 }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handlePause}>
            <Feather
              name="pause"
              size={55}
              iconStyle={{ size: 60 }}
              color="#bb2254"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    // flex: 2,
    borderWidth: 1,
    height: 40,
    borderColor: "#cacaca",
    borderRadius: 4,
    // marginTop: 10,
    backgroundColor: "#fff",
    color: "#000",
    padding: 4,
    width: 60,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },

  form: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 30
    // backgroundColor: "#fff"
  },
  inputHolder: {
    backgroundColor: "#fff",
    flex: 3,
    flexDirection: "row",
    borderRadius: 3,
    height: "auto",
    padding: 10,
    justifyContent: "center",
    elevation: 5
  },
  playPause: {
    backgroundColor: "#fff",
    flex: 3,
    flexDirection: "row",
    borderRadius: 3,
    height: 90,
    padding: 20,
    // textAlign: "center",
    justifyContent: "center"
  },
  placeholder: {
    // flex: 3,
    color: "#30374e",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 15
  }
});
