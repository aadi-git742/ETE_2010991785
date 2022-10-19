import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams, Link } from "react-router-dom";


const View = () =>{

    const { id } = useParams();
    
    const [userData, setUserData] = useState([]);
    useEffect(()=>{
        const d = async ()=>{
            const res = await axios.get(`http://localhost:3001/users/${id}`);
            setUserData(res.data);
        }
        d();
    },[])

    return (
       <>
        <div className="container">
            <h2 className="mb-4 text-success text-center " style={{fontFamily:"Times New Roman"}}><strong><u>Read</u></strong></h2>
            <div className="d-flex justify-content-center mx-auto shadow p-5">
                <div className="card ml-5 shadow" style={{width:`${22}rem`}}>
                    <img src={userData.imgURL} style={{height:350, width:350}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><u>Details of {userData.name} :</u></h5>
                        <ul>
                            <li>Name: {userData.name}</li>
                            <li>UserName: {userData.username}</li>
                            <li>Email: {userData.email}</li>
                        </ul>
                    </div>
                </div>    
            </div>
        </div>
       </> 
    );
}

export default View;