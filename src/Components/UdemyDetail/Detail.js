import React, { useState, useEffect } from "react";
import StarRating from "react-native-star-rating";
import { Dimensions, StyleSheet, Linking, Alert } from "react-native";
import axios from "axios";
import {
  Container,
  CourseImage,
  BodyView,
  Title,
  InfoBox,
  SubReview,
  SubReviewText,
  Desc,
  InsLabel,
  InsView,
  InsImg,
  InsInfo,
  InsName,
  InsJobTitle,
  BottomView,
  PriceView,
  PriceLabel,
  Price,
  LinkBtn,
  LinkText
} from "./DetailStyled";

const UdemyDetail = item => {
  const { width, height } = Dimensions.get("window");
  const course = item.navigation.state.params;
  console.log(course);
  const [headline, setHeadLine] = useState(null);
  const [numReviews, setNumReviews] = useState(0);
  const [numSubs, setNumSubs] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  useEffect(() => {
    axios
      .get(
        `https://www.udemy.com/api-2.0/courses/${
          course.id
        }?fields[course]=headline,num_reviews,num_subscribers,avg_rating`
      )
      .then(res => {
        setHeadLine(res.data.headline);
        setNumReviews(res.data.num_reviews);
        setNumSubs(res.data.num_subscribers);
        setAvgRating((Math.round(res.data.avg_rating * 2) / 2).toFixed(1));
      });
  }, []);

  const formatNum = number => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <Container>
      <CourseImage
        source={{ uri: `${course.image_480x270}` }}
        width={width}
        height={height}
        borderBottomRightRadius={100}
      />
      <BodyView width={width} height={height} style={styles.shadow}>
        <Title>{course.title}</Title>
        <InfoBox>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={parseFloat(avgRating)}
            fullStarColor={"#ffcb2e"}
            starSize={20}
          />
          <SubReview>
            <SubReviewText>{formatNum(numSubs)} Subscribers</SubReviewText>
            <SubReviewText>{formatNum(numReviews)} Reviews</SubReviewText>
          </SubReview>
        </InfoBox>
        <Desc>{headline}</Desc>
        <InsLabel>Instructors</InsLabel>
        {course
          ? course.visible_instructors.map((instructor, index) => {
              return (
                <InsView key={index} width={width}>
                  <InsImg
                    source={{ uri: `${instructor.image_100x100}` }}
                    borderRadius={50}
                  />
                  <InsInfo>
                    <InsName>{instructor.display_name}</InsName>
                    <InsJobTitle>{instructor.job_title}</InsJobTitle>
                  </InsInfo>
                </InsView>
              );
            })
          : null}
        <BottomView width={width}>
          <PriceView>
            <PriceLabel>Price</PriceLabel>
            <Price>{course.price}</Price>
          </PriceView>
          <LinkBtn
            acticeOpacity={0.9}
            onPress={() => {
              const url = `https://www.udemy.com${course.url}`;
              Linking.openURL(url).catch(err => {
                Alert.alert("URL", "Oh no! Unable to open url.", [
                  { text: "Ok" }
                ]);
              });
            }}
          >
            <LinkText>Go to Udemy</LinkText>
          </LinkBtn>
        </BottomView>
      </BodyView>
    </Container>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 1,
    shadowRadius: 8,

    elevation: 8
  }
});

export default UdemyDetail;
