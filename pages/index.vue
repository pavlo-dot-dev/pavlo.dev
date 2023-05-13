<script setup lang="ts">

</script>

<template>
  <div class="index page-content">
    <h1>{{ $t('full-name') }}</h1>
    <h2>{{ $t('work-position') }}</h2>
    <p class="about">{{ $t('about-me') }}</p>
    <h3>{{ $t('education-title') }}</h3>
    <ul class="timeline">
      <li>
        <div class="left">
          <div class="name">{{ $t('it-step') }}</div>
          <div class="description">{{ $t('it-step-description') }}</div>
        </div>
        <div class="years">2008 - 2012</div>
      </li>
      <li>
        <div class="left">
          <div class="name">{{ $t('ntu-hpi') }}</div>
          <div class="description">{{ $t('ntu-hpi-description') }}</div>
        </div>
        <div class="years">2010 - 2022</div>
      </li>
      <li>
        <div class="left">
          <div class="name">{{ $t('itea') }}</div>
          <div class="description">{{ $t('itea-description') }}</div>
        </div>
        <div class="years">2020 - 2021</div>
      </li>
      <li>
        <div class="left">
          <div class="name">{{ $t('geekbrains') }}</div>
          <div class="description">{{ $t('geekbrains-description') }}</div>
        </div>
        <div class="years">2021 - {{ $t('now') }}</div>
      </li>
    </ul>
    <h3>{{ $t('previous-employment') }}</h3>
    <ul class="timeline">
      <li>
        <div class="left">
          <div class="name">{{ $t('freelance') }}</div>
          <div class="description">{{ $t('freelance-description') }}</div>
        </div>
        <div class="years">2007 - 2019</div>
      </li>
      <li>
        <div class="left">
          <div class="name">{{ $t('private-company') }}</div>
          <div class="description">{{ $t('private-company-description') }}</div>
        </div>
        <div class="years">2007 - {{ $t('now') }}</div>
      </li>
    </ul>
    <h3>{{ $t('technologies') }}</h3>
    <div class="technologies-icons">
      <img src="@/assets/img/technologies/node.svg" alt=""/>
      <img src="@/assets/img/technologies/laravel.svg" alt=""/>
      <img src="@/assets/img/technologies/yii2.svg" alt=""/>
      <img src="@/assets/img/technologies/nest.svg" alt=""/>
      <img src="@/assets/img/technologies/vue.svg" alt=""/>
      <img src="@/assets/img/technologies/nuxt.svg" alt=""/>
      <img src="@/assets/img/technologies/git.svg" alt=""/>
    </div>
    <p class="technologies">{{ $t('technologies-body') }}</p>
    <h3>{{ $t('strengths') }}</h3>
    <p class="strengths">{{ $t('strengths-body') }}</p>

    <h3>{{ $t('portfolio') }}</h3>
    <p>{{ $t('in-developing') }}</p>
  </div>
</template>

<style scoped lang="scss">
.index {
  .about {
    font-size: 18px;
    line-height: 150%;
    width: 583px;
  }

  .technologies {
    letter-spacing: 0.025em;

    line-height: 170%;
  }

  .technologies-icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 20px;
  }

  .strengths {
    font-family: "Oswald", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    color: #fff;
  }

  ul.timeline {
    list-style: none;

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .left {
        width: 50%;
        margin: 20px 50px 20px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 18px;
        text-align: right;

        .name {
          color: #fff;
          font-family: "Oswald", sans-serif;
          font-size: 20px;
          font-weight: 500;
        }

        .description {
          max-width: 400px;
          color: #AAAAAA;
          font-size: 16px;
        }
      }

      .years {
        width: 50%;
        text-align: left;
        font-family: "Oswald", sans-serif;
        color: #FEC600;
        font-weight: 500;
        font-size: 20px;
        position: relative;
        padding-top: 20px;
        padding-left: 50px;

        &:before {
          position: absolute;
          left: -8px;
          top: 28px;
          content: '';
          width: 16px;
          height: 16px;
          background: url("@/assets/img/timeline.svg") no-repeat;
        }

        &:after {
          position: absolute;
          left: 0;
          top: 0;
          content: '';
          width: 1px;
          height: 100%;
          border-left: 1.77433px solid #1292EE;
          display: inline-block;
        }
      }
    }
  }
}
</style>