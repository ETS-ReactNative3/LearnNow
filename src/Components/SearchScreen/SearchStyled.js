import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
`;

export const OptionView = styled.View`
  width: ${props => props.width};
  height: 50;
  flex-flow: row;
  align-items: center;
`;

export const IOSPickerView = styled.View`
  width: ${props => props.width / 2};
  height: 50;
  border-bottom-width: 1px;
  border-right-width: ${props => (props.right ? "1px" : "0px")};
  border-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  position: relative;
  background-color: transparent;
`;

export const IOSPickerImg = styled.Image`
  width: 10;
  height: 10;
  position: absolute;
  margin: 0 auto;
  right: 10px;
  top: 20px;
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
