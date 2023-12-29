import ContactList from "./ContactList.jsx";
import {getData} from "../../model/data.js";

function Contact() {

    const contacts = getData();

    return (
        <div className="contact-app">
            <h1>My Contact</h1>
            <ContactList contacts={contacts} />
        </div>
    )
}

export default Contact;