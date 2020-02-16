import axios from 'axios';
const KEY = 'AIzaSyCqQVGcvmWamREl9TVCdkO0XleVOii6-uE'
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 7,
        key: `${KEY}`
    }
});
