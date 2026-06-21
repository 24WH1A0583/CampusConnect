import axios from "axios";

const api = axios.create({
 baseURL:
"https://your-backend-name.onrender.com/api",
});

export default api;