import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.IDENTITY_SERVICE_PORT || "http://localhost:5000/api"
})