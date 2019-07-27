import styled from "styled-components";

export const Container = styled.View`
  width: ${props => props.width - 20};
  margin: 10px;
  height: 300;
  flex-flow: row;
  position: relative;
  background-color: white;
  border-radius: 15px;
`;

export const ItemImage = styled.Image`
  width: ${props => props.width - 20};
  height: 300;
  position: absolute;
`;

export const UdemyLogo = styled.Image`
  width: 100;
  height: 50;
  position: absolute;
  top: 0;
  left: 0;
`;

export const DescBottom = styled.View`
  width: ${props => props.width - 20};
  flex: 1;
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 10px;
`;

export const TopSection = styled.View`
  flex: 1;
  justify-content: center;
`;

export const BottomSection = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 14;
  color: #0f0f0f;
`;

export const Instructor = styled.Text`
  font-weight: 300;
  color: #292929;
`;

export const PaidFree = styled.Text`
  text-transform: uppercase;
  font-weight: 500;
  color: #0f0f0f;
  align-self: flex-end;
`;
