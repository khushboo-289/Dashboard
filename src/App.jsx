// App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import SummaryCards from "./components/SummaryCards";
import OrderTable from "./components/OrderTable";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="col-md-10">
          <Topbar />
          <div className="container mt-4">
            <SummaryCards />
            <OrderTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
