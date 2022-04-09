import { client } from "./client";
import { API_KEY } from "./Constants";

export const movieList = async (searchQuery, movies) => {
    if (!searchQuery) {
        const response = await client.get(`/movie/popular?api_key=${API_KEY}&page=1`)
        console.log("Mencetak popular movies")
        return [...response.data.results];
    } else {
        const response = await client.get(`/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
        console.log("Mencetak Searched Movies")
        return [...response.data.results];
    }
}
