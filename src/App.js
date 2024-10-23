import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/body/Body";
import Navbar from "./components/nav/Navbar";

function App() {
  const [appData, setAppData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/dummydata/data.json");
      const data = await response.json();
      setAppData(data.page);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar searchBar={appData?.searchBar} addButton={appData?.addButton} />
      <Body appData={appData} />
    </div>
  );
}

export default App;
