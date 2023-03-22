import { ValidSizes } from "@interfaces/index";

export interface ICartProduct {
  _id: string;
  image: string;
  price: number;
  size?: ValidSizes;
  slug: string;
  title: string;
  gender: 'men'|'women'|'kid'|'unisex';
  quantity: number;
}

export interface IOrderSummary {
  numberOfItems: number,
  subTotal: number,
  taxes: number,
  total: number,
}