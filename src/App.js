import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";

const employeeData = [
  { id: "1", name: "John Doe", gender: "male", role: "Developer" },
  { id: "2", name: "Jane Smith", gender: "female", role: "Designer" },
  { id: "3", name: "Mark Johnson", gender: "male", role: "Manager" },
];

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  col: {
    width: "30%",
  },
});

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Employee List</Text>
      <View style={styles.row}>
        <Text style={styles.col}>Name</Text>
        <Text style={styles.col}>Gender</Text>
        <Text style={styles.col}>Role</Text>
      </View>
      {data.map((emp) => (
        <View key={emp.id} style={styles.row}>
          <Text style={styles.col}>{emp.name}</Text>
          <Text style={styles.col}>{emp.gender}</Text>
          <Text style={styles.col}>{emp.role}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

function App() {
  const handleDownload = async () => {
    const blob = await pdf(<MyDocument data={employeeData} />).toBlob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "employees.pdf";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Employee List</h1>
      <ul>
        {employeeData.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.role} ({emp.gender})
          </li>
        ))}
      </ul>
      <button
        onClick={handleDownload}
        style={{ marginTop: 20, padding: "10px 20px" }}
      >
        Download PDF
      </button>
    </div>
  );
}

export default App;
