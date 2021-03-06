import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';


const MainContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
  max-height: 100%;
  padding: 20px;
`

const CategoriesContainer = styled.div`
  border-bottom: 2px solid lightgray;
  padding-bottom: 20px;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 15px;
`

const IconDesc = styled.div`
  margin-left: 15px;
`

const ShowMoreButton = styled.button`
  background-color: #e7e7e7;
  border: none;
  color: #4b4b4b;
  padding: 10px 30px;
  border-radius: 5px;
`

const AllFriendsContainer = styled.div`
  padding-top: 20px;
`

const Friend = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 15px;
`

const FriendIcon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`

const FriendName = styled.div`
  margin-left: 10px;
`

const LeftSidebar = () => {

  return (
    <MainContainer>
      <CategoriesContainer>
        {categories.map((category) => {
          return (
            <IconContainer>
              {category.getIcon()}
              <IconDesc>{category.name}</IconDesc>
            </IconContainer>
          )
        })}

        <ShowMoreButton>Show More</ShowMoreButton>
      </CategoriesContainer>

      <AllFriendsContainer>
        <Friend>
          <FriendIcon src="/images/person/1.jpeg"/>
          <FriendName>Safak Kocaoglu</FriendName>
        </Friend>

        <Friend>
          <FriendIcon src="/images/person/1.jpeg"/>
          <FriendName>Safak Kocaoglu</FriendName>
        </Friend>

        <Friend>
          <FriendIcon src="/images/person/1.jpeg"/>
          <FriendName>Safak Kocaoglu</FriendName>
        </Friend>

        <Friend>
          <FriendIcon src="/images/person/1.jpeg"/>
          <FriendName>Safak Kocaoglu</FriendName>
        </Friend>

        <Friend>
          <FriendIcon src="/images/person/1.jpeg"/>
          <FriendName>Safak Kocaoglu</FriendName>
        </Friend>

        <Friend>
          <FriendIcon src="/images/person/1.jpeg"/>
          <FriendName>Safak Kocaoglu</FriendName>
        </Friend>

        <Friend>
          <FriendIcon src="/images/person/1.jpeg"/>
          <FriendName>Safak Kocaoglu</FriendName>
        </Friend>

        <Friend>
          <FriendIcon src="/images/person/1.jpeg"/>
          <FriendName>Safak Kocaoglu</FriendName>
        </Friend>

        <Friend>
          <FriendIcon src="/images/person/1.jpeg"/>
          <FriendName>Safak Kocaoglu</FriendName>
        </Friend>
      </AllFriendsContainer>


    </MainContainer>
  )
}

const categories = [
  {
    name: 'Feed',
    getIcon: () => <RssFeedIcon />,
  },
  {
    name: 'Chats',
    getIcon: () => <ChatIcon />,
  },
  {
    name: 'Videos',
    getIcon: () => <PlayCircleIcon />,
  },
  {
    name: 'Groups',
    getIcon: () => <PeopleAltIcon />,
  },
  {
    name: 'Bookmarks',
    getIcon: () => <BookmarkIcon />,
  },
  {
    name: 'Questions',
    getIcon: () => <HelpOutlineIcon />,
  },
  {
    name: 'Jobs',
    getIcon: () => <WorkIcon />,
  },
  {
    name: 'Events',
    getIcon: () => <EventIcon />,
  },
  {
    name: 'Courses',
    getIcon: () => <SchoolIcon />,
  },
]



export default LeftSidebar;