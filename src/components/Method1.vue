<template>

  <div>
    <flutterwave-pay-button
        :tx_ref="generateReference()"
        :amount=20
        currency='NGN'
        payment_options="card,ussd"
        redirect_url=""
        class="class-name"
        style=""
        :meta="{counsumer_id: '7898' ,consumer_mac: 'kjs9s8ss7dd' }"
        :customer="{ name: 'Demo Customer  Name',
        email: 'customer@mail.com', 
        phone_number: '0818450****' }"
        :customizations="{  title: 'Customization Title' ,
        description: 'Customization Description'  ,
        logo : 'https://flutterwave.com/images/logo-colored.svg' }"
        :callback="makePaymentCallback"
        :onclose="closedPaymentModal"
    >   Click To Pay </flutterwave-pay-button>
  </div>

</template>




<script>

export default {
  name: 'App',
  methods: {
    makePaymentCallback(response) {
      console.log("Payment callback", response)
    },
    closedPaymentModal() {
      console.log('payment modal is closed');
    },
    generateReference(){
      let date = new Date()
      return date.getTime().toString();
    }
  }
}

</script>