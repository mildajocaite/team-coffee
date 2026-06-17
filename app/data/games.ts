import {saboteur} from "@/app/data/saboteur";
import {scribbl} from "@/app/data/scribbl";
import {codenames} from "@/app/data/codenames";
import {uno} from "@/app/data/uno";
import {explodingKittens} from "@/app/data/exploding-kittens";
import {garticPhone} from "@/app/data/gartic-phone";

export type Game = {
    id: string;
    logo: string;
    name: string;
    description: string;
    minPlayers: number;
    maxPlayers?: number;
    website: string;
};

export const games: Game[] = [
    saboteur,
    scribbl,
    codenames,
    uno,
    explodingKittens,
    garticPhone
];

