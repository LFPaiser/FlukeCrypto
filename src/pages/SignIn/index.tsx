import React, { useCallback, useRef } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import auth from '@react-native-firebase/auth';

import Input from '../../components/input';
import Button from '../../components/button';
import { Container, Title, AuxButton, AuxButtonText, AuxView } from './styles';
// import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback((data: object) => {
    console.log(data);

    auth()
      .signInWithEmailAndPassword('tobias.dog@gmail.com', 'WoofWoof!')
      .then(() => {
        console.log('Tobias signed in');
        navigation.navigate('Dashboard');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }, []);

  return (
    <ScrollView>
      <Container>
        {/* <Image source={logoImg} /> */}

        <View>
          <Title>Login</Title>
        </View>

        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input name="user" icon="user" placeholder="Username" />
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
            <AuxButton>
              <AuxButtonText>Forgot Password</AuxButtonText>
            </AuxButton>
          </>
          <>
            <AuxButton>
              <AuxButtonText
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                New Account
              </AuxButtonText>
            </AuxButton>
          </>
        </AuxView>
      </Container>
    </ScrollView>
  );
};

export default SignIn;
