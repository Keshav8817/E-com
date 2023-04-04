import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Create from "../Components/Create";
import Read from "../Components/Read";
import Layout from "../Components/Layout";
import "./Contact.css";

export const Contact = () => {
return(
   <Layout>
     
    <Read/>
  
   </Layout>
  );
};
