import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  View,
  Platform
} from "react-native";

import Form from "./components/form";
import Timer from "./components/timer";
import Speedup from "./components/speedup";

export default function App() {
  const STARTING_SECOND = 59;
  const [minuteCounter, setMinuteCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);
  const [message, setMessage] = useState("");
  const [isTwentySecsLeft, setIsTwentySecsLeft] = useState(false);
  const [isTenSecsLeft, setIsTenSecsLeft] = useState(false);
  const [interval, setInterrval] = useState(-1);
  const [done, setDone] = useState(false);

  const detectTimeUp = (currentMinute, currentSecond) => {
    if (currentMinute <= 0 && currentSecond <= 0) {
      setMessage("Time's Up!!!");
    }
  };

  const detectHalfway = (initialMinute, currentMinute, currentSecond) => {
    if (Math.floor(initialMinute / 2) === currentMinute && currentSecond < 0) {
      setMessage("Halfway There!!!");
    }
  };

  const detectTwentySecsLeft = (currentMinute, currentSeconds) => {
    if (currentMinute == 0 && currentSeconds < 20) {
      setIsTwentySecsLeft(true);
    }
  };

  const detectTenSecsLeft = (currentMinute, currentSeconds) => {
    if (currentMinute == 0 && currentSeconds <= 10) {
      setIsTenSecsLeft(true);
    }
  };

  const pauseCountdown = () => {
    clearInterval(interval);
  };

  const beginCountdown = (minute, second, speedupValue) => {
    let minuteClone = 0;

    if (!speedupValue) {
      speedupValue = 1.0;
      minuteClone = minute - 1;
    } else {
      if (interval > -1) {
        clearInterval(interval); // when a speedup is requested, clear the current interval before starting a new one
      }
      minuteClone = minute; // if a speedup is requested, use the current minute value
    }

    let secClone = second;
    setMinuteCounter(minuteClone);
    setSecondCounter(secClone);

    let intervalId = setInterval(function() {
      setSecondCounter(secClone--);

      detectTimeUp(minuteClone, secClone);

      detectHalfway(minute, minuteClone, secClone);

      detectTwentySecsLeft(minuteClone, secClone);

      detectTenSecsLeft(minuteClone, secClone);

      if (secClone < 0) {
        // a minute just passed
        if (minuteClone === 0) {
          // countdown has ended
          clearInterval(intervalId);
          setDone(true);
        } else {
          minuteClone -= 1;
          setTimeout(() => {
            setMinuteCounter(minuteClone);
          }, 900);
          secClone = STARTING_SECOND;
        }
      }
    }, 1000 / speedupValue);

    setInterrval(intervalId);
  };

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Form
        startCountdown={beginCountdown}
        pauseCountdown={pauseCountdown}
        minuteCounter={minuteCounter}
        secondCounter={secondCounter}
        isDone={done}
      />

      <Timer
        minuteCounter={minuteCounter}
        secondCounter={secondCounter}
        isTwentySecsLeft={isTwentySecsLeft}
        isTenSecsLeft={isTenSecsLeft}
      />

      <Speedup
        speedUp={beginCountdown}
        minuteCounter={minuteCounter}
        secondCounter={secondCounter}
        isCountingDown={interval > -1}
      />

      <View style={styles.messageContainer}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#bb2254",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center"
  },
  messageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  message: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    top: -5,
    display: "flex"
  },
  hide: {
    display: "none"
  }
});
