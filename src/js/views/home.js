import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import ContactCard from "../component/contactCard";
import { Context } from "../store/appContext";


export const Home = () => {

  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState([]);

  useEffect(() => {
    actions.addContact("Jethro", "123 Parkway", "3445666", "jwetti@gmail.com")
    actions.getContact()
    setContact(store.contacts)
  }, [])



  return (

    <div className="text-center">
      {store.contacts.map((item, index) => (
        <ContactCard key={index} full_name={item.full_name} email={item.email} phone={item.phone} address={item.address} contact_id={item.id} />

      ))}
    </div>

  );



};
