import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { loginCall } from '../api/auth'
import { AuthContext } from '../context/AuthContext'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ececec;
`

const LeftContainer = styled.div`
  width: 35%;
  margin-right: 45px;
`

const WebsiteLogo = styled.div`
  font-size: 60px;
  font-weight: 800;
  color: #1778F2;
`

const WebsiteMessage = styled.div`
  font-size: 24px;
`
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 25px;
  background-color: #fff;
  border-radius: 15px;
  
`

const LoginInput = styled.input`
  border: 1px solid lightgray;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;

  &:focus {
    outline: none;
  }
`

const SignUpButton = styled.button`
  background-color: #00a000;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  width: 70%;
  align-self: center;
`

const LoginButton = styled.button`
  background-color:#1778F2;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  margin-bottom: 30px;
`

const ForgotPassword = styled.div`
  color: #4393f5;
  align-self: center;
  margin-bottom: 30px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const StyledLink = styled(Link)`
  text-align: center;
  width: 100%;
  cursor: pointer;
`

const Login = () => {

  const history = useHistory()
  const { user, isFetching, dispatch } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(user)

  const handleLogin = async (e) => {
    e.preventDefault()
    
    const userCredentials = {
      email,
      password
    }

    try {
      loginCall(userCredentials, dispatch)
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <MainContainer>
      <LeftContainer>
        <WebsiteLogo>Fakebook</WebsiteLogo>
        <WebsiteMessage>Connect with friends and the world around you on Fakebook.</WebsiteMessage>
      </LeftContainer>

      <LoginForm onSubmit={handleLogin}>
        <LoginInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
        <LoginInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
        <LoginButton onClick={handleLogin}>Log In</LoginButton>
        <ForgotPassword>Forgot Password?</ForgotPassword>
        <StyledLink to="/register">
          <SignUpButton>Create a New Account</SignUpButton>
        </StyledLink>
      </LoginForm>
    </MainContainer>
  )
}

export default Login;