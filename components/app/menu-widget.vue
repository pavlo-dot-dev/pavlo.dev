<script setup lang="ts">
const active = ref(false);
const localePath = useLocalePath();
</script>

<template>
  <div class="menu" :class="{active: active}" @click.prevent="active = !active" @mouseenter="active = true" @mouseleave="active = false">
    <div class="title">{{ $t('menu-title') }}</div>
    <ul>
      <li>
        <NuxtLink :to="localePath('/pay')">{{ $t('pay') }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/agreement')">{{ $t('agreement') }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/return')">{{ $t('return') }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.menu {
  width: 130px;
  max-height: 42px;
  transition: max-height 0.8s ease-in-out;
  overflow-y: hidden;

  background: #FEC600;
  border-radius: 30px;
  padding: 15px;

  &.active {
    max-height: 200px;

    .title:after {
      transform: rotate(180deg);
    }
  }

  .title {
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    position: relative;
    bottom: 3px;

    &:after {
      position: relative;
      bottom: 2px;
      margin-left: 5px;
      display: inline-block;
      content: '';
      width: 14px;
      height: 6px;
      background: url("@/assets/img/menu/arrow.svg") no-repeat 100% 100%;

      transition: all 0.8s ease-in-out;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &:before {
      margin-top: 10px;
      margin-bottom: 5px;
      content: '';
      border-bottom: 1px solid #fff;
      display: block;
    }

    li {
      a {
        color: #181818;
        text-decoration: none;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;

        display: block;
        border-bottom: 1px solid #fff;
        padding-bottom: 4px;
        transition: all 0.4s;

        &:hover {
          color: #fff;
          font-weight: 500;
        }
      }

      &:last-child a {
        border: none;
      }
    }
  }
}
</style>