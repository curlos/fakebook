import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import styled from 'styled-components'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as timeago from 'timeago.js';
import axios from 'axios';

const PostContainer = styled.div`
  padding: 10px;
  margin: 15px auto;
  border-radius: 10px;
  box-shadow: 0 0 6px #ccc;
`


const PostTop = styled.div`
  display: flex;
  justify-content: space-between;;
  align-items: center;
`

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const UserIcon = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  object-fit: cover;
`

const UserName = styled.div`
  font-weight: 500;
`

const TimePosted = styled.div`
  color: gray;
  font-size: 14px;
`

const PostContent = styled.div`

`

const PostDesc = styled.div`
  margin: 20px auto;
`

const PostImage = styled.img`
  max-height: 500px;
  text-align: center;
`

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`

const LeftFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const LikeButton = styled.img`
  width: 25px;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
  text-decoration: none;
  
`

const Post = ({ postObj }) => {
  const history = useHistory()
  const { user } = useContext(AuthContext)
  const IMAGES_URL = 'http://localhost:8888/images/'

  const [author, setAuthor] = useState({})
  const [post, setPost] = useState({...postObj})

  useEffect(() => {
    const fetchFromAPI = async () => {
      const response = await axios.get(`http://localhost:8888/api/users/${post.userId}`)
      setAuthor(response.data)
    }

    fetchFromAPI()
  }, [])

  const toggleLike = async () => {

    if (!user) {
      history.push('/login')
    }

    console.log(post)
    console.log(user._id)
    const body = { userId: user._id}
    const response = await axios.put(`http://localhost:8888/api/posts/${post._id}/like`, body)
    console.log(response.data)

    setPost(response.data)
  }

  return (
    <PostContainer>
      <PostTop>
        <PostInfo>
          <StyledLink to={`/profile/${author._id}`}>
            <UserIcon src={user.profilePic ? (IMAGES_URL + user.profilePic) : (IMAGES_URL + '/person/noAvatar.png')} />
            <UserName>{author.username}</UserName>
          </StyledLink>
          <TimePosted>{timeago.format(post.createdAt)}</TimePosted>
        </PostInfo>

        <div>
          <MoreVertIcon />
        </div>
      </PostTop>

      <PostContent>
        <PostDesc>{post.desc}</PostDesc>
        {post.img ? <PostImage src={IMAGES_URL + '/person/1.jpeg'} /> : null}
      </PostContent>

      <PostFooter>
        <LeftFooter>
          <LikeButton src={IMAGES_URL + 'like.png'} onClick={toggleLike}/>
          <LikeButton src={IMAGES_URL + 'heart.png'} onClick={toggleLike}/>
          <div>{post.likes.length} people liked it</div>
        </LeftFooter>

        <div>
          {(post.comments && post.comments.length) || 0} comments
        </div>
        
      </PostFooter>
    </PostContainer>
  )
}

export default Post;