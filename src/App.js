import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const data = [
  {
    id: 1,
    name: "Alice",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    name: "Bob",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    name: "Jovana",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    name: "Stevan",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    name: "Alice",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 6,
    name: "Bob",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 7,
    name: "Jovana",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 8,
    name: "Stevan",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 9,
    name: "Alice",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 10,
    name: "Bob",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 11,
    name: "Jovana",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 12,
    name: "Stevan",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 13,
    name: "Alice",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 14,
    name: "Bob",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 15,
    name: "Jovana",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 16,
    name: "Stevan",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 17,
    name: "Alice",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 18,
    name: "Bob",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 19,
    name: "Jovana",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 20,
    name: "Stevan",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 21,
    name: "Alice",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 22,
    name: "Bob",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 23,
    name: "Jovana",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 24,
    name: "Stevan",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 25,
    name: "Alice",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 26,
    name: "Bob",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 27,
    name: "Jovana",
    role: "Developer",
    gender: "Female",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
  {
    id: 28,
    name: "Stevan",
    role: "Designer",
    gender: "Male",
    image:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?cb=iwp2&rs=1&pid=ImgDetMain",
  },
];

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Employee List</h1>
      <ul>
        {data.map((emp) => (
          <li key={emp.id}>
            {emp.name} — {emp.role} — {emp.gender}
          </li>
        ))}
      </ul>

      <PDFDownloadLink
        document={<MyDocument data={data} />}
        fileName="employees.pdf"
        style={{
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: 5,
          fontWeight: "bold",
          display: "inline-block",
        }}
      >
        {({ loading }) => (loading ? "Preparing document..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
  );
}
