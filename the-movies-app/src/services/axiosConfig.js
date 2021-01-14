import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/4',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWFhMDA2YTljZjgzNjhkZTE4ZWU0YzI4OGFkM2YyOSIsInN1YiI6IjVmZmZmZWE5MzI2YzE5MDAzZTdlZGU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NV6FjfvLNdSDNp5-yIRGeHbJv40_J2qmdZ45THuWwc0'
    }
})
