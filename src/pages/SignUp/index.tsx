import React, { useRef } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';

import { Form } from '@unform/mobile';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Title, AuxView, AuxButton, AuxButtonText } from './styles';
// import logoImg from '../../assets/logo.png';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSignUp = (data: object) => {
    console.log(data);
  };

  return (
    <Container>
      {/* <Image source={logoImg} /> */}
      <View>
        <Title>New Account</Title>
      </View>

      <Form ref={formRef} onSubmit={handleSignUp}>
        <Input name="user" icon="user" placeholder="Username" />
        <Input name="email" icon="at-sign" placeholder="Email" />
        <Input name="password" icon="key" placeholder="Password" />
      </Form>

      <Button
        onPress={() => {
          formRef.current?.submitForm();
        }}>
        Go
      </Button>

      <AuxView>
        <>
          <AuxButton
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <AuxButtonText>Back to Login</AuxButtonText>
          </AuxButton>
        </>
      </AuxView>
    </Container>
  );
};

export default SignUp;
