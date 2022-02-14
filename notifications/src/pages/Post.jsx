import React, { useState } from 'react'
import styled from 'styled-components'

const Post = ({ post, socket, user }) => {
    const [like, setLike] = useState(false)
    const handleLike = () => {
        setLike(true);
        socket && socket.emit('sendLikeNotifications', {
            sender: user,
            receiver: post.username,
            postId: post.id

        })
    }
    const handleRemoveLike = () => {
        setLike(false)
    }

    const handleNotifications = () => {
        socket && socket.emit('sendNotifications', {
            sender: user,
            receiver: post.username,
            postId: post.id,
            content: 'hello there are u ok ?',

        })
    }

    return (
        <Container>
            <PostContainer>
                <Top>
                    <UserImg src={post.userImg} alt='' />

                    <UserPseudo>
                        {post.fullname}
                    </UserPseudo>
                </Top>
                <Middle>
                    <img src={post.postImg} alt='' />
                </Middle>
                <Bottom>
                    <IconContainer>
                        <Left>
                            {!like ?
                                <img src='/images/heart.svg' alt='' onClick={handleLike} />
                                :
                                <img src='/images/heartFilled.svg' alt='' onClick={handleRemoveLike} />
                            }
                            <img src='/images/comment.svg' alt='' onClick={handleNotifications} />
                            <img src='/images/share.svg' alt='' />
                        </Left>
                        <Right>
                            <img src='/images/info.svg' alt='' />
                        </Right>
                    </IconContainer>
                </Bottom>
            </PostContainer>
        </Container>
    )
}

export default Post
const Container = styled.div`
margin-top:3px;
margin-bottom:15px;

`
const PostContainer = styled.div`

`
const Top = styled.div`
display:flex;
align-items:center;
`
const UserImg = styled.img`
width:40px;
height:40px;
border-radius:50%;
object-fit:cover;
margin-right:5px;
cursor:pointer;
`
const UserPseudo = styled.div`
cursor:pointer;
`
const Middle = styled.div`
margin-top:3px;
img{
    width:100%;
    height:30vh;
    //object-fit:contain;
}
`
const Bottom = styled.div`
margin-bottom:5px
`
const IconContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between
`
const Left = styled.div`
display:flex;
align-items:center;
img{
    margin:0px 5px;
    width:15px;
    cursor:pointer;
}
`
const Right = styled.div`
display:flex;
align-items:center;
img{
    margin:0px 5px;
    width:15px;
    cursor:pointer;
}
`