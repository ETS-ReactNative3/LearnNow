import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const CourseImage = styled.Image`
  flex: 1;
  height: 225;
  width: ${props => props.width};
`;

export const BodyView = styled.View`
  flex: 1.8;
  width: ${props => props.width - 20};
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
`;

export const Title = styled.Text`
  font-size: 17;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const InfoBox = styled.View`
  flex-flow: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const SubReview = styled.View`
  flex-flow: row;
`;

export const SubReviewText = styled.Text`
  margin-left: 10px;
  font-size: 12;
`;

export const Desc = styled.Text`
  margin-bottom: 20px;
`;

export const InsLabel = styled.Text`
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-bottom-width: 1px;
`;

export const InsView = styled.View`
  flex-flow: row;
  margin-top: 10px;
`;

export const InsImg = styled.Image`
  width: 40;
  height: 40;
`;

export const InsInfo = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 5px;
`;

export const InsName = styled.Text`
  font-size: 11;
`;

export const InsJobTitle = styled.Text`
  font-size: 10;
`;

export const BottomView = styled.View`
  flex-flow: row;
  position: absolute;
  bottom: 0;
  width: ${props => props.width - 20};
  border-top-color: rgba(0, 0, 0, 0.15);
  border-top-width: 1px;
`;

export const PriceView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 50;
  border-bottom-left-radius: 20px;
`;

export const PriceLabel = styled.Text`
  font-size: 11;
`;

export const Price = styled.Text`
  font-size: 16;
`;

export const LinkBtn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 50;
  border-bottom-right-radius: 20px;
  background-color: #ff5757;
`;

export const LinkText = styled.Text`
  text-align: center;
  font-size: 16;
  color: ghostwhite;
`;
