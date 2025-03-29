import React, { useState } from "react";
import { Upload, Button, Modal, Row, Col, UploadFile, message } from "antd";
import { PlusOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const API_URL = "http://localhost:8080/api/gallery";

const GalleryPage: React.FC = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [imageList, setImageList] = useState<{ id: number; filename: string; content: string }[]>([]);
    const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);
    const [previewVisible, setPreviewVisible] = useState<boolean>(false);

    const handleUpload = async () => {
        const formData = new FormData();
        fileList.forEach(file => {
            if (file.originFileObj) {
                formData.append("file", file.originFileObj);
            }
        });

        try {
            await axios.post(`${API_URL}/upload`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            message.success("Images uploaded successfully");
            setFileList([]);
        } catch (error) {
            console.error("Failed upload:", error);
            message.error("Failed uploading images.");
        }
    };

    const handleFetchImages = async () => {
        try {
            const response = await axios.get<{ id: number; filename: string; content: string }[]>(`${API_URL}/all`);
            setImageList(response.data);
        } catch (error) {
            console.error("Failed fetching images:", error);
            message.error("Failed fetching images.");
        }
    };

    const handlePreview = (file: UploadFile) => {
        if (file.url) {
            setPreviewImage(file.url);
        } else if (file.originFileObj) {
            setPreviewImage(URL.createObjectURL(file.originFileObj));
        }
        setPreviewVisible(true);
    };

    const handleDeleteImage = async (id: number) => {
        try {
            if (id) {
                await axios.delete(`${API_URL}/delete/${id}`);
                message.success("Deleted image.");
                setImageList(prev => prev.filter(img => img.id !== id));
            } else {
                console.error("No id provided for delete operation");
                message.error("Failed deleting image. Invalid ID.");
            }
        } catch (error) {
            console.error("Failed deleting image:", error);
            message.error("Failed deleting image.");
        }
    };


    return (
        <div style={{ padding: 20 }}>
            <Row gutter={16} align="middle" style={{ marginBottom: 20 }}>
                <Col>
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={({ fileList }) => setFileList(fileList)}
                        beforeUpload={() => false}
                    >
                        {fileList.length >= 8 ? null : (
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Add image</div>
                            </div>
                        )}
                    </Upload>
                </Col>
                <Col>
                    <Button type="primary" icon={<UploadOutlined />} onClick={handleUpload}>
                        Save images
                    </Button>
                </Col>
                <Col>
                    <Button type="default" onClick={handleFetchImages}>
                        Show all images
                    </Button>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                {imageList.map(({ id, filename, content }) => (
                    <Col key={id}>
                        <div style={{ position: "relative" }}>
                            <img
                                src={`data:${content};base64,${content}`}
                                alt={filename}
                                style={{ width: 200, height: 200, objectFit: "cover", borderRadius: 5 }}
                            />
                            <Button
                                type="text"
                                icon={<DeleteOutlined />}
                                danger
                                onClick={() => handleDeleteImage(id)}
                                style={{
                                    position: "absolute",
                                    top: 5,
                                    right: 5,
                                    background: "rgba(255,255,255,0.7)",
                                    borderRadius: "50%"
                                }}
                            />
                        </div>
                    </Col>
                ))}
            </Row>

            <Modal
                open={previewVisible}
                footer={null}
                onCancel={() => setPreviewVisible(false)}
            >
                {previewImage && <img alt="Preview" style={{ width: "100%" }} src={previewImage} />}
            </Modal>
        </div>
    );
};

export default GalleryPage;
