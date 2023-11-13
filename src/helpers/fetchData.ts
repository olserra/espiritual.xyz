import axios from "axios";

export const getUserData = async (username: any) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
  } catch (e) {
    throw e; // Re-throw the error to be caught by the calling code
  }
};

export const getGithubRepoData = async (username: any) => {
  try {
    const response = await axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos?per_page=100`,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getYoutubeData = async () => {
  const query = "freecodecamp";
  const YOUTUBE_API_KEY = "AIzaSyBo3rL4Ab0W5h65tgsSd5bXJrnc-xCVH6Y";

  try {
    const response = await axios({
      method: "get",
      url: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&q=${query}`,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
