import React, { FC, useState } from "react";
import "./login.css";
import { Button, Form, Input, Typography } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { PostLogin } from "../../../API/LoginAPI";
export const Login: FC = () => {
  const { Text, Title } = Typography;
  const navigate = useNavigate();

  const LoginAPI = useMutation({
    mutationFn: (val: any) => PostLogin(val),
    onSuccess: (res: any) => {
      localStorage.setItem("AccessToken", res.data.access_token);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const onFinish = (values: any) => {
    
    const reqBody = {
      country_code: 91,
      mobile_number: 8124380039,
      otp: 255155,
      deviceId:
        "fjmmoz4-RIKV9Y36Q2MtH9:APA91bGXWm82Fw09ZIMS_tJFqT_BXtWUSLoPBvxZut5WnD-…",
    };
    // dispatch(loginCredentials(values))
    // dispatch(login())
    LoginAPI.mutate(reqBody);
  };
  const [validation, setValidation]: any = useState([]);
  const onFinishFailed = (errorInfo: any) => {
    setValidation(["onChange", "onBlur"]);
  };
  const regex = (val: any) => {
    const value =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return value.test(val);
  };

  return (
    <div className="login-block">
      <Title
        className="title"
        style={{
          marginBottom: "3rem",
          textAlign: "center",
          marginTop: 0,
        }}
        level={3}
      >
        Log In
      </Title>
      <Form
        name="basic"
        validateTrigger="onSubmit"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <div style={{ textAlign: "left", marginBottom: "30px" }}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your valid email!",
                type: "email",
              },
            ]}
            validateTrigger={validation}
          >
            <Input
              placeholder="Username"
              suffix={<MailOutlined style={{ color: "grey" }} />}
              className="input"
            />
          </Form.Item>
        </div>
        <div style={{ textAlign: "left" }}>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              () => ({
                validator(_, value) {
                  if (!value || regex(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("should be Uppercase,specialcase and a number")
                  );
                },
              }),
            ]}
            validateTrigger={validation}
          >
            <Input.Password
              placeholder="Password"
              className="input"
              style={{
                border: "none",
                boxShadow: "inset 0 0 0 1px #c8c8c8",
                height: "48px",
                borderRadius: "8px",
              }}
            />
          </Form.Item>
        </div>

        <Text
          style={{
            color: "rgba(1, 174, 154, 1)",
            fontWeight: 300,
            fontSize: "14px",
            marginBottom: "78px",
            textAlign: "right",
          }}
        >
          Forget Password?
        </Text>
        <Form.Item>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button
              style={{
                borderRadius: "8px",
                width: "100%",
                background: "rgba(1, 174, 154, 1)",
                height: "48px",
              }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
