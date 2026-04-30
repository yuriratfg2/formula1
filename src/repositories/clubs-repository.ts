import { ClubModel } from "../models/club-model";
import fs from "fs/promises";

const database = [
  {
    id: 1,
    name: "Bayern Munich",
  },
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const data = await fs.readFile("./src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);
  return clubs;
};
