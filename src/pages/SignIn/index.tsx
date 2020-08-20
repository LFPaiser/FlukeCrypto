import React from 'react';
// import { Image } from 'react-native';

import Input from '../../components/input';
import Button from '../../components/button';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, AuxButton, AuxButtonText, AuxView } from './styles';
// import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      {/* <Image source={logoImg} /> */}

      <View>
        <Title>Login</Title>
      </View>

      <Input name="user" icon="user" placeholder="Username" />
      <Input name="passwaord" icon="key" placeholder="Password" />
      <Button
        onPress={() => {
          navigation.navigate('SignUp');
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
  );
};

export default SignIn;
