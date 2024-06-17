import axios from "axios";

export const api = axios.create({
    baseURL: "https://web-scraping-4a5e70abee79.herokuapp.com/",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
});
