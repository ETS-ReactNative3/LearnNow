import React from "react";
import { Container, Title, SectionTitle, Text } from "./TipsStyled";

const Tips = () => {
  return (
    <Container>
      <Title>Tips on how to learn effectively</Title>
      <Text>
        Congratulations! You've made the first step to learning a brand new
        skill. We know how hard it is to get this far! Learning a new skill
        requires time, patience and most importantly...the will to start.
      </Text>
      <SectionTitle>Tip #1. Have a goal</SectionTitle>
      <Text>
        Motivation plays a huge factor when trying to learn a new skill. Having
        a reason to learn something in particular can be a huge motivational
        boost, especially in times of doubt. We recommend that you set your mind
        on a particular idea you wish to create, then figure out a roadmap on
        how to get there.
      </Text>
      <SectionTitle>Tip #2. Stick to one resource</SectionTitle>
      <Text>
        Oh, the internet, so vast and so easy to jump around different topics to
        read and learn about. When learning a new skill, we recommend that you
        find one good resource and you stick with it. Courses on Udemy and some
        videos on YouTube often contain an structured lecture that teaches you
        from the beginning to the end.
      </Text>
      <SectionTitle>Tip #3. Be consistent</SectionTitle>
      <Text>
        Consistency is important, no matter what you do. No one goes to sleep
        and wakes up being proficient in something. Spend at least an hour a day
        on your topic of choice.
      </Text>
      <SectionTitle>More tips to come...</SectionTitle>
    </Container>
  );
};

export default Tips;
