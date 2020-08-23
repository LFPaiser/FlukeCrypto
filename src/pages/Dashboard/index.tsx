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

  const handleSignOut = (dog) => {
    auth()
      .signOut()
      .then(() => {
        console.log('Tobias signed out');
        navigation.navigate('SignIn');
      });
  };

  return (
    <ScrollView>
      <Container>
        {/* <Image source={logoImg} /> */}

        <View>
          <Title>Login</Title>
        </View>

        <Form
          ref={formRef}
          onSubmit={() => {
            console.log('Ok');
          }}>
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
              <AuxButtonText
                onPress={() => {
                  handleSignOut('tobias.dog@gmail.com');
                }}>
                Sair
              </AuxButtonText>
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
