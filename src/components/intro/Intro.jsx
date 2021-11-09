import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={process.env.PUBLIC_URL + "/assets/pic.jpg"} alt="" />
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}
