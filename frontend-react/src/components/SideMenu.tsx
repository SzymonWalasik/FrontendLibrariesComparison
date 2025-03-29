import React from "react";
import { Layout, Menu } from "antd";
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
                    <Menu.Item key="3">
                        <Link to="/lazy">Lazy</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/delay">Delayed form</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/gallery">Gallery</Link>
                    </Menu.Item>
                </Menu>
            )}
        </Sider>
    );
};

export default SideMenu;