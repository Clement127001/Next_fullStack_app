import axios from "axios";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
import { Button, Card, TextField, Typography } from "@mui/material";
import { userState } from "@/store/atoms/user";
import { BASE_URL } from "@/config";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const setUser = useSetRecoilState(userState);

  const handleSignIn = async () => {
    const res = await axios.post(
      `${BASE_URL}/admin/login`,
      {
        username: email,
        password: password,
      },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = res.data;
    localStorage.setItem("token", data.token);
    setUser({
      userEmail: email,
      isLoading: false,
    });
    router.push("/courses");
  };

  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h6"}>
          Welcome to Coursera. Sign up below
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth={true}
            label="Email"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth={true}
            label="Password"
            variant="outlined"
            type={"password"}
          />
          <br />
          <br />
          <Button size={"large"} variant="contained" onClick={handleSignIn}>
            Signin
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
