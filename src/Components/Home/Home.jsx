import React from 'react';
import '../Home/Home.css'

export default function Home() {
    return (
        <>
            <section className="home-container">
                <div className="home-portal-title-div">
                    <div className="home-logo-name">
                        <img src="./OIG.png" id='home-bg-img' alt="" />
                        <h1 id="home-portal-title">
                            Food Mania
                        </h1>
                    </div>
                    <div className="portal-info-div">
                        <p className="portal-info">
                            Welcome to "Food Mania," your ultimate destination for exploring the rich and diverse world of Maharashtrian cuisine. We're passionate about the flavors, traditions, and culinary delights that Maharashtrian recipes have to offer. Our blog is a tribute to this incredible cuisine, and we're thrilled to take you on a mouth-watering journey through the land of Maharashtrian delicacies.
                        </p>
                        <p className="portal-info">
                            As you step into "Food Mania," you'll be greeted by a tantalizing display of our featured Maharashtrian recipes. Each dish is carefully crafted, and the images are designed to make your taste buds tingle. Whether you're a seasoned cook or a newbie in the kitchen, there's something here to spark your culinary curiosity.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
