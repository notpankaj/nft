import React from "react";
import "./LoginPage.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { api_login } from "../../api_service";
const LoginPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = async () => {
    try {
      setLoading(true);
      const payload = {
        email,
        password,
      };
      const res = await api_login(payload);
      console.log(res);
      if (res.isSuccess) {
        alert(res?.message);
      }
    } catch (error) {
      alert(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login__container">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            // error
            id="outlined-error"
            label={true ? "Email" : "Error"}
            defaultValue=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <TextField
            // error
            id="outlined-error"
            label={true ? "Password" : "Error"}
            defaultValue=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "grid",
            placeContent: "center",
          }}
        >
          <Button onClick={login} variant="contained">
            {loading ? <Loader /> : "Login"}
          </Button>
        </div>
      </Box>
      <span>
        create new account ? <Link to="/signup">Sign Up</Link>
      </span>
    </div>
  );
};

export default LoginPage;
