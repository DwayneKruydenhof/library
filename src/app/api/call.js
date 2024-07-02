import axios from "axios";

axios.defaults.baseURL = 'https://openlibrary.org';

export function fetchData() {
    axios.get('/search.json?=java')
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
}