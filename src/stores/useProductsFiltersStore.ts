import { FilterPrice } from '@/types/FilterPrice';
import { defineStore } from 'pinia';

export const useProductsFiltersStore = defineStore({
  id: 'products/filters',
  state: () => ({
    selectedCategory: 'All' as string,
    selectedColor: null as string | null,
    selectedGenders: [] as string[],
    selectedPrice: null as FilterPrice | null,
    selectedRating: 0,
  }),
});
