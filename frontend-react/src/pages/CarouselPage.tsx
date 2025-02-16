import React from "react";
import { Carousel } from "antd";

const CarouselPage: React.FC = () => {
    return (
        <>
            <h1>Performance Testing Carousel</h1>
            <div style={{ marginLeft: '25%' }}>
                <Carousel autoplay>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/ice.png`} alt="Ice" />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/lightning.png`} alt="Lightning" />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/raindrops.png`} alt="Raindrops" />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/sunset.png`} alt="Sunset" />
                    </div>
                </Carousel>
            </div>
        </>
    );
};

export default CarouselPage;