import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const request = await axios.get(url);
    setLoading(false);
    setJobs(request.data);
    console.log(request.data);
    return request;
  };

  useEffect(() => {
    fetchJobs();
  }, [url]);

  if (loading) {
    return <section>Loading...</section>;
  }

  const { dates, company } = jobs[value];

  return (
    <div>
      <h3>{dates}</h3>
      <p>{company}</p>
    </div>
  );
}

export default App;
