import { faker } from "@faker-js/faker";

export const beerFactory = () => {
    return {
        name: faker.name.firstName(),
        id: faker.datatype.number(),
        image: faker.image.avatar(),
        tagline: faker.lorem.sentence(),
        abv: faker.datatype.number({ min: 3, max: 15, precision: 0.1 }),
        ibu: faker.datatype.number({ min: 0, max: 140, precision: 0.1 })
    }
}