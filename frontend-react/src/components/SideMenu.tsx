import React from "react";
import { Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const { Sider } = Layout;

const SideMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            {!collapsed && (
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1">
                        <Link to="/">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/carousel">Carousel</Link>
                    </Menu.Item>
                </Menu>
            )}
        </Sider>
    );
};

export default SideMenu;