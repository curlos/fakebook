import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import styled from 'styled-components'
import axios from 'axios'
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
  height: 150px;
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
  font-size: 24px;
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

const FollowButtonContainer = styled.div`
  
`

const FollowButton = styled.button`
  font-size: 14px;
  background-color: #1778F2;
  color: white;
  border-radius: 10px;
  padding: 10px;
  border: none;
  cursor: pointer;
`

const ProfilePage = () => {

  const { user, isFetching, dispatch } = useContext(AuthContext)
  const { profilePageID } = useParams()

  const [profilePageInfo, setProfilePageInfo] = useState({
    user: {},
    posts: [],
    friends: []
  })

  useEffect(() => {
    const fetchFromAPI = async () => {
      const userResponse = await axios.get(`http://localhost:8888/api/users/${profilePageID}`)
      const postsResponse = await axios.get(`http://localhost:8888/api/posts/all/${profilePageID}`)
      const followersResponse = await axios.get(`http://localhost:8888/api/users/followers/${profilePageID}`)
      
      setProfilePageInfo({
        user: userResponse.data,
        posts: postsResponse.data,
        friends: followersResponse.data,
      })
    }

    fetchFromAPI()
  }, [])

  const toggleFollow = async () => {
    if (!user) {
      return
    }

    const body = { userId: user._id }

    const response = await axios.put(`http://localhost:8888/api/users/${profilePageInfo.user._id}/follow`, body)

    setProfilePageInfo({...profilePageInfo, user: response.data.updatedCurrentUser})

    
  }

  console.log(profilePageInfo.user)

  return (
    <MainContainer>
      <CoverPicture src="/images/post/3.jpeg" />
      <TopContainer>
        <ProfileIcon src="/images/person/1.jpeg" />
        <UserFullName>{profilePageInfo.user.username}</UserFullName>
        <FollowButtonContainer>
          <FollowButton onClick={toggleFollow}>
            {profilePageInfo.user.followers && profilePageInfo.user.followers.includes(user._id) ? 'Follow -' : 'Follow +'}
          </FollowButton>
        </FollowButtonContainer>
        
      </TopContainer>
      <UserPage>
        <LeftContainer>
          <PostForm />
          <Posts postsObj={profilePageInfo.posts}/>
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
                <FriendIcon src="/images/person/1.jpeg" />
                <FriendName>Jacob Wharton</FriendName>
              </Friend>

              <Friend>
                <FriendIcon src="/images/person/1.jpeg" />
                <FriendName>Jacob Wharton</FriendName>
              </Friend>

              <Friend>
                <FriendIcon src="/images/person/1.jpeg" />
                <FriendName>Jacob Wharton</FriendName>
              </Friend>

              <Friend>
                <FriendIcon src="/images/person/1.jpeg" />
                <FriendName>Jacob Wharton</FriendName>
              </Friend>

              <Friend>
                <FriendIcon src="/images/person/1.jpeg" />
                <FriendName>Jacob Wharton</FriendName>
              </Friend>

              <Friend>
                <FriendIcon src="/images/person/1.jpeg" />
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