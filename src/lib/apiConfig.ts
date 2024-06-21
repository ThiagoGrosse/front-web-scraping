import axios from "axios";

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL;

const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: defaultHeaders,
})
