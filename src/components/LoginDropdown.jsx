import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { AuthContext } from "../Context/AuthContext";
import "../CSS/LoginDropdown.css";

const LoginDropdown = ({ onClose }) => {
  const { login } = useContext(AuthContext);

  const onFinish = (values) => {
    // Gələcəkdə burda backend login request gedə bilər
    login(values.email);
    message.success("Uğurla daxil oldunuz!");
    onClose();
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
            autoComplete="off"
            style={{ height: "40px" }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Şifrəni daxil edin!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Şifrə"
            autoComplete="off"
            style={{ height: "40px" }}
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Yadda saxla</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Daxil ol
          </Button>
        </Form.Item>
      </Form>

      <div className="login-links" style={{ textAlign: "center" }}>
        <a
          href="#!"
          onClick={(e) => {
            e.preventDefault();
            message.info("Şifrəni bərpa etmə funksiyası hazır deyil.");
          }}
        >
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
