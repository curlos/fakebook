import styled from 'styled-components'

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
  align-self: center;
`

const Register = () => {

  return (
    <MainContainer>
      <LeftContainer>
        <WebsiteLogo>Fakebook</WebsiteLogo>
        <WebsiteMessage>Connect with friends and the world around you on Fakebook.</WebsiteMessage>
      </LeftContainer>

      <RegisterForm>
        <RegisterInput type="text" placeholder="Username" required/>
        <RegisterInput type="email" placeholder="Email" required/>
        <RegisterInput type="password" placeholder="Password" required/>
        <RegisterInput type="password" placeholder="Confirm Password" required/>
        <SignUpButton>Sign Up</SignUpButton>
        <LoginButton>Log In</LoginButton>
      </RegisterForm>
    </MainContainer>
  )
}

export default Register;