import axios from 'axios'

const KEY='AIzaSyDkjEM7n9dW7R28ilNTnaKGqXOxdEoHAs0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});