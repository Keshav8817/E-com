import React from "react";


const HeroSection = () =>{
    return (
        <>
        <div className="row">
            <div className="col-2">
                <h1>The body achieves{<br/>} what the mind believes!</h1>
                <p>Success isn't always about greatness. It's about consistency. Consistent {<br />}hard work gains success. Greatness will come.
                </p>
                <a href="/https://google.com" className="btn" >
                Explore Now
                </a>
            </div>
            <div className="col-2">
                <img src="images1/home.png" />
            </div>
        </div>
        </>
    )
}
export default HeroSection 