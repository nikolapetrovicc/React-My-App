import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import axios from 'axios';

const Container = styled.div``

const Form = styled.form`
padding: 10px;
`

const Label = styled.label`
`

const Input = styled.input`
margin-left: 10px;
padding: 5px;
`

const Button = styled.button`
background-color: teal;
padding: 10px;
color: white;
border: none;
border-radius: 10px;
font-size: 1rem;
&:hover{
    background-color: white;
    border: 0.2px solid teal;
    color: teal;
}
`


const Example = () => {
    const [location, setLocation] = useState("Brace Radovanovica 21");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("Number");
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((result) => {
                setUsers(result.data);
                //console.log(result.data);
            }).catch(() => {
                console.log("Greska");
            })

    }, [])

    return (
        <Container>
            <Form>
                <Label htmlFor="location">
                    Lokacija
                    <Input value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </Label>
            </Form>
            <Button onClick={() => setLocation("Kraljevo")}>
                Promeni me
            </Button>
            {users.map((user) => (<h3 onClick={() => console.log('Kliknuo si na usera')} key={user.id}>{user.name}</h3>))}
            
        </Container >
    )
}

export default Example
