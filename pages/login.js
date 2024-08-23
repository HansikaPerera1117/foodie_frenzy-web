"use client"; // This directive marks the file as a Client Component

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as constant from "../src/util/constants";
import { loginService } from "../src/service/auth";
import Cookies from "js-cookie";
import logo from "../public/assets/images/logo/logo-black.png";
import bgImage from "../public/assets/images/bg/login-bg.jpg";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { customToastMsg, popUploader } from "../src/util/CommonFun";

const SignInPage = () => {
  const [temp, setTemp] = useState({ email: "", password: "" });
  const router = useRouter();
  // const dispatch = useDispatch();

  useEffect(() => {
    document.title = "LogIn | Foodie Frenzy Restaurant";
  }, []);

  const handleInputChange = (fieldName, value) => {
    setTemp((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const validateInputsDetails = () => {
    // Replace this with your own validation logic
    if (!temp.email || !temp.password) {
      alert("Please enter a valid email and password");
    } else {
      login();
    }
  };

  const login = () => {
    // popUploader(dispatch, true);
    loginService(temp)
      .then((res) => {
        if (res.token) {
          Cookies.set(constant.ACCESS_TOKEN, res.token);
          Cookies.set(constant.REFRESH_TOKEN, res.refreshToken);
          Cookies.set(constant.Expire_time, res.tokenExpires);
          Cookies.set(constant.USER_PROFILE, JSON.stringify(res.user));
          window.location.href = "/";
          // popUploader(dispatch, false);
        }
      })
      .catch((c) => {
        // popUploader(dispatch, false);
        customToastMsg(c.message, 0);
      });
  };

  return (
    <div className="sign-in-page">
      <div
        className="loginAuth"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <Row className="d-flex justify-content-end">
          <Col className="" md={6} lg={6} xl={6}>
            <Card className="forgot-card">
              <CardBody>
                <Form className="my-2">
                  <Image
                    src={logo}
                    width={150}
                    height="auto"
                    alt="Picture of the author"
                  />
                  <h1>Welcome back!</h1>
                  <p>
                    We're glad to see you again. Login to access your account
                    and explore what's new!"
                  </p>

                  <FormGroup name="Username" label="Enter your email">
                    <Input
                      type="email"
                      id="email"
                      value={temp.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Enter your email"
                      required
                    />
                  </FormGroup>
                  <FormGroup name="Password" label="Enter your password">
                    <Input
                      type="password"
                      id="password"
                      value={temp.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      placeholder="Enter your password"
                      required
                    />
                  </FormGroup>
                  <div className="mb-3 d-flex flex-row justify-content-between">
                    <span
                      onClick={() => router.push("/forgot-password")}
                      className="btn-forgot"
                    >
                      Forgot Password ?
                    </span>
                    <span> </span>
                  </div>

                  <Row>
                    <Col md={12} className=" d-flex justify-content-end">
                      <Button
                        size="large"
                        className="btn-signin "
                        onClick={validateInputsDetails}
                      >
                        Sign In
                      </Button>
                    </Col>
                  </Row>
                  <Row className="d-flex upper-border justify-content-start">
                    <Col md={12} className="mt-2">
                      <span>
                        Don't Have an Account ?{" "}
                        <span
                          onClick={() => {
                            router.push("/create_account");
                          }}
                          className="text-hint"
                        >
                          Sign Up
                        </span>
                      </span>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignInPage;
