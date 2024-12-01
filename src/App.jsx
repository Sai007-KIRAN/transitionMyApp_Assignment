import React from "react";
import Tabs from "./components/Tabs/Tabs";
import CustomerDetails from "./components/CustomerDetails/CustomerDetails";
import ConversationSection from "./components/ConversationSection/ConversationSection";
import ActionPanel from "./components/ActionPanel/ActionPanel";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Escalate from "./components/Escalate/Escalate";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">

      <div className="main-content">

        <Sidebar />

        <div className="main-section">
        <Header />

          <Tabs />

          <div className="content-area">

            <CustomerDetails />

            <div>
            <Escalate />
            <ConversationSection />
            </div>

            <ActionPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;