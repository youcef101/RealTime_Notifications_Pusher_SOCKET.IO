import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const Login = ({ setUser }) => {
    const [input, setInput] = useState('')
    const Login = () => {
        setUser(input)
    }
    return (
        <Container>
            <LoginContainer>
                <Input type="text" placeholder='username ...' onChange={(e) => setInput(e.target.value)} />
                <button style={{
                    border: 'none', color: 'white',
                    backgroundColor: 'lightseagreen',
                    padding: '10px 20px', borderRadius: '4px',
                    marginTop: '10px',
                    cursor: 'pointer'
                }} onClick={Login}>LOGIN</button>
            </LoginContainer>
        </Container>
    )
}

export default Login
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width:100vw;
height:100vh;
`
const LoginContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
background-color: white;
height: 50vh;
width:40vw;
`
const Input = styled.input`
width:80%;
padding:5px 5px;
&:focus{
    outline:none;
}
`