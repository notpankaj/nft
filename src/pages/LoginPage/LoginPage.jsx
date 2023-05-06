import React from "react";
import "./LoginPage.scss";

import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { api_login } from "../../api_service";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/feature/authSlice";
const LoginPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const fakeLogin = async () => {
    if (!email) {
      alert("enter email");
      return;
    }
    if (!password) {
      alert("enter password");
      return;
    }

    setLoading(true);

    const res = {
      isSuccess: true,
      statusCode: 200,
      data: {
        _id: "641ab85786cad3aa7ca3f6ca",
        email: "admin@gmail.com",
        socialSecurityNumber: 0,
        sex: "",
        meritalStatus: "",
        role: "user",
        location: {
          type: "Point",
          coordinates: [null, null],
        },
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFhYjg1Nzg2Y2FkM2FhN2NhM2Y2Y2EiLCJpYXQiOjE2ODMzODk3MjUsImV4cCI6MTY4MzQyOTMyNX0.U_J184aDy7uOL8vp1xLNby41aZ0TJHOcFhhB_OEDc7w",
        is_activated: true,
        image: "",
        created_at: "2023-03-22T08:12:07.900Z",
        updated_at: "2023-03-22T08:12:07.900Z",
      },
      message: "Login successfuly",
    };

    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "12345678") {
        if (res.isSuccess) {
          alert(res?.message);
          dispatch(loginAction(res?.data));
        } else {
          throw new Error(res?.error || "something went wrong!");
        }
      } else {
        alert("email and password not matched!!!");
      }
      setLoading(false);
    }, 1000);
  };

  const login = async () => {
    if (false) {
      fakeLogin();
      return;
    }

    if (!email) {
      alert("enter email");
      return;
    }
    if (!password) {
      alert("enter password");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        email,
        password,
      };
      console.log(payload);
      const res = await api_login(payload);
      console.log(res);
      if (res.isSuccess) {
        alert(res?.message);
        dispatch(loginAction(res?.data));
      } else {
        throw new Error(res?.error || "something went wrong!");
      }
    } catch (error) {
      alert(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login__container">
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Login Form</h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <form onSubmit={(e) => e.preventDefault()}>
                <div class="input_field">
                  <span>
                    <i aria-hidden="true" class="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="input_field">
                  <span>
                    <i aria-hidden="true" class="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="input_field checkbox_option">
                  <input type="checkbox" id="cb1" />
                  <label for="cb1">I agree with terms and conditions</label>
                </div>
                <div class="input_field checkbox_option">
                  <input type="checkbox" id="cb2" />
                  <label for="cb2">I want to receive the newsletter</label>
                </div>
                <button
                  disabled={loading}
                  onClick={login}
                  id="submit"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>{loading ? <Loader /> : "Register"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p class="credit">
        Don't have an Account ? <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
};

export default LoginPage;
