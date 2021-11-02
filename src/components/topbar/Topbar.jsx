import "./topbar.scss"
import {Mail, PhoneIphone} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Brian Connolly</a>
                    <div className="itemContainer">
                        <PhoneIphone className="icon" />
                        <span>(086) 3268858</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>Brian.connolly71@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
