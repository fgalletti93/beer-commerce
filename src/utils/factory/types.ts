import { PayloadObject } from "../type";

export type BeerFactoryType = Pick<
  PayloadObject,
  "name" | "id" | "image_url" | "tagline" | "abv" | "ibu"
>;
