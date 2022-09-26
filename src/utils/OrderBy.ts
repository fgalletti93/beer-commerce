import { PayloadObject } from "./types";

export const orderBy = (data: PayloadObject[], option: string) => {
    if (option === "A-Z") {
      const alphabeticalOrder = data.sort((a, b) => {
        const beerA = a.name.toUpperCase();
        const beerB = b.name.toUpperCase();
        if (beerA < beerB) {
          return -1;
        }
        if (beerA > beerB) {
          return 1;
        }
        return 0;
      });
      return [...alphabeticalOrder];
    }
    if (option === "Z-A") {
      const ReverseAlphabeticalOrder = data.sort((a, b) => {
        const beerA = a.name.toUpperCase();
        const beerB = b.name.toUpperCase();
        if (beerA < beerB) {
          return 1;
        }
        if (beerA > beerB) {
          return -1;
        }
        return 0;
      });
      return [...ReverseAlphabeticalOrder];
    }
    if (option === "Low to High ABV") {
      const AbvLowToHigh = data.sort((a, b) => {
        return a.abv - b.abv;
      });
      return [...AbvLowToHigh];
    }
    if (option === "High to Low ABV") {
      const AbvHighToLow = data.sort((a, b) => {
        return b.abv - a.abv;
      });
      return [...AbvHighToLow];
    }
    if (option === "Low to High IBU") {
      const IbuLowToHigh = data.sort((a, b) => {
        return a.ibu - b.ibu;
      });
      return [...IbuLowToHigh];
    }
    if (option === "High to Low IBU") {
      const IbuHighToLow = data.sort((a, b) => {
        return b.ibu - a.ibu;
      });
      return [...IbuHighToLow];
    }
  };

