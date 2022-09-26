export type PayloadObject = {
    id: number
    name: string,
    tagline: string,
    description?: string,
    image_url: string,
    abv: number,
    ibu: number,
    volume?: Measurements,
    boil_volume?: Measurements,
    method?: Method,
    ingredients?: Ingredients,
    food_pairing?: string[]
    brewers_tips?: string
}

type Measurements = {
    value: number,
    unit: string
}

type Method = {
    mash_temp: Mash_temp[],
    fermentation: Fermentation,
    twist: null
}

type Mash_temp = {
    temp: Measurements,
    duration?: number
}

type Fermentation = {
    temp: Measurements
}


type Ingredients = {
    malt: Malt[],
    hops: Hops[]
}

type Malt = {
    name: string,
    amount: Measurements
}

type Hops = {
    name: string,
    amount: Measurements,
    add: string,
    attribute: string
}