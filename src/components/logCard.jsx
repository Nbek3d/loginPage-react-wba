import React from 'react';
import { Container, HeadText, Input, Button, Context, LogCard, Wrapper,Form ,Avatar} from './style';

const LoginCard = () => {
  return (
      <LogCard>
      <Container>
        <HeadText>SIGN UP</HeadText>
        <Form>
          <Context>Email</Context>
          <Input type='text' placeholder='Your email...'></Input>
        </Form>
        <Form>
          <Context>Password</Context>
          <Input type='text' placeholder='Password...'></Input>
          <Button>Sign Up</Button>
          <Wrapper>
            <Avatar color='red'>G</Avatar>
            <Avatar color='blue'>F</Avatar>
            <Avatar color='blue'>in</Avatar>
          </Wrapper>
        </Form>
      </Container>
    </LogCard>
  )
}

export default LoginCard
