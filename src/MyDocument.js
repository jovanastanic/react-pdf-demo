import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
  },
});

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Employee List</Text>
      </View>
      {data.map((emp) => (
        <View style={styles.section} key={emp.id}>
          <Text style={styles.text}>Name: {emp.name}</Text>
          <Text style={styles.text}>Role: {emp.role}</Text>
          <Text style={styles.text}>Gender: {emp.gender}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default MyDocument;
