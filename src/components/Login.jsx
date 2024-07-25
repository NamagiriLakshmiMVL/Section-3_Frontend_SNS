import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  VStack,
} from "@chakra-ui/react";
import { API } from "../API";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = {
      email,
      password,
    };

    await axios.post(`${API}/users/login`, details).then((res) => {
      res.data.message === "Invalid Credentials"
        ? toast.error("Invalid Credentials", {
            position: "top-center",
            autoClose: 1000,
          })
        : toast.success(res.data.message, {
            position: "top-center",
            autoClose: 1000,
          }) && navigate("/home");
      localStorage.setItem("x-auth-token", res.data.token);
    });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <VStack spacing={"5px"}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="blue"
          width={"100%"}
          style={{ marginTop: 15 }}
          type="submit"
        >
          Login
        </Button>
      </VStack>
    </form>
  );
};

export default Login;
