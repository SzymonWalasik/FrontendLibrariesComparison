import { Button, Form, Input, Card, Typography, message } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const { Title } = Typography;

const DelayedFormPage = () => {
    const [loaded, setLoaded] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        setTimeout(() => setLoaded(true), 3000);
    }, []);

    const handleSubmit = async (values: { name: string; email: string }) => {
        try {
            await axios.post("http://localhost:8080/api/users", values);
            message.success("User added successfully!");
            form.resetFields();
        } catch (error) {
            console.error("Error adding user:", error);
            message.error("Failed to add user.");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            {loaded ? (
                <Card style={{ width: 400, textAlign: "center", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                    <Title level={2}>Add New User</Title>
                    <Form layout="vertical" form={form} onFinish={handleSubmit}>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: "Please enter your name!" }]}
                        >
                            <Input placeholder="Enter your name" />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: "Please enter your email!" },
                                { type: "email", message: "Please enter a valid email!" }
                            ]}
                        >
                            <Input placeholder="Enter your email" />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" block>Add User</Button>
                    </Form>
                </Card>
            ) : (
                <Title level={3}>Loading form...</Title>
            )}
        </div>
    );
};

export default DelayedFormPage;
