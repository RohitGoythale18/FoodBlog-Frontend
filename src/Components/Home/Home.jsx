import React from 'react';

export default function Home() {
    return (
        <>
            <section className="flex flex-col justify-center items-center" style={{ backgroundImage: 'url(./home-img.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="flex items-center mt-20">
                    <img src="./OIG.png" alt=" home-bg-img" className="h-64 w-64 bg-white rounded-full mr-5" />
                    <h1 className="text-6xl font-bold text-white">Food Mania</h1>
                </div>

                <div className="text-2xl text-white w-[75%] leading-9 mb-10">
                    <p className="text-center m-8">
                        Welcome to Food Mania, your ultimate destination for exploring the rich and diverse world of Maharashtrian cuisine. We're passionate about the flavors, traditions, and culinary delights that Maharashtrian recipes have to offer. Our blog is a tribute to this incredible cuisine, and we're thrilled to take you on a mouth-watering journey through the land of Maharashtrian delicacies.
                    </p>
                    <p className="text-center m-8">
                        As you step into Food Mania you'll be greeted by a tantalizing display of our featured Maharashtrian recipes. Each dish is carefully crafted, and the images are designed to make your taste buds tingle. Whether you're a seasoned cook or a newbie in the kitchen, there's something here to spark your culinary curiosity.
                    </p>
                </div>
            </section>

        </>
    )
}
