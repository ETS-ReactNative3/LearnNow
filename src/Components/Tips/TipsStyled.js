import styled from "styled-components";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 20px;
`;

export const Title = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

export const SectionTitle = styled(Title)`
  font-size: 16px;
  text-align: left;
  padding: 0px 10px;
`;

export const Text = styled.Text`
  font-size: 16px;
  padding: 5px 10px 10px 10px;
`;
