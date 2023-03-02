import React, { useEffect, useState } from "react";
import { Form, useLocation } from "react-router-dom";
import { loginUser } from "../../components/api";
import { useNavigate } from "react-router-dom";
import { useActionData } from "react-router-dom";
import { useNavigation } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return data;
  } catch (error) {
    return {
      error: error.message,
    };
  }
}

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = useActionData();
  const navigation = useNavigation();

  const from = location.status?.from || "/host";

  useEffect(() => {
    if (data?.token) {
      navigate(from, { replace: true });
    }
  }, [data]);

  return (
    <div
      className="login-container"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {location.state ? (
        <h3 style={{ color: "red" }}>{location.state.message}</h3>
      ) : (
        ""
      )}
      <h1>Sign in to your account</h1>

      {data?.error && (
        <h3 style={{ color: "red", margin: "1rem" }}>{data.error}</h3>
      )}
      <Form
        action="/login"
        method="post"
        className="login-form"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          margin: "1rem",
        }}
      >
        <input
          style={{
            padding: "10px",
            borderRadius: "10px",
            fontSize: "1.2rem",
          }}
          name="email"
          type="email"
          placeholder="Email address"
          value="b@b.com"
        />
        <input
          style={{
            padding: "10px",
            borderRadius: "10px",
            fontSize: "1.2rem",
          }}
          name="password"
          type="password"
          placeholder="Password"
          value="p123"
        />

        <button
          style={{
            backgroundColor: `${
              navigation.state === "submitting" ? "#AAAAAA" : ""
            }`,
            cursor: `${navigation.state === "submitting" ? "not-allowed" : ""}`,
          }}
          className="Btn"
        >
          {navigation.state === "submitting" ? "Logging in ..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
