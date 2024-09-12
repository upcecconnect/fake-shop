<script setup lang="ts">
import { ref } from 'vue';
import { CopyIcon } from 'vue-tabler-icons';

enum CardIssuer {
  VISA = 'VISA',
  MasterCard = 'MasterCard',
  Maestro = 'Maestro',
  Prostir = 'Prostir',
}

interface TestCard {
  readonly tranCode: string;
  readonly description: string;
  readonly cardNumber: string;
}

const visaTestCards: readonly TestCard[] = [
  {
    cardNumber: '4999999999990011',
    tranCode: '000',
    description: 'Authorized transaction',
  },
  {
    cardNumber: '4999999999990029',
    tranCode: '105',
    description: 'Transaction not allowed by the issuing bank',
  },
  {
    cardNumber: '4999999999990037',
    tranCode: '116',
    description: 'Insufficient funds',
  },
  {
    cardNumber: '4999999999990045',
    tranCode: '111',
    description: 'Non-existent card',
  },
  {
    cardNumber: '4999999999990052',
    tranCode: '108',
    description: 'Lost or stolen card',
  },
  {
    cardNumber: '4999999999990060',
    tranCode: '101',
    description: 'Invalid expiration date',
  },
  {
    cardNumber: '4999999999990078',
    tranCode: '130',
    description: 'Overdraft limit exceeded',
  },
  {
    cardNumber: '4999999999990086',
    tranCode: '290',
    description: 'Issuing bank unavailable',
  },
  {
    cardNumber: '4999999999990094',
    tranCode: '291',
    description: 'Technical issue or communication problem',
  },
  {
    cardNumber: '4999999999990102',
    tranCode: '403',
    description: 'Connection error to PS (DS) source',
  },
  {
    cardNumber: '4999999999990110',
    tranCode: '404',
    description: 'Customer authentication error',
  },
]

const masterCardTestCards: readonly TestCard[] = [
  {
    cardNumber: '5559490000000007',
    tranCode: '000',
    description: 'Authorized transaction',
  },
  {
    cardNumber: '5559490000000015',
    tranCode: '000',
    description: 'Authorized transaction',
  },
  {
    cardNumber: '5559490000000023',
    tranCode: '000',
    description: 'Authorized transaction',
  },
  {
    cardNumber: '5559490000000106',
    tranCode: '105',
    description: 'Transaction not allowed by the issuing bank',
  },
  {
    cardNumber: '5559490000000114',
    tranCode: '116',
    description: 'Insufficient funds',
  },
  {
    cardNumber: '5559490000000122',
    tranCode: '111',
    description: 'Non-existent card',
  },
  {
    cardNumber: '5559490000000148',
    tranCode: '101',
    description: 'Invalid expiration date',
  },
  {
    cardNumber: '5559490000000213',
    tranCode: '291',
    description: 'Technical issue or communication problem',
  },
]

const maestroTestCards: readonly TestCard[] = [
  {
    cardNumber: '6258148147036936',
    tranCode: '000',
    description: 'Authorized transaction',
  },
]

const prostirTestCards: readonly TestCard[] = [
  {
    cardNumber: '9804560070289154',
    tranCode: '000',
    description: 'Authorized transaction',
  },
]

interface TestCardGroup {
  readonly issuer: CardIssuer;
  readonly cards: readonly TestCard[];
}

const testCardsGroups: readonly TestCardGroup[] = [
  {
    issuer: CardIssuer.VISA,
    cards: visaTestCards,
  },
  {
    issuer: CardIssuer.MasterCard,
    cards: masterCardTestCards,
  },
  {
    issuer: CardIssuer.Maestro,
    cards: maestroTestCards,
  },
  {
    issuer: CardIssuer.Prostir,
    cards: prostirTestCards,
  },
]

const successsnackbar = ref(false);

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
  successsnackbar.value = true
}
</script>

<template>
  <v-card variant="outlined" class="rounded overflow-hidden bg-surface">
    <v-card-item class="pt-5">
      <h6 class="text-h4 text-center mb-4">Test cards</h6>
      <v-snackbar
        v-model="successsnackbar"
        variant="flat"
        location="bottom right"
        color="primary"
        rounded="md"
        class="text-white"
      >
        Card number copied to clipboard
      </v-snackbar>
      <div v-for="item in testCardsGroups" :key="item.issuer">
        <v-table>
          <thead>
            <tr>
              <td colspan="3" class="text-center">
                <img
                  v-if="item.issuer === CardIssuer.VISA"
                  style="height: 20px;"
                  src="@/assets/images/issuers/visa.png"
                  alt="VISA"
                />
                <img
                  v-if="item.issuer === CardIssuer.MasterCard"
                  style="height: 20px;"
                  src="@/assets/images/issuers/mastercard.png"
                  alt="MasterCard"
                />
                <img
                  v-if="item.issuer === CardIssuer.Maestro"
                  style="height: 20px;"
                  src="@/assets/images/issuers/maestro.png"
                  alt="Maestro"
                />
                <img
                  v-if="item.issuer === CardIssuer.Prostir"
                  style="height: 20px;"
                  src="@/assets/images/issuers/prostir.png"
                  alt="Простір"
                />
              </td>
            </tr>
            <tr>
              <th>Transaction code</th>
              <th>Description</th>
              <th>Card number</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="card in item.cards" :key="card.cardNumber">
              <td>{{ card.tranCode }}</td>
              <td>{{ card.description }}</td>
              <td>
                <span>{{ card.cardNumber }}</span>
                <v-btn
                  icon
                  variant="text"
                  color="primary"
                  title="Copy"
                  @click="copyToClipboard(card.cardNumber)"
                >
                  <CopyIcon stroke-width="1.5" size="22"  />
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <div class="d-flex justify-space-between flex-wrap">
         <a
            href="https://developer.mastercard.com/unified-checkout-solutions/documentation/testing/test_cases/click_to_pay_case/#test-cards"
            target="_blank"
            class="my-2"
            rel="noopener noreferrer"
          >
            Click to Pay test cards
          </a>
          <a
            href="https://sandbox.src.mastercard.com/profile/"
            target="_blank"
            class="my-2"
            rel="noopener noreferrer"
          >
            MasterCard Click to Pay Profile (test environment)
          </a>
          <a
            href="https://sandbox.secure.checkout.visa.com/"
            target="_blank"
            class="my-2"
            rel="noopener noreferrer"
          >
            VISA Click to Pay Profile (test environment)
          </a>
      </div>
    </v-card-item>
  </v-card>
</template>
