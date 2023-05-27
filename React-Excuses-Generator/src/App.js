import "./App.css";
import Axios from "axios";
import { useState} from "react";

function App() {
const [data, setData] = useState("");
const [excuse, setexcuse] = useState("");

  const fetchData = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
  .then((res) =>{
    setData(res.data[0]);
  });
  }

  return (
  <div className="App">
    <h1>Generate an exuse</h1>
    <button onClick={() => {
      setexcuse("party");
      fetchData();
      }
      }>Party</button>

    <button onClick={() => {
      setexcuse("family");
      fetchData();
      }}>Family</button>

    <button onClick={() => {
      setexcuse("office");
      fetchData();
      }}>Office</button>

    <p>{data.excuse}</p>
    
  </div>
  
  );
}


export default App;
