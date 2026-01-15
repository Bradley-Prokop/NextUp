import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import AddButton from "@/components/addButton";
import { ScrollView } from "react-native-gesture-handler";

export default function More() {
  // Controller for tabs
  const [selectedTab, setSelectedTab] = useState("RT");
  // Repeating Tasks
  const [repeatingTask, setRepeatingTask] = useState("");
  const [repeatingDays, setRpeatingDays] = useState("");
  // Long-Term Goals
  const [goalType, setGoalType] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  // Appointment
  const [apptName, setApptName] = useState("");
  const [apptDate, setApptDate] = useState(new Date());

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setApptDate(selectedDate || apptDate);
  };

  return (
    <SafeAreaView style={styles.moreMainContainer}>
      <Text style={styles.moreScreenTitle}>More Options</Text>

      {/* Tabs Container */}
      <View style={styles.moreTabsContainer}>
        <TouchableOpacity
          onPress={() => setSelectedTab("RT")}
          style={[
            styles.moreTabButton,
            selectedTab === "RT" && styles.moreTabButtonActive,
          ]}
        >
          <Text style={styles.moreTabText}>Repeating Task</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedTab("LT")}
          style={[
            styles.moreTabButton,
            selectedTab === "LT" && styles.moreTabButtonActive,
          ]}
        >
          <Text style={styles.moreTabText}>Long-Term Goal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedTab("APPT")}
          style={[
            styles.moreTabButton,
            selectedTab === "APPT" && styles.moreTabButtonActive,
          ]}
        >
          <Text style={styles.moreTabText}>Appointment</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View style={styles.moreTabContentContainer}>
        {/* Repeating Task Tab */}
        {selectedTab === "RT" && (
          <View>
            <Text style={styles.moreTabContentTitle}>
              Set up a repeating task:
            </Text>

            <TextInput
              style={styles.moreTextInput}
              placeholder=" Enter task"
              placeholderTextColor="#000"
            ></TextInput>

            <View style={styles.moreDayPickerContainer}>
              <Text style={styles.moreDayPickerTitle}>Options:</Text>
              <View style={styles.moreDayPickerInnerDaysContainer}>
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day, index) => (
                  <TouchableOpacity
                  key={index}
                  >
                    <Text style={styles.moreDayPickerButtons}>{day}</Text>
                  </TouchableOpacity>
                ))}
                </View>
            </View>

            <AddButton
              style={styles.moreRepeatingTaskAddButton}
              text="Add Repeating Task"
            />
          </View>
        )}

        {/* Long-Term Goal Tab */}
        {selectedTab === "LT" && (
          <View>
            <Text style={styles.moreTabContentTitle}>
              Set a long term goal now!
            </Text>

            <TextInput
              style={styles.moreTextInput}
              placeholder=" Goal type... 'Fitness'"
              placeholderTextColor="#000000"
              value={goalType}
              onChangeText={(text) => setGoalType(text)}
            />

            <TextInput
              style={styles.moreTextArea}
              placeholder=" My goal is to..."
              placeholderTextColor="#000000"
              multiline
              numberOfLines={6}
              textBreakStrategy="highQuality"
              value={goalDescription}
              onChangeText={(text) => setGoalDescription(text)}
            />

            <AddButton
              style={styles.moreLongTermGoalAddButton}
              text="Add Long-Term Goal"
            />
          </View>
        )}

        {/* Appointment Tab */}
        {selectedTab === "APPT" && (
          <View>
            <Text style={styles.moreTabContentTitle}>
              Set a reminder for an appointment!
            </Text>

            <TextInput
              style={styles.moreTextInput}
              placeholder=" Name "
              placeholderTextColor="#000000"
              value={apptName}
              onChangeText={(text) => setApptName(text)}
            />

            <View style={styles.moreDateTimePickerContainer}>
              <Text style={styles.moreDateTimePickerLabel}>
                Please select the date/time:
              </Text>

              <DateTimePicker
                testID="dateTimePicker"
                value={apptDate}
                mode="datetime"
                display="compact"
                onChange={onChange}
              />
            </View>

            <AddButton
              style={styles.moreAppointmentAddButton}
              text="Add Appointment"
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  moreMainContainer: {
    flex: 1,
    backgroundColor: "#01033A",
  },
  moreScreenTitle: {
    color: "white",
    fontSize: 30,
    fontStyle: "italic",
    marginHorizontal: "auto",
    marginVertical: "10%",
  },
  moreTabsContainer: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  moreTabButton: {
    height: 80,
    width: 120,
    padding: 10,
    borderWidth: 0,
    borderColor: "gold",
    borderRadius: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  moreTabButtonActive: {
    borderWidth: 2,
    backgroundColor: "black",
  },
  moreTabText: {
    color: "gold",
    fontWeight: "bold",
    marginLeft: 5,
  },
  moreTabContentContainer: {
    flex: 1,
    marginTop: "5%",
  },
  moreTabContentTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: "auto",
    marginTop: "12%",
  },
  moreTextInput: {
    width: 275,
    height: 45,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: "auto",
    marginTop: 50,
  },
  moreTextArea: {
    width: 275,
    height: 150,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: "auto",
    marginVertical: 50,
  },
  moreDateTimePickerContainer: {
    padding: 20,
    marginHorizontal: "auto",
  },
  moreDateTimePickerLabel: {
    color: "white",
    fontSize: 20,
    marginVertical: 50,
  },
  moreRepeatingTaskAddButton: {
    marginHorizontal: "auto",
    marginTop: 10,
  },
  moreLongTermGoalAddButton: {
    marginHorizontal: "auto",
  },
  moreAppointmentAddButton: {
    marginHorizontal: "auto",
    marginTop: 25,
  },
  moreDayPickerContainer: {
    borderColor: "gold",
    borderWidth: 1,
    borderRadius: 10,
    height: 175,
    width: 300,
    alignSelf: "center",
    marginVertical: 30,
    alignContent: "center",
    padding: 5,
  },
  moreDayPickerTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginVertical: 15,
  },
  moreDayPickerInnerDaysContainer: {
    flexDirection: "row",
    gap: 5,
    flex: 1,
    flexWrap: "wrap",
    marginHorizontal: 15,
  },
  moreDayPickerButtons: {
    color: "gold",
  },
  moreDayPickerButtonInactive: {
    backgroundColor: "",
  }, 
  moreDayPickerButtonActive: {
    backgroundColor: "gold",
  }
});
