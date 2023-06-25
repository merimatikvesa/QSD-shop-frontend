import React from "react";
import styled from "styled-components";
import LogInImage from "../../images/LogInImage.png";
import "./LogIn.css";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  height: 100vh;
  background-color: rgb(242, 242, 242);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 50px 30px;
  border-radius: 0px 20px 0px 20px;
  background-color: white;
  height: auto;
  width: 500px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid rgb(214, 194, 252);
`;

const EmailInput = styled(Input)`
  width: 90%;
  margin-bottom: 10px;
`;

const PasswordInput = styled(Input)`
  width: 91%;
  margin-bottom: 10px;
`;

const ConfirmPasswordInput = styled(Input)`
  width: 91%;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgb(108, 99, 255, 1);
  opacity: 0.5;
  color: white;
  font-weight: bold;
  margin-top: 10px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Link = styled.a`
  color: rgb(108, 99, 255, 1);
  text-decoration: none;
  font-weight: regular;
`;

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="background">
      <FormContainer>
        <Image src={LogInImage} alt="Couldn't load image" />
        <EmailInput type="email" placeholder="Email" />
        <PasswordInput type="password" placeholder="Password" />
        <Button onClick={() => navigate("/")}>Log in</Button>
        <LinksContainer>
          <Link href="#">Go to SignUp</Link>
          <Link href="#">Forgot password?</Link>
        </LinksContainer>
      </FormContainer>
    </div>
  );
};

export default Login;
