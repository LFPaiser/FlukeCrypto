import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  margin-top: 24px;
  background: #0ef500;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  color: #504543;
`;
