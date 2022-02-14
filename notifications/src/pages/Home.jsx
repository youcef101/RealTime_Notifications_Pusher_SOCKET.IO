import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Posts from './Posts'
import { io } from "socket.io-client";

const Home = ({ user }) => {
    const [notificaions, setNotifications] = useState(false)
    const [messages, setMessages] = useState(false)
    const [socket, setSocket] = useState(null)
    const [nots, setNots] = useState([])
    const [msgNots, setMsgNots] = useState([])

    useEffect(() => {
        setSocket(io("http://localhost:8001"));
    }, [])

    useEffect(() => {
        socket && socket.emit('newUser', user);
    }, [socket, user])

    useEffect(() => {
        socket?.on('sendLikeNotificationsBack', data => {
            console.log(data)
            setNots(prev => [
                ...prev,
                data]
            )
        })
    }, [socket])

    useEffect(() => {
        socket?.on('sendNotificationsBack', data => {
            console.log(data)
            setMsgNots(prev => [
                ...prev,
                data]
            )
        })
    }, [socket])
    console.log(nots)
    return (
        <Container>
            <HomeContainer>
                <Header
                    notificaions={notificaions}
                    setNotifications={setNotifications}
                    messages={messages}
                    setMessages={setMessages}
                    user={user}
                    nots={nots}
                    setMsgNots={setMsgNots}
                    msgNots={msgNots}
                />

                {notificaions &&
                    <NotContainer>
                        <Items>
                            {nots && nots.map(not =>
                                <Item key={Math.random()}>
                                    <UserImg src='/images/my-image2.png' alt='' />
                                    <Info><b>{not.sender}</b>liked your post have id {not.postId}</Info>
                                </Item>
                            )}

                        </Items>
                    </NotContainer>
                }
                {messages &&
                    <MsgContainer>
                        <Items>
                            {msgNots &&
                                msgNots.map(msg =>
                                    <Item>
                                        <UserImg src='/images/my-image2.png' alt='' />
                                        <Info><b>{msg.sender} : </b>{msg.content}</Info>
                                    </Item>
                                )}
                        </Items>
                    </MsgContainer>
                }
                <Posts socket={socket} user={user} />
            </HomeContainer>
        </Container>
    )
}

export default Home
const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
overflow-x:hidden;

`
const HomeContainer = styled.div`
background-color:white;
width:25vw;
height:92vh;
border:1px solid gray;
border-radius:5px;
position:relative;
overflow:scroll;
::-webkit-scrollbar {
  width: 0px;
  
};
::-webkit-scrollbar-thumb {
 display:none
}
`
const NotContainer = styled.div`
width:100%;
display:flex;
justify-content:flex-end;
position:absolute;
`
const Items = styled.div`
width:55%;
padding:15px 5px;
background-color:white;
-webkit-box-shadow: 1px 2px 6px -1px #000000; 
box-shadow: 1px 2px 6px -1px #000000;
`
const Item = styled.div`
display:flex;
align-items:center;
&:hover{
    background-color: #f2f2f2;
};
cursor:pointer;
`
const UserImg = styled.img`
width:40px;
height;35px;
padding:5px 5px;
`
const Info = styled.div``
const MsgContainer = styled(NotContainer)``