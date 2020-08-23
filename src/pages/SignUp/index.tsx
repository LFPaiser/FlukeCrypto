import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import auth from '@react-native-firebase/auth';
import { Form } from '@unform/mobile';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Title, AuxView, AuxButton, AuxButtonText } from './styles';
// import logoImg from '../../assets/logo.png';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSignUp = useCallback((data: object) => {
    console.log(data);
    auth()
      .createUserWithEmailAndPassword('tobias.dog@gmail.com', 'WoofWoof!')
      .then(() => {
        console.log('User Tobias created');
        navigation.navigate('Dashboard');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          //And then aware user of this
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          //And then aware user of this
        }

        console.error(error);
      });
  }, []);

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
