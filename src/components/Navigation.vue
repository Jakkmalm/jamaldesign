<template>
  <header>
    <nav class="container">
      <div class="logo">
        <router-link class="header" :to="{ name: 'Home' }">Jamal<span class="spanlogo">Design</span></router-link>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'About' }">About</router-link>
          <router-link class="link" :to="{ name: 'Pricing' }">Pricing</router-link>
          <router-link class="link" to="#">Register / Login</router-link>
        </ul>
      </div>
    </nav>
    <img @click="toggleMobileNav" :src="menuIcon" class="menu-icon" v-show="mobile"/>
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav" @click="closeNav">
        <img class="mobile-exit" @click="!toggleMobileNav" :src="menuExit">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'About' }">About</router-link>
        <router-link class="link" :to="{ name: 'Pricing' }">Pricing</router-link>
        <router-link class="link" to="#">Register/Login</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  components: {},
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      menuIcon: require("../assets/Icons/bars-regular.svg"),
      menuExit: require("../assets/Icons/exit.svg"),
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    closeNav() {
      this.mobileNav = !this.mobileNav;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {

  .container:hover {
    color: black;
  }
}



header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px 5px rgba(0, 0, 0, 0.1), 0 2px 4px 5px rgba(0, 0, 0, 0.06);
  z-index: 99;


  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s ease all;

    &:hover {
      color: rgb(240, 166, 30);
      cursor: pointer;
      text-decoration: underline;
    }
  }

  nav {
    display: flex;
    padding: 25px 0;

    .logo {
      display: flex;
      align-items: center;

      &:hover {
        text-decoration: underline;
        transition: .3s ease all;
      }

      .header {
        font-weight: 600;
        font-size: 24px;
        color: black;
        text-decoration: none;
        
        .header .spanlogo:hover {
          cursor: pointer;
          transition: 300ms;
          transform: translateY(-5px);
        }
      }
      .spanlogo{
        color: rgb(240, 166, 30);
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;

        .link {
          margin-right: 16px;
        }
        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    border-left: 4px solid white;
    transition: 0.2s ease all;
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: rgb(30, 32, 34);
    top: 0;
    right: 0;


    .link {
      margin-right: auto;
      padding: 12px 0;
      color: white;

      &:hover {
        color: rgb(240, 166, 30);
        text-decoration: underline;
      }
    }

    .mobile-exit {
      cursor: pointer;
      position: absolute;
      top: 32px;
      right: 25px;
      height: 22px;
      width: auto;

      &:hover {
        fill: rgb(240, 166, 30);
      }
    }
  }
}
</style>