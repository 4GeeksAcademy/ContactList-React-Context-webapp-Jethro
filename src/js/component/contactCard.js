import React, { useContext } from "react";
import "../../styles/contactCard.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



//create your first component
const ContactCard = (props) => {
        const { store, actions } = useContext(Context);


        return (

                <><div className="card" style={{ "width": "25rem" }}>

                        <img className="card-photoId" src="https://www.shutterstock.com/shutterstock/photos/1469645879/display_1500/stock-photo-headshot-portrait-of-smiling-biracial-male-employee-in-glasses-stand-forefront-look-at-camera-1469645879.jpg" />


                        <div className="card-body">
                                <h3>{props.full_name}</h3>

                                <div className="Card-body-address">
                                        <div className="Card-body-address-icon"><i className="fa-sharp fa-solid fa-location-dot"></i></div>
                                        <div className="address">{props.address} </div>
                                </div>
                                <div className="Card-body-tel">
                                        <div className="card-body-tel-icon"><i className="fa-solid fa-phone"></i></div>
                                        <div className="tel">{props.phone}</div>
                                </div>
                                <div className="card-body-email">
                                        <div className="card-body-email-icon"><i className="fa-solid fa-envelope"></i></div>
                                        <div className="">{props.email}</div>
                                </div>

                                <Link className="update-pen" to={"/UpdateContact/" + props.contact_id}><i className="fa-solid fa-pen"></i></Link>
                                <div className="trashBox btn btn-danger" onClick={() => actions.deleteContact(props.contact_id)}><i className="fa-solid fa-trash-can"></i></div>


                        </div>
                </div></>


        );
};


export default ContactCard;
