import React from "react";
import "./SingupPage.scss";
import Loader from "../../components/Loader/Loader";
import { api_signup } from "../../api_service";
import { Link, useNavigate } from "react-router-dom";

const SingupPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const navigator = useNavigate();

  const signup = async () => {
    if (!email) {
      alert("enter email");
      return;
    }
    if (!phone) {
      alert("enter phone");
      return;
    }
    if (!password) {
      alert("enter password");
      return;
    }
    if (password !== password2) {
      alert("password is diffrent from confirmPassword ");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        email,
        password,
        phone,
        firstName: "string",
        lastName: "string",
        dob: "string",
        socialSecurityNumber: 0,
        sex: "female",
        meritalStatus: "string",
        role: "user",
        deviceToken: "string",
        password: "string",
        linkedIn: "string",
        address: "string",
        is_activated: true,
        is_deleted: false,
      };
      console.log(payload);
      const res = await api_signup(payload);
      console.log(res);
      if (res.isSuccess) {
        alert(res?.message);
        navigator("/login");
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
    <div className="signup__container">
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Responsive Registration Form</h2>
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
                <div class="input_field">
                  <span>
                    <i aria-hidden="true" class="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Re-type Password"
                    required
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                </div>
                <div class="input_field">
                  <span>
                    <i aria-hidden="true" class="fa fa-phone"></i>
                  </span>
                  <input
                    type="text"
                    name="Phone"
                    placeholder="000 000 0000"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                {/* <div class="row clearfix">
                  <div class="col_half">
                    <div class="input_field">
                      <span>
                        <i aria-hidden="true" class="fa fa-user"></i>
                      </span>
                      <input type="text" name="name" placeholder="First Name" />
                    </div>
                  </div>
                  <div class="col_half">
                    <div class="input_field">
                      <span>
                        <i aria-hidden="true" class="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                </div> */}
                {/* <div class="input_field radio_option">
                  <input type="radio" name="radiogroup1" id="rd1" />
                  <label for="rd1">Male</label>
                  <input type="radio" name="radiogroup1" id="rd2" />
                  <label for="rd2">Female</label>
                </div> */}

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
                  onClick={signup}
                  id="submit"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>{loading ? <Loader /> : "Login"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p class="credit">
        Already have an Account ? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default SingupPage;
