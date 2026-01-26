import { useEffect, useState } from "react";
import api from "../api";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("protected/") // Calls Django API /api/protected/
      .then(res => setMessage(res.data.message))
      .catch(err => {
        console.log("Error:", err.response?.data);
        setMessage("Not authorized or token missing!");
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{message}</p>
    </div>
  );
};

export default Dashboard;
