import React from "react";
import { Container, Button, Card } from "./styles";
import { auth, provider } from "../../services/firebase";

const Login = () => {
  const handleSignIn = async () => {
    await auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Card>
        <div>
          <p>Bem vindo ao</p>
          <h1>ChatWave</h1>
        </div>

        <Button onClick={handleSignIn}>Login com Google</Button>
      </Card>
    </Container>
  );
};

export default Login;
