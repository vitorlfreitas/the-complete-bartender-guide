import { Drink } from "@/entities/drinks";
import axios from "axios";

// URL to fetch data
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const getRandomCocktail = async (): Promise<Drink | null> => {
    try {
        const response = await axios.get<{ drinks: Drink[] }>(
            `${API_URL}/random.php`
        );
        return response.data.drinks[0] || null;
    } catch (error) {
        console.error("Error fetching random cocktail:", error);
        return null;
    }
};

export const getRandomCocktails = async (count: number): Promise<Drink[]> => {
    const cocktails: Drink[] = [];
    for (let i = 0; i < count; i++) {
        const cocktail = await getRandomCocktail();
        if (cocktail) cocktails.push(cocktail);
        else i--;
    }
    return cocktails;
};
