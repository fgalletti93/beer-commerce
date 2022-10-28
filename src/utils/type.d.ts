export type PayloadObject = {
  id?: number;
  name: string;
  tagline?: string;
  description?: string;
  image_url: string;
  abv: number;
  ibu: number;
  volume?: Measurements;
  boil_volume?: Measurements;
  method?: Method;
  ingredients?: Ingredients;
  food_pairing?: string[];
  brewers_tips?: string;
};

export type Measurements = {
  value: number;
  unit: string;
};

export type Method = {
  mash_temp: Mash_temp[];
  fermentation: Fermentation;
  twist: null;
};

export type Mash_temp = {
  temp: Measurements;
  duration?: number;
};

export type Fermentation = {
  temp: Measurements;
};

export type Ingredients = {
  malt: Malt[];
  hops: Hops[];
};

export type Malt = {
  name: string;
  amount: Measurements;
};

export type Hops = {
  name: string;
  amount: Measurements;
  add: string;
  attribute: string;
};
