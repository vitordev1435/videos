import axios from 'axios';
const KEY = 'AIzaSyC3F2fZ7UWxDc0R8wrclJALQ6Nxf6V7XeM';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
  });