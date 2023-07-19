import { BASE_API_URL } from "./constants";

export const getStory = (id) => {
  return fetch(`${BASE_API_URL}/item/${id}.json`)
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error while getting a story.");
    });
};

export const getStories = (type) => {
  return fetch(`${BASE_API_URL}/${type}stories.json`)
    .then((response) => response.json())
    .then((storyIds) => {
      return Promise.all(storyIds.slice(0, 10).map(getStory));
    })
    .catch((error) => {
      console.log("Error while getting list of stories.");
    });
};
