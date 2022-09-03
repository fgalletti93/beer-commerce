import "@testing-library/jest-dom";
import { orderBy } from "../OrderBy";
import { beerFactory } from "../factory/beers";

const mockData = [beerFactory(), beerFactory(), beerFactory(), beerFactory()];

enum mockOption {
  A_Z = "A-Z",
  Z_A = "Z-A",
  Low_to_High_ABV = "Low to High ABV",
  High_to_Low_ABV = "High to Low ABV",
  Low_to_High_IBU = "Low to High IBU",
  High_to_Low_IBU = "High to Low IBU",
}

describe("OrderBy helper function", () => {
  it("Should order data in alphabetical order", () => {
    const alphabeticalOrderResults = orderBy(mockData, mockOption.A_Z);
    expect(alphabeticalOrderResults).toEqual(
      mockData.sort((a: any, b: any) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
    );
  });
  it("Should return data in reverse order", () => {
    const reverseOrderResults = orderBy(mockData, mockOption.Z_A);
    expect(reverseOrderResults).toEqual(
      mockData.sort((a: any, b: any) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      })
    );
  });
  describe("ABV values", () => {
    it("Should order data with ABV low to high", async () => {
      const abvLowToHighResults = await orderBy(
        mockData,
        mockOption.Low_to_High_ABV
      );
      expect(abvLowToHighResults).toEqual(
        mockData.sort((a: any, b: any) => a.abv - b.abv)
      );
    });
    it("Should order data with ABV high to low", async () => {
      const abvHighToLowResults = await orderBy(
        mockData,
        mockOption.High_to_Low_ABV
      );
      expect(abvHighToLowResults).toEqual(
        mockData.sort((a: any, b: any) => b.abv - a.abv)
      );
    });
  });
  describe("IBU values", () => {
    it("Should order data with IBU low to high", async () => {
      const ibuLowToHighResults = await orderBy(
        mockData,
        mockOption.Low_to_High_IBU
      );
      expect(ibuLowToHighResults).toEqual(
        mockData.sort((a: any, b: any) => a.ibu - b.ibu)
      );
    });
    it("Should order data with IBU high to low", async () => {
      const ibuHighToLowResults = await orderBy(
        mockData,
        mockOption.High_to_Low_IBU
      );
      expect(ibuHighToLowResults).toEqual(
        mockData.sort((a: any, b: any) => b.ibu - a.ibu)
      );
    });
  });
});
