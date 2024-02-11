import { datas } from "../data/datas.js";

export const resolvers = {
  Query: {
    Book: () => datas,
  },
};
