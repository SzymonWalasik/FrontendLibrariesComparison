import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Modal, Input } from "antd";
import { User } from "../interfaces/interfaces";

const DashboardPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [newRecord, setNewRecord] = useState({ name: "", email: "" });
    const [sortOrder, setSortOrder] = useState("ascend");

    useEffect(() => {
        fetchData();
    }, [sortOrder]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:8080/api/users");
            setData(
                response.data.sort((a: User, b: User) =>
                    sortOrder === "ascend" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
                )
            );
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false);
    };

    const handleAdd = async () => {
        try {
            await axios.post("http://localhost:8080/api/users", newRecord);
            fetchData();
            setVisible(false);
        } catch (error) {
            console.error("Error adding record:", error);
        }
    };

    const columns = [
        { title: "Name", dataIndex: "name", key: "name", sorter: true },
        { title: "Email", dataIndex: "email", key: "email" },
    ];

    return (
        <div>
            <h1>Performance Testing Dashboard</h1>
            <Button onClick={() => setSortOrder(sortOrder === "ascend" ? "descend" : "ascend")}>Sort</Button>
            <Button onClick={() => setVisible(true)}>Add Record</Button>
            <Table columns={columns} dataSource={data} loading={loading} rowKey="id" pagination={{ pageSize: 5 }} />
            <Modal title="Add Record" open={visible} onOk={handleAdd} onCancel={() => setVisible(false)}>
                <Input placeholder="Name" onChange={(e) => setNewRecord({ ...newRecord, name: e.target.value })} />
                <Input placeholder="Email" onChange={(e) => setNewRecord({ ...newRecord, email: e.target.value })} />
            </Modal>
        </div>
    );
};

export default DashboardPage;
