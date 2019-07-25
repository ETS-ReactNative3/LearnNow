import styled from "styled-components";

export const Container = styled.View`
  width: ${props => props.width};
  height: 300;
  flex-flow: row;
  position: relative;
`;

export const ItemImage = styled.Image`
  width: ${props => props.width};
  height: 300;
  position: absolute;
`;

export const DescBottom = styled.View`
  width: ${props => props.width};
  flex: 1;
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 5px;
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
