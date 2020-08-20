import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  background-color: #f5f5fa;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #504543;
  margin: 64px 0 64px;
`;

export const AuxButton = styled(RectButton)`
  height: 60px;
  margin-top: 8px;
  background: #fbfbff;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const AuxButtonText = styled.Text`
  font-size: 18px;
  color: #504543;
`;

export const AuxView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
