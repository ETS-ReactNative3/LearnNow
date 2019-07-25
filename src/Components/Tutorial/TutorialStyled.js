import styled from "styled-components";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.9);
  position: relative;
`;

export const NextButton = styled.TouchableOpacity`
  background-color: ${props =>
    props.pagePos === 2 ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};
  z-index: ${props => (props.pagePos === 2 ? 1 : -1)};
  position: relative;
  justify-content: center;
  align-items: center;
  height: 60;
`;

export const ButtonText = styled.Text`
  color: #66cefa;
  font-size: 18;
  text-transform: uppercase;
  opacity: ${props => (props.pagePos === 2 ? "1" : "0")};
`;
