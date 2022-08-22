import { faker } from "@faker-js/faker";

export const beerFactory = () => {
    return {
        name: faker.name,
        id: faker.datatype.number,
        image: faker.image.avatar,
        tagline: faker.lorem.sentence,
        abv: faker.datatype.number,
    }
}