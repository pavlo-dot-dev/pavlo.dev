<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <div class="app">
    <div class="left-side">
      <NuxtLink :to="localePath('/')" class="avatar">
        <img src="@/assets/img/avatar.png" alt=""/>
      </NuxtLink>
      <div class="block skills">
        <h3>
          <span>{{ $t('skills') }}</span>
        </h3>
        <ul>
          <li>
            <img src="@/assets/img/skills/php.svg" alt="" class="icon"/>
            <span class="title">PHP</span>
            <div class="stars">
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="enable"></span>
            </div>
          </li>
          <li>
            <img src="@/assets/img/skills/node-js.svg" alt="" class="icon"/>
            <span class="title">Node.js</span>
            <div class="stars">
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="disable"></span>
              <span class="disable"></span>
            </div>
          </li>
          <li>
            <img src="@/assets/img/skills/vue-js.svg" alt="" class="icon"/>
            <span class="title">Vue.js</span>
            <div class="stars">
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="disable"></span>
              <span class="disable"></span>
            </div>
          </li>
          <li>
            <img src="@/assets/img/skills/java.svg" alt="" class="icon"/>
            <span class="title">Java</span>
            <div class="stars">
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="disable"></span>
              <span class="disable"></span>
              <span class="disable"></span>
            </div>
          </li>
          <li>
            <img src="@/assets/img/skills/c.svg" alt="" class="icon"/>
            <span class="title">C</span>
            <div class="stars">
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="disable"></span>
              <span class="disable"></span>
              <span class="disable"></span>
            </div>
          </li>
        </ul>
      </div>

      <div class="block social">
        <h3>
          <span>{{ $t('social-networks') }}</span>
        </h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/pavlo-dev/" target="_blank">
              <SocialLinkedinIcon/>
              <span>pavlo-dev</span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/pavlo.dev/" target="_blank">
              <SocialInstagramIcon/>
              <span>@pavlo.dev</span>
            </a>
          </li>
          <li>
            <a href="https://t.me/pavlo_dev" target="_blank">
              <SocialTelegramIcon/>
              <span>@pavlo_dev</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/pavlo.dev.facebook" target="_blank">
              <SocialFacebookIcon/>
              <span>pavlo.dev.facebook</span>
            </a>
          </li>
          <li>
            <a href="https://discord.gg/vUp8sHZU" target="_blank">
              <SocialDiscordIcon/>
              <span>pavlo.dev#6838</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="block social">
        <h3>
          <span>{{ $t('language-proficiency') }}</span>
        </h3>
        <ul>
          <li>
            <span class="title">{{ $t('ukrainian') }}</span>
            <div class="stars">
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="enable"></span>
            </div>
          </li>
          <li>
            <span class="title">{{ $t('russian') }}</span>
            <div class="stars">
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="enable"></span>
            </div>
          </li>
          <li>
            <span class="title">{{ $t('english') }}</span>
            <div class="stars">
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="disable"></span>
              <span class="disable"></span>
            </div>
          </li>
          <li>
            <span class="title">{{ $t('turkish') }}</span>
            <div class="stars">
              <span class="enable"></span>
              <span class="enable"></span>
              <span class="disable"></span>
              <span class="disable"></span>
              <span class="disable"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="right-side">

      <div class="header">
        <AppMenuWidget/>
        <AppLanguagesWidget/>
      </div>

      <NuxtPage/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

  width: 1440px;
  min-height: 100vh;
  min-width: 1440px;
  margin: 0 auto 35px;

  display: flex;
  flex-direction: row;
  position: relative;

  //&:before {
  //  content: '';
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  width: 100%;
  //  height: 451px;
  //  background: linear-gradient(181.66deg, #373737 28.82%, rgba(65, 65, 65, 0.18) 105.54%);
  //}

  .right-side {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 110px;

    .header {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 15px;
      position: absolute;
      right: 0;
      top: 50px;
    }
  }

  .left-side {
    width: 423px;
    background: #FEC600;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: 110px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      right: -41px;
      top: 0;
      width: 42px;
      height: 65px;
      background: url("@/assets/img/corner-orange.svg") no-repeat;
    }

    .avatar {
      display: block;
      text-align: center;
      position: relative;
      bottom: 53px;
    }

    .block {
      h3 {
        position: relative;

        span {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 321px;
          height: 56px;

          background: #343434;
          border-radius: 0 10px 10px 0;
          color: #FEC600;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 22px;
          font-family: 'Oswald', sans-serif;

          position: relative;
          right: 50px;
          z-index: 99;
        }

        &:after {
          content: '';
          width: 49px;
          height: 46px;
          display: block;
          background: url("@/assets/img/corner.svg") no-repeat;
          position: absolute;
          left: -50px;
          bottom: -38px;
          z-index: 8;
        }
      }

      ul {
        margin: 55px;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 19px;

        li {
          display: flex;
          flex-direction: row;
          gap: 15px;
          align-items: center;
          justify-content: space-between;
          color: #363636;
          font-size: 16px;
          font-weight: 500;

          .title {
            font-weight: 500;
          }
        }
      }

      .stars {
        display: flex;
        flex-direction: row;
        gap: 12px;

        & > * {
          display: block;
          width: 22px;
          height: 22px;
        }

        .enable {
          background: url("@/assets/img/skills/star-enable.svg") no-repeat center center;
        }

        .disable {
          background: url("@/assets/img/skills/star-disable.svg") no-repeat center center;
        }
      }

      &.social {
        a {
          color: #363636;
          text-decoration: none;
          display: flex;
          flex-direction: row;
          gap: 35px;
          align-items: center;
          transition: color 0.4s;

          svg {
            width: 40px;
          }

          &:hover {
            text-decoration: underline;
            color: #000;
          }
        }
      }
    }
  }
}
</style>