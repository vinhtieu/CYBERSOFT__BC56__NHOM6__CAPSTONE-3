import React, { useState } from "react";
import "./style.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

export default function LoginPage() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-50"></div>

      <div className="absolute z-10 flex flex-col items-center justify-start w-1/5 p-8 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md h-2/4 top-1/2 left-1/2">
        <span className="block mt-4 mb-20 text-5xl font-medium">Login</span>
        <Form
          name="normal_login"
          className="w-4/5 login-form"
          initialValues={{
            remember: false,
            size: "large",
          }}
          size="large"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              className="h-12"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              className="h-12"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item className="">
            <Form.Item
              name="remember"
              className="mb-0"
              valuePropName="checked"
              style={{ display: "inline-block" }}
            >
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
              className="login-form-button transition-all bg-[#ad3639] hover:bg-[#b73a3e] text-white w-full h-12"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        <span className="mt-auto">
          Don't have an account?
          <a
            className="transition-all text-[#ad3639] hover:text-[#b73a3e]"
            href="/register"
          >
            Register
          </a>
        </span>
      </div>

      <figure className="z-0 w-full h-full ">
        <img
          src="src\assets\background.avif"
          alt=""
          className="object-cover w-full h-full"
        />
      </figure>
    </div>
  );
}
