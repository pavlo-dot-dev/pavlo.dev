<script setup lang="ts">

</script>

<template>
  <div class="pay page-content">
    <h1>{{ $t('pay-service') }}</h1>
    <h2>{{ $t('payment-methods') }}</h2>
    <ul>
      <li>{{ $t('payment-method-systems') }}</li>
      <li>{{ $t('payment-method-ua') }}</li>
      <li>{{ $t('payment-method-crypto') }}</li>
      <li>{{ $t('payment-method-cash') }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.pay {
  ul {
    margin-left: 20px;
    line-height: 150%;
  }
}
</style>