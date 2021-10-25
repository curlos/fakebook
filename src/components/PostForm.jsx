import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import styled from 'styled-components'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import MoodIcon from '@mui/icons-material/Mood';

const FormContainer = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 6px #ccc;
`

const FormText = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 2px solid lightgray;
`

const UserIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`

const Textarea = styled.textarea`
  border: none;
  font-family: Roboto;
  width: 100%;
  resize: none;
  margin-top: 7px;
  margin-left: 10px;

  &:focus {
    outline: none;
  }
`

const FormOptions = styled.div`
  display: flex;
`

const FormOption = styled.div`
  display: flex;
  margin-right: 10px;
`

const FormOptionText = styled.div`
  font-weight: bold;
  color: #525252;
  margin-left: 10px;
`

const ShareButton = styled.button`
  border: none;
  font-weight: bold;
  border-radius: 7px;
  background-color: #00a000;
  color: white;
  padding: 10px;
`

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
`

const PostForm = () => {

  const { user, isFetching, dispatch } = useContext(AuthContext)
  const IMAGES_URL = 'http://localhost:8888/images/'

  return (
    <FormContainer>
      <FormText>
        <UserIcon src={user.profilePic ? (IMAGES_URL + user.profilePic) : (IMAGES_URL + 'person/noAvatar.png')}/>
        <Textarea placeholder="What's on your mind Safak?"/>
      </FormText>
      
      <FormFooter>
        <FormOptions>
          <FormOption>
            <PhotoLibraryIcon />
            <FormOptionText>Photo or Video</FormOptionText>
          </FormOption>

          <FormOption>
            <LabelIcon />
            <FormOptionText>Tag</FormOptionText>
          </FormOption>

          <FormOption>
            <RoomIcon />
            <FormOptionText>Location</FormOptionText>
          </FormOption>

          <FormOption>
            <MoodIcon />
            <FormOptionText>Feelings</FormOptionText>
          </FormOption>
        </FormOptions>

        <ShareButton>Share</ShareButton>
      </FormFooter>
    </FormContainer>
  )
}

export default PostForm;