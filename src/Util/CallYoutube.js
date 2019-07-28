import axios from "axios";
import { Alert } from "react-native";

const apiKey = "AIzaSyADzbOhEGjGuc2vqGDqRo2Vb5OX40txcPk";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

export const YoutubeSearch = term => {
  return axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&safeSearch=moderate&fields=items(id%2Csnippet)%2CnextPageToken&key=${apiKey}`
    )
    .then(res => {
      return PrepareData(res.data);
    })
    .catch(err => {
      Alert.alert("Network Problem", "Oh no! Something is wrong!", [
        { text: "Try Again" }
      ]);
    });
};

export const MoreYoutubeRes = (term, nextPageToken) => {
  return axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=${nextPageToken}&q=${term}&safeSearch=moderate&fields=items(id%2Csnippet)%2CnextPageToken&key=${apiKey}`
    )
    .then(res => {
      return PrepareData(res.data);
    })
    .catch(err => {
      Alert.alert("Network Problem", "Oh no! Something is wrong!", [
        { text: "Try Again" }
      ]);
    });
};

const PrepareData = data => {
  let result = [];
  data.items.map(video => {
    if (video.id.kind === "youtube#video") {
      let info = video.snippet;
      let timestamp = new Date(info.publishedAt);
      let videoInfo = {
        videoId: video.id.videoId,
        channelTitle: info.channelTitle,
        title: info.title,
        description: info.description,
        date: `${
          months[timestamp.getMonth()]
        } ${timestamp.getDate()}, ${timestamp.getFullYear()}`,
        image: info.thumbnails.high
      };
      result.push(videoInfo);
    }
  });
  return {
    result: result,
    nextPageToken: data.nextPageToken !== false ? data.nextPageToken : ""
  };
};
