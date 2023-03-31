import React, { useEffect, useState } from "react";
import axios from "axios";

export const Contact = () => {
  const [data, setData] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    age: "",
    occupation: "",
  });

  useEffect(() => {
    axios
      .get("https://ecomg.azurewebsites.net//user/1")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={data.firstName}
        type="text"
        placeholder="firstName"
        onChange={(e) => setData({ ...data, firstName: e.currentTarget.value })}
      />
      <input
        value={data.lastName}
        type="text"
        placeholder="lastName"
        onChange={(e) => setData({ ...data, lastName: e.currentTarget.value })}
      />
      <input
        value={data.age}
        type="text"
        placeholder="age"
        onChange={(e) => setData({ ...data, age: e.currentTarget.value })}
      />
      <input
        value={data.occupation}
        type="text"
        placeholder="occupation"
        onChange={(e) => setData({ ...data, occupation: e.currentTarget.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
