import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://ik-test-api.herokuapp.com",
});
