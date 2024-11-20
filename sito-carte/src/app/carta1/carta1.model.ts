export class Carta1
{
    id!: number;
    name!: string;
    weight!: number;
    height!: number;
    types!: Array<{ type: { name: string } }>;
    sprites!: { front_default: string };
}
