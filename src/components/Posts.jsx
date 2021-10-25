import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Post from './Post'

const PostsContainer = styled.div`

`

const Posts = () => {

  return (
    <PostsContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </PostsContainer>
  )
}

export default Posts;