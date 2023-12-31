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
        const [name, setName] = useState();
        const [phone, setPhone] = useState();
        const [address, setAddress] = useState();
        const [email, setEmail] = useState();

        useEffect(() => {
                async function getContact() {
                        await actions.getContact()
                        let thisContact = store.contacts.filter((contact) => contact.id === id)
                        console.log(thisContact)
                        setName(thisContact.name)
                        setPhone(thisContact.phone)
                        setEmail(thisContact.email)
                        setAddress(thisContact.address)
                }
                getContact()
        }, [])

        console.log(name, phone, email, address, address)
        return (
                <div className="jumbotron">
                        <div className="mb-3">
                                <h1>Update Contact</h1>
                                <label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="formGroupExampleInput1" placeholder="Enter your full name here"></input>
                        </div>
                        <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email address here"></input>
                        </div>
                        <div className="mb-3">
                                <label htmlFor="formGroupExampleInput3" className="form-label">Phone</label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="formGroupExampleInput3" placeholder="Enter your phone number here"></input>
                        </div>
                        <div className="mzb-3">
                                <label htmlFor="formGroupExampleInput3" className="form-label">Address</label>
                                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="formGroupExampleInput3" placeholder="Enter your physical address here"></input>
                        </div>
                        <div classNameName="button">
                                <Link to={"/"} type="button" className="btn btn-success" onClick={() => actions.updateContact(name, email, phone, address, id)}>Update Contact </Link>
                                <Link type="button" to={"/"} className="btn btn-danger  justify-content-center">Cancel</Link>
                                <Link type="button" to={"/"} className="btn btn-primary justify-content-right">Go to Home page</Link>
                        </div>
                </div>
        )

}
