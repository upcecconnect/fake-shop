<script setup lang="ts">
import { RouteName } from '@/router/RouteName';
import { PaymentMode } from '@/enums/PaymentMode';
import { ref } from 'vue';

const paymentMethods = ref([
  {
    title: "Payment with Redirect",
    description: "Redirect to payment page on checkout",
    action: "redirect",
  },
  {
    title: "Payment with Modal Iframe",
    description: "Show modal payment iframe on checkout page",
    action: "modalIframe",
  },
  {
    title: "Payment with Built-in Iframe",
    description: "Show built-in payment iframe on checkout page",
    action: "builtInIframe",
  },
  {
    title: "Payment with Manual Params",
    description: "Show built-in payment iframe on checkout page (development purpose only)",
    action: "manualParams",
  },
]);

const handleTry = (action: string) => {
  alert(`You selected: ${action}`);
  // Implement specific logic for each payment action
};
</script>

<template>
  <v-container class="py-6">
    <!-- Верхній блок з текстом -->
    <v-row class="mb-8">
      <!-- Ліва частина: h1 -->
      <v-col cols="12" md="4" class="d-flex align-items-center">
        <h1 class="text-h4 font-weight-bold">
          Welcome to the UPC eCommerce Connect Demo Shop!
        </h1>
      </v-col>

      <!-- Права частина: p і кнопка -->
      <v-col cols="12" md="8">
        <p class="text-subtitle-1">
          Explore various payment integration methods. Test our payment options, including redirection, built-in iframes, 
          modal windows, and custom parameter setups.
        </p>
        <v-btn color="primary" class="mt-4">
          Try These Payment Methods
        </v-btn>
      </v-col>
    </v-row>

    <!-- Секція способів оплати -->
    <v-row>
      <v-col cols="12">
        <div class="payment-methods">
          <h2 class="text-center mb-6">Payment Methods</h2>
          <div class="methods-grid">
            <div 
              v-for="(method, index) in paymentMethods" 
              :key="index" 
              class="method-card" 
            >
              <h3>{{ method.title }}</h3>
              <p>{{ method.description }}</p>
              <v-btn color="primary" @click="handleTry(method.action)">Try</v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.text-center {
  text-align: center;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.method-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.method-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.method-card p {
  font-size: 14px;
  margin-bottom: 20px;
}

.method-card v-btn {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.method-card v-btn:hover {
  background: #0056b3;
}

</style>
