import React from "react";
import "./style.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { userSlice } from "../../lib/redux";
import { LOGGING_IN } from "../../constant";

export default function MobileLogin() {
  const { setUserAccount, setAccountStatus } = userSlice.actions;
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const account = {
      taiKhoan: values.username,
      matKhau: values.password,
    };

    dispatch(setAccountStatus(LOGGING_IN));
    dispatch(setUserAccount(account));
  };

  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen p-8 transition-all bg-white ">
      <span className="block mt-4 mb-8 mr-auto text-4xl font-medium text-black">
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
