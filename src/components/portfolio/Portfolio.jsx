import "./portfolio.scss"

export default function Portfolio() {

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "featured",
            title: "Featured",
        },
    ]

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                
            </ul>
            <div className="container">
                <div className="item">
                    <img src={process.env.PUBLIC_URL + "/assets/placeholder.jpg"} alt="" />
                    <h3>Banking App</h3>
                </div>

                <div className="item">
                    <img src={process.env.PUBLIC_URL + "/assets/placeholder.jpg"} alt="" />
                    <h3>Banking App</h3>
                </div>

                <div className="item">
                    <img src={process.env.PUBLIC_URL + "/assets/placeholder.jpg"} alt="" />
                    <h3>Banking App</h3>
                </div>

                <div className="item">
                    <img src={process.env.PUBLIC_URL + "/assets/placeholder.jpg"} alt="" />
                    <h3>Banking App</h3>
                </div>

                <div className="item">
                    <img src={process.env.PUBLIC_URL + "/assets/placeholder.jpg"} alt="" />
                    <h3>Banking App</h3>
                </div>

                <div className="item">
                    <img src={process.env.PUBLIC_URL + "/assets/placeholder.jpg"} alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
