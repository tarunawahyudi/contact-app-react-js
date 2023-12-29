import ContactItem from "./ContactItem.jsx";
import PropTypes from "prop-types";

function ContactList({ contacts }) {
    return (
        <div className="contact-list">
            {contacts.map( contact =>
                <ContactItem key={contact.id} {...contact} />
            )}

        </div>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default ContactList;