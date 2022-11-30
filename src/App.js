import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [detay, setDetay] = useState([]);
  useEffect(() => {
    axios
      .get("https://festive-catwalk-369919.uc.r.appspot.com/api/persons/getall")
      .then((data) => setDetay(data.data));
  });

  return (
    <div className="App">
      <table>
        <tr>
          <th>id</th>
          <th>firstName</th>
          <th>lastName</th>
        </tr>

        {detay.map((person) => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
