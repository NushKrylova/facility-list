import React from "react";
import { setMockData } from "./apiMock/facilities";
import "./App.css";
import { FacilityList } from "./components/FacilityList";

setMockData();

function App() {
  return (
    <div className="App">
      <FacilityList />
    </div>
  );
}

export default App;
