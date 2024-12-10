<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { IconCheck } from '@tabler/icons-vue';
import { useProductsFiltersStore } from '@/stores/useProductsFiltersStore';
import { useProductsListStore } from '@/stores/useProductsListStore';
import { FilterPrice } from '@/types/FilterPrice';

const panel = ref([0, 1, 2, 3, 4]);

interface PriceOption {
  id: number;
  label: string;
  filter: FilterPrice;
}
const priceOptions: readonly PriceOption[] = [
  {
    id: 1,
    label: '1 UAH - 3 UAH',
    filter: {
      min: 0,
      max: 300
    }
  },
  {
    id: 2,
    label: '3 UAH - 5 UAH',
    filter: {
      min: 300,
      max: 500
    }
  },
  {
    id: 3,
    label: '5 UAH - 8 UAH',
    filter: {
      min: 500,
      max: 800
    }
  },
  {
    id: 4,
    label: '8 UAH - 10 UAH',
    filter: {
      min: 800,
      max: 1000
    }
  },
  {
    id: 5,
    label: 'Over 10 UAH',
    filter: {
      min: 1000,
      max: null
    }
  }
];

const productsListStore = useProductsListStore();
const { products } = storeToRefs(productsListStore);

const productsFiltersStore = useProductsFiltersStore();

const selectedGendersInternal = ref<string[]>([]);
const selectedGendersComputed = computed({
  get(): string[] {
    return selectedGendersInternal.value;
  },
  set(values: string[]) {
    selectedGendersInternal.value = values;
    productsFiltersStore.$patch({
      selectedGenders: values
    })
  }
})

const selectedColorInternal = ref<string|null>(null)
const selectedColorComputed = computed({
  get(): string|null {
    return selectedColorInternal.value;
  },
  set(value: string|null) {
    selectedColorInternal.value = value;
    productsFiltersStore.$patch({
      selectedColor: value
    })
  }
})

const selectedCategoryInternal = ref<string>('All');
const selectedCategoryComputed = computed({
  get(): string {
    return selectedCategoryInternal.value;
  },
  set(value: string) {
    selectedCategoryInternal.value = value;
    productsFiltersStore.$patch({
      selectedCategory: value
    })
  }
})

const selectedFilterPriceInternal = ref<number|null>(null);
const selectedPriceComputed = computed({
  get(): number|null {
    return selectedFilterPriceInternal.value;
  },
  set(value: number|null) {
    selectedFilterPriceInternal.value = value;
    const priceOption = priceOptions.find((priceOption) => priceOption.id === value);
    if (priceOption) {
      productsFiltersStore.$patch({
        selectedPrice: priceOption.filter
      })
    }
  }
})

const selectedRatingInternal = ref(1);
const selectedRatingComputed = computed({
  get(): number {
    return selectedRatingInternal.value;
  },
  set(value: number) {
    selectedRatingInternal.value = value;
    productsFiltersStore.$patch({
      selectedRating: value
    })
  }
})

const productColors = computed<readonly string[]>(() => {
  const colors = products.value.map((product) => {
    return product.colors;
  });
  return Array.from(new Set(colors.flat()));
});


function resetFilters() {
  selectedCategoryComputed.value = 'All';
  selectedColorComputed.value = null;
  selectedGendersComputed.value = [];
  selectedPriceComputed.value = null;
  selectedRatingComputed.value = 1;
}

