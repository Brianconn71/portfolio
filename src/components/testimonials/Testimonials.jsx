import "./testimonials.scss"

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src={process.env.PUBLIC_URL + "/assets/arrow-left.svg"} className="left" alt="" />
                        <img className="user" src="" alt="" />
                        <img className="right" src="" alt="" />
                    </div>
                    <div className="center">
                        wsea,dfgeasdflglasfhslaifhlaisufhloiazsfhuoiashfiluashfluiashfgluh
                    </div>
                    <div className="bottom">
                        <h3>Blah</h3>
                        <h4>Ceo of Lama</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
