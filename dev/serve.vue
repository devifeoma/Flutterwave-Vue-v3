<script>
import Vue from 'vue';
import { FlutterwavePayButton } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    FlutterwavePayButton,
  },
  data(){
    return {
      paymentData: {
        tx_ref: this.generateReference(),
        amount: 10,
        redirect_url: '',
        meta: {
          'counsumer_id': '7898',
          'consumer_mac': 'kjs9s8ss7dd'
        },
        customer: {
          name: 'Demo Customer  Name',
          email: 'customer@mail.com',
          phone_number: '0818450***44'
        } ,
        customizations: {
          title: 'Customization Title',
          description: 'Customization Description',
          logo: 'https://flutterwave.com/images/logo-colored.svg'
        },
        callback: this.makePaymentCallback,
        onclose: this.closeModalCallback
      }
    }
  } ,
  methods: {
    makePaymentCallback(response) {
      console.log("Pay", response)
      this.closePaymentModal(5)
    },
    asyncPay() {
      this.asyncPayWithFlutterwave(this.paymentData).then(
          (response) => {
            console.log(response)
            this.closePaymentModal(5)
          }
      )
    },
    closeModalCallback() {
      console.log('payment is closed');
    },
    generateReference() {
      let date = new Date()
      return date.getTime().toString();
    }
  }
});
</script>


<template>
  <div>
    <flutterwave-pay-button v-bind="paymentData"> Pay With Flw Pay button</flutterwave-pay-button>


    <button @click="asyncPay(paymentData)">Pay With Promise</button>


  </div>
</template>

<style>
button {
  display: block;
  margin: 5vh auto;
}
</style>