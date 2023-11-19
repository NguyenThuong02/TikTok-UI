import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/', // bài toán ở đây là nối chuỗi
});

export default request;
