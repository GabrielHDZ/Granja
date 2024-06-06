import {atom, map} from 'nanostores';

export const database=atom(false);

export type CartItem = {
    id: string;
    name: string;
    imageSrc: string;
    quantity: number;
  }
  
  export const cartItems = map<Record<string, CartItem>>({});