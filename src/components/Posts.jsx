import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import styled from 'styled-components'
import axios from 'axios'
import Post from './Post'

const PostsContainer = styled.div`

`

const Posts = ({ postsObj }) => {

  const { user } = useContext(AuthContext)
  const IMAGES_URL = 'http://localhost:8888/images/'

  const [posts, setPosts] = useState([])

  useEffect(() => {

    if (postsObj) {
      return
    }

    console.log('fetching....')

    const fetchFromAPI = async () => {
      const response = await axios.get(`http://localhost:8888/api/posts/timeline/all/${user._id}`)
      console.log(response.data)

      setPosts([...response.data])
    }

    if (user) {
      fetchFromAPI()
    }
  }, [])

  console.log(posts)

  return (
    <PostsContainer>
      {postsObj ? postsObj.map((post) => <Post postObj={post}/>) :
                  posts.map((post) => <Post postObj={post}/>)}
    </PostsContainer>
  )
}

export default Posts;