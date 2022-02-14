import React from 'react'
import styled from 'styled-components'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import { useState } from 'react';
import { useEffect } from 'react';


const Header = ({ setNotifications, notificaions, setMessages, messages, user, nots, msgNots }) => {

    const [NotNumber, setNotNumber] = useState(0)
    const [MsgNumber, setMsgNumber] = useState(0)
    useEffect(() => {
        setNotNumber(nots?.length)
        setMsgNumber(msgNots?.length)
    }, [nots, msgNots])
    return (
        <Container>
            <HeaderContainer>
                <Left>
                    <Logo>CHAT</Logo>
                </Left>
                <Right>

                    <IconContainer onClick={() => {
                        setMessages(false)
                        setNotifications(!notificaions)
                        setNotNumber(0)
                    }}>
                        <NotificationsNoneIcon fontSize='small' />
                        {nots ? <Badge NotNumber={NotNumber}>{NotNumber}</Badge> : null}
                    </IconContainer>


                    <IconContainer onClick={() => {
                        setNotifications(false)
                        setMessages(!messages)
                        setMsgNumber(0)
                    }}>
                        <MailOutlineIcon fontSize='small' />
                        {msgNots ? <Badge MsgNumber={MsgNumber}>{MsgNumber}</Badge> : null}
                    </IconContainer>
                    <IconContainer>
                        <SettingsIcon fontSize='small' />

                    </IconContainer>
                    <UserContainer>
                        {user}
                    </UserContainer>
                </Right>
            </HeaderContainer>
        </Container>
    )
}

export default Header
const Container = styled.div`
height:50px;
background-color:lightseagreen;
display:flex;
align-items:center;
`
const HeaderContainer = styled.div`
width:100%;
margin:0px 10px;
display:flex;
align-items:center;
justify-content:space-between;
`
const Left = styled.div``
const Logo = styled.h1`
color:white;
`
const Right = styled.div`
display:flex;
align-items:center;

`
const IconContainer = styled.div`
color:white;
cursor:pointer;
margin:0px 7px;
display:flex;
align-items:center;

`
const Badge = styled.div`
width:15px;
height:15px;
border-radius:50%;
background-color:red;
color:white;
display:${props => props?.NotNumber !== 0 && props?.MsgNumber !== 0 ? 'flex' : 'none'};
align-items:center;
justify-content:center;
font-size:12px;
margin-left:-7px;
margin-top:-10px;
`
const UserContainer = styled.span`
text-transform:uppercase;
display:flex;
align-items:center;
color:white;
font-weight:600;
`
