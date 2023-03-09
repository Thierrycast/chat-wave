import React from "react";
import { Container, Button } from "./styles";
import {auth, provider } from "../../services/firebase"

const Login = () =>{

    const handleSignIn = () =>{
        auth.signInWithPopup(provider).catch(alert)
    }

    return(
        <Container>
            <Button onClick={handleSignIn} >Login com Google</Button>
        </Container>
    )
}

export default Login