import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '073dc28a4fcf489b81c63e7391e7912b'
  }
});