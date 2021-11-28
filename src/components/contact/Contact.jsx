import { useState } from "react";
import "./contact.scss"

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(True)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={process.env.PUBLIC_URL + "/assets/handshake.svg"} alt="" />
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Enter a Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
