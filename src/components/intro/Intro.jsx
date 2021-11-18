import "./intro.scss"
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 800,
            backSpeed: 60,
            strings: ["Web Designer", "Web Developer", "Content Creator"]
        });
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={process.env.PUBLIC_URL + "/assets/pic.jpg"} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, My name is </h2>
                    <h1>Brian Connolly</h1>
                    <h3>I am a Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src={process.env.PUBLIC_URL + "/assets/chevron-down-line-svgrepo-com.svg"} alt="" />
                </a>
            </div>
        </div>
    )
}
