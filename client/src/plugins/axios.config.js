import axios from "axios";

const Instance = createInstance(process.env.VUE_APP_API_URL);

function createInstance(baseURL){
    return axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    });
}

export default Instance; // Check debug/build mode