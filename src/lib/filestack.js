import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://www.filestackapi.com/api',
  timeout: 10000
});

export const uploadFile = (file) => (
  httpClient.post('/store/S3', file, {
    params: {
      key: 'A7MNK5sRPRGTFORaemBYEz'
    }
  }).then(res => { console.log(res); return res.data; })
);