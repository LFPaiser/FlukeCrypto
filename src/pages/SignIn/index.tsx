import React, { useCallback, useRef } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import Input from '../../components/input';
import Button from '../../components/button';
import { Container, Title, AuxButton, AuxButtonText, AuxView } from './styles';
// import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
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
