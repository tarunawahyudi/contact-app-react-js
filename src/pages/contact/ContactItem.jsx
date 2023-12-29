import ContactItemImage from "./ContactItemImage.jsx";
import ContactItemBody from "./ContactItemBody.jsx";
import PropTypes from "prop-types";

function ContactItem({ imageUrl, name, tag }) {
    return (
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
        </div>
    )
}

ContactItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
}

export default ContactItem;