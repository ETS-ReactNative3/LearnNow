import styled from "styled-components";

export const Container = styled.View`
  width: ${props => props.width};
  height: 100;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  flex-flow: row;
`;

export const ItemImage = styled.Image`
  height: 100;
  width: 125;
`;

export const RightSection = styled.View`
  flex: 1;
`;

export const TopSection = styled.View`
  flex: 3;
  padding: 0 5px;
  justify-content: center;
`;

export const BottomSection = styled.View`
  flex: 1;
  padding: 0 5px;
`;

export const Title = styled.Text`
  font-weight: 700;
  color: #0f0f0f;
`;

export const Instructor = styled.Text`
  font-weight: 300;
  color: #292929;
`;

export const PaidFree = styled.Text`
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  align-self: flex-end;
  padding: 0 5px;
`;
