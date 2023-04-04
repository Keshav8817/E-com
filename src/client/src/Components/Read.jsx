import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Read() {
  const [getData, setGetData] = useState([]);
  let navigate = useNavigate();

  function LoadData() {
    axios.get("https://ecomg.azurewebsites.net/users").then((response) => {
      setGetData(response.data);
    });
  }
  function EditData(apiData) {
    navigate("/create", { state: { apiData } });
  }
  function DeleteData(id) {
    axios.delete(`https://ecomg.azurewebsites.net/delete/${id}`).then(() => {
      LoadData();
    });
  }
  useEffect(() => {
    LoadData();
  }, []);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/create");
        }}
      >
        Create
      </button>
      
          <div className="row">
            <div className="col-md-12">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Occupation</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {getData.map((apiData) => {
        return (
                  <tr>
                    <td class="table-dark">{apiData.id}</td>
                    <td class="table-dark">{apiData.firstName}</td>
                    <td class="table-dark">{apiData.lastName}</td>
                    <td class="table-dark">{apiData.age}</td>
                    <td class="table-dark">{apiData.occupation}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          EditData(apiData);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          DeleteData(apiData.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                   ) })}
                </tbody>
              </table>
            </div>
          </div>
       
     
    </>
  );
}
export default Read;
