import { client } from "./client";
import { API_KEY } from "./Constants";
export const credit = async (movie_id) => {
    const response = await client.get(`/movie/${movie_id}/credits?api_key=${API_KEY}&page=1`)
    console.log(response.data.crew);
    console.log("Mencetak Movie Credits")
    const credits = response.data;
    return { credits: credits };
}
