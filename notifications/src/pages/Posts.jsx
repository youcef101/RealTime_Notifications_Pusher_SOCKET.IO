import React from 'react'
import Post from './Post'
import { posts } from '../dummyData'
import styled from 'styled-components'
const Posts = ({ socket, user }) => {
    return (
        <Container>
            {posts &&
                posts.map(post =>
                    <Post key={Math.random()} post={post} socket={socket} user={user} />
                )}
        </Container>
    )
}

export default Posts
const Container = styled.div`
`