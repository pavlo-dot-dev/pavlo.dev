<script setup lang="ts">
const languages = {
  en: {
    title: 'ENG',
    icon: '/assets/img/languages/en.png'
  },
  ua: {
    title: 'УКР',
    icon: '/assets/img/languages/ua.png',
  },
  ru: {
    title: 'РУС',
    icon: '/assets/img/languages/ru.png'
  },
};

const active = ref(false);
const switchLocalePath = useSwitchLocalePath();
const i18n = useI18n();
</script>

<template>
  <div class="languages" :class="{active: active}" @click.prevent="active = !active" @mouseenter="active = true"
       @mouseleave="active = false">
    <div class="title">
      <img :src="languages[i18n.locale.value].icon" alt=""/>
      <span>{{ languages[i18n.locale.value].title }}</span>
    </div>
    <ul>
      <li v-for="(item, key) in languages">
        <NuxtLink :to="switchLocalePath(key)">
          <img :src="item.icon" alt=""/>
          <span>{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.languages {
  width: 120px;
  max-height: 42px;
  transition: max-height 0.8s ease-in-out;
  overflow-y: hidden;

  background: #585858;
  border-radius: 30px;
  padding: 15px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;

  &.active {
    max-height: 200px;

    .title:after {
      transform: rotate(180deg);
    }
  }

  img {
    width: 32px;
    height: 21px;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    text-align: center;
    position: relative;
    bottom: 3px;

    &:after {
      margin-left: 5px;
      display: inline-block;
      content: '';
      width: 14px;
      height: 6px;
      background: url("@/assets/img/languages/arrow.svg") no-repeat 100% 100%;

      transition: all 0.8s ease-in-out;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;

    &:before {
      margin-top: 10px;
      margin-bottom: 5px;
      content: '';
      display: block;
    }

    li {
      a {
        color: #fff;
        text-decoration: none;
        transition: all 0.4s;
        font-size: 14px;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        &:hover {
          color: #FEC600;
        }
      }
    }
  }
}
</style>