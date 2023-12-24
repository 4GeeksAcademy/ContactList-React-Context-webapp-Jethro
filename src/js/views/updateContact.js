import "../../styles/contactCard.css";
import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import ContactCard from "../component/contactCard";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";


export const UpdateContact = props => {
        const { id } = useParams()
        const { store, actions } = useContext(Context);
        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');
        const [address, setAddress] = useState('');
        const [email, setEmail] = useState('');

        return (
                <div className="jumbotron">
                        <div class="mb-3">
                                <h1>Add a New Contact</h1>
                                <label htmlfor="formGroupExampleInput" class="form-label">Full Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="formGroupExampleInput1" placeholder="Enter your full name here"></input>
                        </div>
                        <div class="mb-3">
                                <label htmlfor="formGroupExampleInput2" class="form-label">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your email address here"></input>
                        </div>
                        <div class="mb-3">
                                <label hmtlfor="formGroupExampleInput3" class="form-label">Phone</label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" class="form-control" id="formGroupExampleInput3" placeholder="Enter your phone number here"></input>
                        </div>
                        <div class="mb-3">
                                <label htmlfor="formGroupExampleInput3" class="form-label">Address</label>
                                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" class="form-control" id="formGroupExampleInput3" placeholder="Enter your physical address here"></input>
                        </div>
                        <div class="button">
                                <button type="button" class="btn btn-success" onClick={() => actions.updateContact(name, email, phone, address, id)}>Update Contact </button>
                                <Link type="button" to={"/"} class="btn btn-danger  justify-content-center">Cancel</Link>
                                <Link type="button" to={"/"} class="btn btn-primary justify-content-right">Go to Home page</Link>
                        </div>
                </div>
        )

}
