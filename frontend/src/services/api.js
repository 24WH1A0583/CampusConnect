import axios from "axios";

const api = axios.create({
 baseURL:
"https://connectthrucampus-backend.onrender.com/api",
});

export default api;