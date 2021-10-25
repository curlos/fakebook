import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PostForm from './PostForm'
import Posts from './Posts'

const MainContainer = styled.div`
  flex: 4;
  padding: 20px;
`
const CoverPicture = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 200px;
`

const TopContainer = styled.div`
  text-align: center;
  position: relative;
  top: -110px;
  height: 120px;
`

const ProfileIcon = styled.img`
  object-fit: cover;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 2px solid #fff;
`

const UserFullName = styled.div`
  font-weight: bold;
  font-size: 20px;
`

const UserPage = styled.div`
  display: flex;
  justify-content: space-between;
`

const UserInfo = styled.div`
  color: gray;
  margin-bottom: 20px;
`

const UserTitle = styled.div`
  color: black;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 7px;
`

const LeftContainer = styled.div`
  flex: 3;
`

const RightContainer = styled.div`
  flex: 2;
  margin-left: 20px;
`

const UserFriends = styled.div`

`

const FriendList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`

const Friend = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
`

const FriendIcon = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  object-fit: cover;
`

const FriendName = styled.div`
  max-width: 100px;
  margin-top: 5px;
`

const ProfilePage = () => {

  return (
    <MainContainer>
      <CoverPicture src="/assets/post/3.jpeg" />
      <TopContainer>
        <ProfileIcon src="/assets/person/1.jpeg" />
        <UserFullName>Safak Kocaoglu</UserFullName>
      </TopContainer>
      <UserPage>
        <LeftContainer>
          <PostForm />
          <Posts fromProfilePage={true}/>
        </LeftContainer>

        <RightContainer>
          <UserInfo>
            <UserTitle>User information</UserTitle>
            <div><strong>City:</strong> New York</div>
            <div><strong>From:</strong> Roma</div>
            <div><strong>City:</strong> Single</div>
          </UserInfo>

          <UserFriends>
            <UserTitle>User friends</UserTitle>
            <FriendList>
              <Friend>
                <FriendIcon src="/assets/person/1.jpeg" />
                <FriendName>Jacob Wharton</FriendName>
              </Friend>

              <Friend>
                <FriendIcon src="/assets/person/1.jpeg" />
                <FriendName>Jacob Wharton</FriendName>
              </Friend>

              <Friend>
                <FriendIcon src="/assets/person/1.jpeg" />
                <FriendName>Jacob Wharton</FriendName>
              </Friend>

              <Friend>
                <FriendIcon src="/assets/person/1.jpeg" />
                <FriendName>Jacob Wharton</FriendName>
              </Friend>

              <Friend>
                <FriendIcon src="/assets/person/1.jpeg" />
                <FriendName>Jacob Wharton</FriendName>
              </Friend>

              <Friend>
                <FriendIcon src="/assets/person/1.jpeg" />
                <FriendName>Jacob Wharton</FriendName>
              </Friend>
            </FriendList>
          </UserFriends>
        </RightContainer>
      </UserPage>
    </MainContainer>
  )
}

export default ProfilePage;