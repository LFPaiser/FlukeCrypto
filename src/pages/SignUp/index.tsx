import React from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Title, AuxView, AuxButton, AuxButtonText } from './styles';
// import logoImg from '../../assets/logo.png';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      {/* <Image source={logoImg} /> */}
      <View>
        <Title>New Account</Title>
      </View>

      <Input name="user" icon="user" placeholder="Username" />
      <Input name="email" icon="at-sign" placeholder="Email" />
      <Input name="passwaord" icon="key" placeholder="Password" />
      <Button
        onPress={() => {
          navigation.navigate('SignIn');
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
