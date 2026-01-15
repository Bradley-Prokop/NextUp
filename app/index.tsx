import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../firebaseConfig.js";
import { getDoc, doc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Index() {

  const [appts, setAppts] = useState("");

  /*
  1. Create a reference to the correct doc or collection of data
  2. add data
  */

  //This will read in data
  // useEffect(()=>{
  //   const apptRef = collection(db, "users", "UID", "appointments");
  //   const apptsSnapshot = await getDocs(apptRef);
  //   setAppts(apptsSnapshot);
  // });

  return (
    <SafeAreaView style={styles.index_main_container}>
      <ScrollView>

        <Text style={styles.index_title}>My Dashboard</Text>

        <View style={styles.index_dashboard_content_containers}>
          <Text style={styles.index_dashboard_labels}>Appointments:</Text>
        </View>
        
        <View style={styles.index_dashboard_content_containers}>
          <Text style={styles.index_dashboard_labels}>Long-Term Goals:</Text>
        </View>

        <View style={styles.index_dashboard_content_containers}>
          <Text style={styles.index_dashboard_labels}>Tasks:</Text>
        </View>

        <View style={styles.index_dashboard_content_containers}>
          <Text style={styles.index_dashboard_labels}>Repeating-Tasks:</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    index_main_container: {
      backgroundColor: "#01033A",
      flex: 1,
    },
    index_title: {
      fontStyle: "italic",
      color: "white",
      fontSize: 25,
      margin: "auto",
      marginVertical: 25, 
    },
    index_dashboard_content_containers: {
      width: "75%",
      backgroundColor: "#a9a9a9ff",
      borderRadius: 25,
      padding: 20,
      margin: "auto",
      marginVertical: 30,
    },
    index_dashboard_labels: {
      color: "black",
      fontSize: 18,
      margin: "auto",
      marginBottom: "10%",
      fontWeight: "bold",
    },
});