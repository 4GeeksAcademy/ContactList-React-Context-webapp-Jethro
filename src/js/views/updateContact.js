import "../../styles/contactCard.css";
import React, {useState, useEffect, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import {Footer} from "../component/footer";
import ContactCard from "../component/contactCard";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"; 


export const UpdateContact = props => {
    const { store, actions} = useContext(Context);   
    const { name, setName} = useState('John Doe');
     return(
        <div className="jumbotron">
            <div class="mb-3">
                <h1>Add a New Contact</h1>
                    <label for="formGroupExampleInput" class="form-label">Full Name</label>
                    <input value={name}  type="text" class="form-control" id="formGroupExampleInput1" placeholder="Enter your full name here"></input>
            </div>
            <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Email</label>
                    <input value={name}  type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your email address here"></input>
            </div>
            <div class="mb-3">
                    <label for="formGroupExampleInput3" class="form-label">Phone</label>
                    <input value={name}  type="text" class="form-control" id="formGroupExampleInput3" placeholder="Enter your phone number here"></input>
            </div>
            <div class="mb-3">
                    <label for="formGroupExampleInput3" class="form-label">Address</label>
                    <input value={name}  type="text" class="form-control" id="formGroupExampleInput3" placeholder="Enter your physical address here"></input>
            </div>
            <div class="button">
                    <button type="button" class="btn btn-primary">Update Contact</button>
                    <button type="button" class="btn btn-danger">Cancel</button>
            </div>
        </div>
     )

}