onMounted(() => {
  selectedGendersInternal.value = productsFiltersStore.selectedGenders;
  selectedColorInternal.value = productsFiltersStore.selectedColor;
  selectedCategoryInternal.value = productsFiltersStore.selectedCategory;
  selectedRatingInternal.value = productsFiltersStore.selectedRating;
  const selectedPrice = productsFiltersStore.selectedPrice;
  if (!selectedPrice) {
    return;
  }
  const option = priceOptions.find((priceOption) => {
    return priceOption.filter.min === selectedPrice.min && priceOption.filter.max === selectedPrice.max;
  });
  if (option) {
    selectedFilterPriceInternal.value = option.id;
  }
})
</script>
<template>
  <v-sheet class="pa-4 pt-1">
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel elevation="0">
        <v-expansion-panel-title class="font-weight-medium custom-accordion"> {{ $t('text.gender') }} </v-expansion-panel-title>
        <v-expansion-panel-text class="acco-body">
          <v-row no-gutters>
            <v-col cols="12">
              <v-checkbox
                v-model="selectedGendersComputed"
                label="Male"
                value="male"
                color="primary"
              />
            </v-col>
            <v-col cols="12">
              <v-checkbox
                v-model="selectedGendersComputed"
                label="Female"
                value="female"
                color="secondary"
              />
            </v-col>
            <v-col cols="12">
              <v-checkbox
                v-model="selectedGendersComputed"
                label="Kids"
                value="kids"
                color="error"
              />
            </v-col>
          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-divider />
      <v-expansion-panel elevation="0">
        <v-expansion-panel-title class="font-weight-medium custom-accordion"> {{ $t('text.categories') }} </v-expansion-panel-title>
        <v-expansion-panel-text class="acco-body">
          <v-row no-gutters>
            <v-col cols="12">
              <v-radio-group v-model="selectedCategoryComputed">
                <v-radio label="All" value="All" color="primary"></v-radio>
                <v-radio label="Kitchen" value="kitchen" color="primary"></v-radio>
                <v-radio label="Electronics" value="electronics" color="primary"></v-radio>
                <v-radio label="Books" value="books" color="primary"></v-radio>
                <v-radio label="Fashion" value="fashion" color="primary"></v-radio>
                <v-radio label="Toys" value="toys" color="primary"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-divider />
      <v-expansion-panel elevation="0">
        <v-expansion-panel-title class="font-weight-medium custom-accordion"> {{ $t('text.colors') }} </v-expansion-panel-title>
        <v-expansion-panel-text class="acco-body">
          <div v-if="productColors.length > 0" class="d-flex gap-2 flex-wrap v-col-11 px-0">
            <template v-for="color in productColors" :key="color">
              <v-avatar
                class="cursor-pointer"
                :color="color"
                variant="flat"
                size="small"
                @click="() => selectedColorComputed = color"
              >
                <template v-if="selectedColorComputed === color">
                  <IconCheck size="13" />
                </template>
              </v-avatar>
            </template>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-divider />
      <v-expansion-panel elevation="0">
        <v-expansion-panel-title class="font-weight-medium custom-accordion"> {{ $t('text.price') }} </v-expansion-panel-title>
        <v-expansion-panel-text class="acco-body">
          <v-radio-group v-model="selectedPriceComputed" class="custom-radio-box">
            <v-radio
              v-for="priceItem in priceOptions"
              :key="priceItem.label"
              :label="priceItem.label"
              color="primary"
              :value="priceItem.id"
              hide-details
            >
            </v-radio>
          </v-radio-group>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-divider />
      <v-expansion-panel elevation="0">
        <v-expansion-panel-title class="font-weight-medium custom-accordion"> {{ $t('text.rating') }} </v-expansion-panel-title>
        <v-expansion-panel-text class="acco-body">
          <v-rating hover color="warning" v-model="selectedRatingComputed" class="ma-2" density="compact"></v-rating>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn color="primary" @click="resetFilters()" block class="mt-5">{{ $t('action.reset.filters') }}</v-btn>
  </v-sheet>
</template>

<style lang="scss">
  .custom-accordion {
    padding: 18px 2px;

    min-height: 30px !important;
    .v-expansion-panel-title__overlay {
        background-color: transparent;
    }
  }
  .acco-body {
    .v-expansion-panel-text__wrapper {
        padding: 5px 0;
    }
  }
  .custom-radio-box {
    .v-selection-control-group {
        flex-wrap: wrap;
    }
  }
</style>
