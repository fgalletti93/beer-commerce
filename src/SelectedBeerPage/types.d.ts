import { Ingredients, Measurements, Method } from "../utils/type";

export type Beer = {
  beer: BeerObject
};

type BeerObject = {
    id?: number;
    name?: string;
    tagline?: string;
    description?: string;
    image_url?: string;
    abv?: number;
    ibu?: number;
    volume?: Measurements;
    boil_volume?: Measurements;
    method?: Method;
    ingredients?: Ingredients;
    food_pairing?: string[];
    brewers_tips?: string;
}