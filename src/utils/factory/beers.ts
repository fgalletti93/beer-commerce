import { faker } from "@faker-js/faker";
import { BeerFactoryType } from "./types";


export const beerFactory = (): BeerFactoryType => {
    return {
        name: faker.name.firstName(),
        id: faker.datatype.number(),
        image_url: faker.image.avatar(),
        tagline: faker.lorem.sentence(),
        abv: faker.datatype.number({ min: 3, max: 15, precision: 0.1 }),
        ibu: faker.datatype.number({ min: 0, max: 140, precision: 0.1 })
    }
}