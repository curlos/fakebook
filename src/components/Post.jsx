import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

const Post = () => {

  return (
    <PostContainer>
      <PostTop>
        <PostInfo>
          <UserIcon src="/images/person/1.jpeg" />
          <UserName>Alex Durden</UserName>
          <TimePosted>1 hour ago</TimePosted>
        </PostInfo>

        <div>
          <MoreVertIcon />
        </div>
      </PostTop>

      <PostContent>
        <PostDesc>Every moment is a fresh beginning.</PostDesc>
        <PostImage src="/images/post/1.jpeg" />
      </PostContent>

      <PostFooter>
        <LeftFooter>
          <LikeButton src="/images/like.png" />
          <LikeButton src="/images/heart.png" />
          <div>62 people liked it</div>
        </LeftFooter>

        <div>
          2 comments
        </div>
        
      </PostFooter>
    </PostContainer>
  )
}

export default Post;