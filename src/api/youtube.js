import axios from 'axios';

const KEY = 'AIzaSyA-KCQFtbvNpmMzYDnJuJLZkphFD-_fsQw'; //on any browser.
//const KEY = 'AIzaSyBYK8HbLtkD8k3dBDZrTm6_LBX0Y_jLvgI'; // on http://localhost:3000
//checking comments..

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});