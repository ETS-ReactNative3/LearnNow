import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
`;

export const OptionView = styled.View`
  width: ${props => props.width};
  height: 50;
  flex-flow: row;
`;

export const SearchView = styled.View`
  width: ${props => props.width};
  border: 1px solid #dadada;
  flex-flow: row;
`;

export const SearchBox = styled.TextInput`
  flex: 2;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  font-size: 16;
`;

export const SearchButton = styled.TouchableOpacity`
  height: 50;
  width: ${props => props.width / 4};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: #0494c4;
`;

export const ButtonText = styled.Text`
  justify-content: center;
  align-items: center;
  color: ghostwhite;
  text-transform: uppercase;
`;
