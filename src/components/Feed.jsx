import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PostForm from './PostForm'
import Posts from './Posts'

const MainContainer = styled.div`
  flex: 4;
  padding: 20px;
`

const Feed = () => {

  return (
    <MainContainer>
      <PostForm />
      <Posts />
    </MainContainer>
  )
}

export default Feed;