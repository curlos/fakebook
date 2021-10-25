import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 15px;
  color: #ffffff;
  background-color: #1778F2;
`

const HeaderLogo = styled.div`
  flex: 3;
  font-size: 24px;
  font-weight: bold;
`

const MiddleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 5;
`

const RightHeader = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 30px;
`

const SearchBarWithIcon = styled.div`
  display: flex;
  flex: 5;
  width: 100%;
  border: none;
  border-radius: 20px;
  padding: 10px;
  background-color: #ffffff;
  margin-right: 10px;
`

const SearchBar = styled.input`
  flex: 5;
  width: 100%;
  border: none;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`

const Icons = styled.div`
  display: flex;
  margin-right: 30%;

`

const IconContainer = styled.div`
  margin-right: 15px;
`

const IconNotification = styled.div`
  width: 12px;
  height: 12px;
  font-size: 11px;
  text-align: center;
  background-color: red;
  border-radius: 50%;
  position: relative;
  top: 10px;
  left: 15px;
`

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  object-fit: cover;
`

const SearchBarStyle = {
  "color": "gray"
}

const Header = () => {

  const { user, isFetching, dispatch } = useContext(AuthContext)
  const IMAGES_URL = 'http://localhost:8888/images/'

  console.log(user)

  return (
    <HeaderContainer>
      <HeaderLogo>Fakebook</HeaderLogo>
      <MiddleHeader>
        <SearchBarWithIcon>
          <SearchIcon style={SearchBarStyle}/>
          <SearchBar type="text" placeholder="Search for friend, post or video"></SearchBar>
        </SearchBarWithIcon>
        <div>Homepage Hello {user && user.username}</div>
        <div>Timeline</div>
      </MiddleHeader>
      

      <RightHeader>
        <Icons>
          <IconContainer>
            <IconNotification>1</IconNotification>
            <PersonIcon />
          </IconContainer>

          <IconContainer>
          <IconNotification>1</IconNotification>
            <MessageIcon />
          </IconContainer>

          <IconContainer>
            <IconNotification>1</IconNotification>
            <NotificationsIcon />
          </IconContainer>
        </Icons>

        <ProfilePic src={user.profilePic ? (IMAGES_URL + user.profilePic) : (IMAGES_URL + 'person/noAvatar.png')}></ProfilePic>
        
      </RightHeader>
    </HeaderContainer>
  )
}

export default Header;