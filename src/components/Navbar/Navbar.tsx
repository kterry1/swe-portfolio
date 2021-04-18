import React from "react";
import "antd/dist/antd.css";
import { Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256 }}>
        <Button
          className="nav-btn"
          onClick={this.toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
        <Menu
          className="nav-menu"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item
            className="menu-item item-1"
            key="1"
            icon={<PieChartOutlined />}
          >
            Home
          </Menu.Item>
          <Menu.Item
            className="menu-item item-2"
            key="2"
            icon={<DesktopOutlined />}
          >
            Projects
          </Menu.Item>
          <Menu.Item
            className="menu-item item-3"
            key="3"
            icon={<ContainerOutlined />}
          >
            Contact
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
