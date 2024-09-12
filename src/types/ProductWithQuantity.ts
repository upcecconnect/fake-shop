import type { Product } from './Product';

export interface ProductWithQuantity extends Product {
  readonly quantity: number;
}