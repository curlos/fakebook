import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

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
const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 25px;
  background-color: #fff;
  border-radius: 15px;
  
`

const RegisterInput = styled.input`
  border: 1px solid lightgray;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
`

const SignUpButton = styled.button`
  background-color: #1778F2;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`

const LoginButton = styled.button`
  background-color: #00a000;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  width: 70%;
`
const StyledLink = styled(Link)`
  text-align: center;
  width: 100%;
  cursor: pointer;
`

const Register = () => {

  const history = useHistory()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      return
    }
    
    try {
      const newUser = {
        username,
        email,
        password
      }
  
      console.log(newUser)

      const response = await axios.post('http://localhost:8888/api/auth/register', newUser)
      console.log(response.data)

      history.push('/login')
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

      <RegisterForm onSubmit={handleRegister}>
        <RegisterInput type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required/>
        <RegisterInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
        <RegisterInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
        <RegisterInput type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required/>
        <SignUpButton onClick={handleRegister}>Sign Up</SignUpButton>

        <StyledLink to="/login">
          <LoginButton>Log In</LoginButton>
        </StyledLink>
        
      </RegisterForm>
    </MainContainer>
  )
}

export default Register;