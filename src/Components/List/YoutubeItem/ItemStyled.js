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

export const YoutubeLogo = styled.Image`
  width: 45;
  height: 45;
  position: absolute;
  top: 5;
  left: 10;
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

export const NameDate = styled.Text`
  font-weight: 300;
  color: #292929;
`;
