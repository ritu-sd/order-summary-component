import React from "react";
import ReactDom from "react-dom/client";
import img1 from "./public/images/music_flatline.png";
import img2 from "./public/images/music.png";


const Header = () => {
    return <div className="card-header">
    <img src={img1} alt="Music Flatline" />    
</div>
}


const Body = () => {
    return <div className="card-contents">
       <div className="order-summary">
        <h2>Order Summary</h2>
       </div>

       <div className="content">
        <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
       </div>

       <div className="annual-plan">
        <div className="music-img">
            <img src={img2}/>
        </div>

        <div className="annual-plan-details">
         <h3>Annual Plan</h3>
         <a>$59.99/year</a>
         </div>
        
        <div className="change">
            <a href="">Change</a>
        </div>
       </div>
</div>
}

const Footer = () => {
    return <div className="card-footer">
        <div className="btn">
        <button type="button" onclick="alert('Hello world!')">Proceed to Payment</button>
        </div>
        <div className="cancel-order">
            <p>Cancel Order</p>
        </div>
    </div>
}


const CardLayout = () => {
    return <div className="card">
    <Header/>
    <Body/>
    <Footer/>
    </div>
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<CardLayout/>);
