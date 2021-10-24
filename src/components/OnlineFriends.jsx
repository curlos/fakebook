import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`

`

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`

const Friend = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 15px;
`

const FriendIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

const OnlineIcon = styled.div`
  width: 15px;
  height: 15px;
  position: relative;
  left: -12px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background-color: #31e731;
`

const FriendName = styled.div`
  margin-left: 4px;
`

const IconContainer = styled.div`
  display: flex;
`

const RightSidebar = () => {

  return (
    <MainContainer>
      <Title>Online Friends</Title>
      <Friend>
        <IconContainer>
          <FriendIcon src="/assets/person/1.jpeg"/>
          <OnlineIcon />
        </IconContainer>
        <FriendName>Safak Kocaoglu</FriendName>
      </Friend>

      <Friend>
        <IconContainer>
          <FriendIcon src="/assets/person/1.jpeg"/>
          <OnlineIcon />
        </IconContainer>
        <FriendName>Safak Kocaoglu</FriendName>
      </Friend>

      <Friend>
        <IconContainer>
          <FriendIcon src="/assets/person/1.jpeg"/>
          <OnlineIcon />
        </IconContainer>
        <FriendName>Safak Kocaoglu</FriendName>
      </Friend>

    </MainContainer>
  )
}

export default RightSidebar;