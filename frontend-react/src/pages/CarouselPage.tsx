import React from "react";
import { Carousel } from "antd";

const CarouselPage: React.FC = () => {
    return (
        <div style={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
            <h1>Performance Testing Carousel</h1>
            <Carousel autoplay>
                <div>
                    <img src="https://source.unsplash.com/800x400/?nature,water" alt="Nature Water" style={{ width: "100%" }} />
                </div>
                <div>
                    <img src="https://source.unsplash.com/800x400/?city,night" alt="City Night" style={{ width: "100%" }} />
                </div>
                <div>
                    <img src="https://source.unsplash.com/800x400/?mountains,snow" alt="Mountains Snow" style={{ width: "100%" }} />
                </div>
                <div>
                    <img src="https://source.unsplash.com/800x400/?forest,path" alt="Forest Path" style={{ width: "100%" }} />
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselPage;