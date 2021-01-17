import axios from 'axios';

const API_TOKEN = 'keyG0c7aAoXmpprjM';

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appFnjL5yWDtdrvV6',
  timeout: 10000,
  headers: {
    'Authorization' : `Bearer ${API_TOKEN}`
  }
});

export function createBook(fields) {
  return (
    httpClient.post('/Books', {
      records: [
        {
          fields
        }
      ],
      "typecast": true
    }).then(result => result.data)
  );
}