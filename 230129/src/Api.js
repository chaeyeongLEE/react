import axios from 'axios';

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com', // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: 'KakaoAK {de18963c1d826b358259e9fc2cf96876}',
  },
});

// search book api
export const bookSearch = (params) => {
  return Kakao.get('/v3/search/book', { params });
};