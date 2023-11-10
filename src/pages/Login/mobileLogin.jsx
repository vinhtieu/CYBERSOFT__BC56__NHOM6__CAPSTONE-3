import React, { useState } from "react";
import "./style.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { userService } from "../../services";
import toast from "react-hot-toast";

export default function MobileLogin() {
  const onFinish = (values) => {
    const user = {
      taiKhoan: values.username,
      matKhau: values.password,
    };

    userService
      .login(user)
      .then((res) => {
        toast.success("Login Successful");
      })
      .catch((err) => {
        toast.error("Incorrect username or password");
      });
  };

  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen transition-all p-8 bg-white ">
      <span className="block mt-4 mb-8 text-4xl font-medium text-black mr-auto">
        Login
      </span>
      <Form
        name="normal_login"
        className="w-full login-form"
        initialValues={{
          remember: false,
          size: "small",
        }}
        onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}>
          <Input
            className="h-14"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="admin321"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}>
          <Input
            className="h-14"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="admin321"
          />
        </Form.Item>
        <Form.Item className="">
          <Form.Item
            name="remember"
            className="mb-0"
            valuePropName="checked"
            style={{ display: "inline-block" }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item className="mb-0" style={{ display: "inline-block" }}>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type=""
            htmlType="submit"
            className="login-form-button text-lg transition-all bg-[#ad3639] hover:bg-[#b73a3e] text-white w-full h-12">
            Login
          </Button>
        </Form.Item>
      </Form>
      <span className="mt-auto">
        Don't have an account? &nbsp;
        <a
          className="transition-all text-[#ad3639] hover:text-[#b73a3e]"
          href="/">
          Register
        </a>
      </span>
    </div>
  );
}
