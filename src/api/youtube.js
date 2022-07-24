import axios from "axios";

const KEY = "AIzaSyBUg9h0kORpsCziPF5Xwuxj8X_RD45NCMw";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        q: 'surfboards'
    }
});





















