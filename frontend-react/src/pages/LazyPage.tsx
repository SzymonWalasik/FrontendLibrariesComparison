import { useEffect, useState } from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

const LazyPage = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 3000);
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            {show ? (
                <Card
                    style={{
                        width: 500,
                        textAlign: "center",
                        backgroundColor: "#1677ff",
                        color: "white",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        opacity: show ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out"
                    }}
                >
                    <Title level={2} style={{ color: "white" }}>Lazy Loaded Section</Title>
                </Card>
            ) : (
                <Title level={3}>Loading section...</Title>
            )}
        </div>
    );
};

export default LazyPage;
