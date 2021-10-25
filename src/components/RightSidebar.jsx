import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import OnlineFriends from './OnlineFriends'

const MainContainer = styled.div`
  flex: 2;
  padding: 15px;
`

const BirthdayNotification = styled.div`
  display: flex;
  align-items: center;
`

const BirthdayIcon = styled.img`
  width: 32px;
  margin-right: 12px;
`

const Advertisement = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 30px auto;
`

const RightSidebar = () => {

  return (
    <MainContainer>
      <BirthdayNotification>
        <BirthdayIcon src="/images/gift.png" />
        <div><strong>Pola Foster</strong> and <strong>3 other friends</strong> have a birthday today.</div>
      </BirthdayNotification>

      <Advertisement src="/images/ad.png" />
      <OnlineFriends />

    </MainContainer>
  )
}

export default RightSidebar;