import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { AuthContext } from "../Context/AuthContext";
import "../CSS/LoginDropdown.css";

const LoginDropdown = ({ onClose }) => {
  const { login } = useContext(AuthContext);

  const onFinish = (values) => {
    login(values.email);  // Adı kontekstə əlavə et
    onClose();            // Dropdown-u bağla
  };

  return (
    <div className="login-dropdown">
      <Form
        name="login_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="login-form"
        style={{ maxWidth: 400, width: "100%" }}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Email daxil edin!" },
            { type: "email", message: "Düzgün email daxil edin!" },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Email"
            style={{ width: "100%", height: "40px" }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Şifrəni daxil edin!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Şifrə"
            style={{ width: "100%", height: "40px" }}
          />
        </Form.Item>

        <Form.Item name="remember" noStyle>
          <Checkbox>Yadda saxla</Checkbox>
        </Form.Item>

        <Form.Item style={{ marginTop: 16 }}>
          <Button type="primary" htmlType="submit" block>
            Daxil ol
          </Button>
        </Form.Item>
      </Form>

      <div className="login-links" style={{ marginTop: 10, textAlign: "center" }}>
        <a href="#!" onClick={() => alert("Şifrəni unutmusunuz?")}>
          Şifrəni unutmusan?
        </a>
        <br />
        <Link to="/registration" onClick={onClose}>
          Qeydiyyatdan keç
        </Link>
      </div>
    </div>
  );
};

export default LoginDropdown;
