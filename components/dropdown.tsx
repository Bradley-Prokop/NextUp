import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function DayDropdown({ onNewDaySelected }: any) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: new Date().getDay() === 1 ? "Monday (today)" : "Monday",
      value: "Monday",
    },
    {
      label: new Date().getDay() === 2 ? "Tuesday (today)" : "Tuesday",
      value: "Tuesday",
    },
    {
      label: new Date().getDay() === 3 ? "Wednesday (today)" : "Wednesday",
      value: "Wednesday",
    },
    {
      label: new Date().getDay() === 4 ? "Thursday (today)" : "Thursday",
      value: "Thursday",
    },
    {
      label: new Date().getDay() === 5 ? "Friday (today)" : "Friday",
      value: "Friday",
    },
    {
      label: new Date().getDay() === 6 ? "Saturday (today)" : "Saturday",
      value: "Saturday",
    },
    {
      label: new Date().getDay() === 0 ? "Sunday (today)" : "Sunday",
      value: "Sunday",
    },
  ]);

  function getTodayLabel() {
    switch (new Date().getDay()) {
      case 0:
        return "Sunday (today)";
      case 1:
        return "Monday (today)";
      case 2:
        return "Tuesday (today)";
      case 3:
        return "Wednesday (today)";
      case 4:
        return "Thursday (today)";
      case 5:
        return "Friday (today)";
      default:
        return "Saturday (today)";
    }
  }

  return (
    <View style={styles.container}>
      <DropDownPicker
        textStyle={{
          color: "black",
          fontSize: 16,
          fontWeight: "bold",
          marginStart: 5,
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        onChangeValue={(day)=> {
          onNewDaySelected(day);
        }}
        placeholder={getTodayLabel()}
        style={styles.dropdown}
        listItemContainerStyle={{
          backgroundColor: "gold", // background for each item
        }}
        listItemLabelStyle={{
          color: "darkblue", // text color inside
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 0 },
  dropdown: {
    color: "white",
    height: 20,
    width: 200,
    borderWidth: 1,
    borderColor: "gold",
    backgroundColor: "gold",
  },
});
