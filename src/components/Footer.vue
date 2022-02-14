<template>
  <footer>
      <div class="container">
          <div class="left">
              <div class="col-1">
                  <router-link class="header" :to="{ name: 'Home' }">Jamal<span>Design</span></router-link>
                  <ul>
                      <li>
                          <img :src="youTube" class="svg-icon"/>
                      </li>
                      <li>
                          <img :src="twitter" class="svg-icon"/>
                      </li>
                      <li>
                          <img :src="instagram" class="svg-icon"/>
                      </li>
                      <li>
                          <img :src="linkedin" class="svg-icon"/>
                      </li>
                  </ul>
              </div>
              <div class="col-2">
                  <ul>
                    <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                    <router-link class="link" :to="{ name: 'About' }">About</router-link>
                    <router-link class="link" :to="{ name: 'About' }">Contact us</router-link>
                    <router-link class="link" :to="{ name: 'About' }">Register / Login</router-link>
                  </ul>
              </div>
          </div>
          <div class="right">
              <p>Copyright 2021 All Rights Reserved</p>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    name: "Footer",
    components: {},
    data() {
        return {
            youTube: require("../assets/Icons/youtube-brands.svg"),
            twitter: require("../assets/Icons/twitter-brands.svg"),
            instagram: require("../assets/Icons/instagram-brands.svg"),
            linkedin: require("../assets/Icons/linkedin-brands.svg")
        };
    },
};
</script>

<style lang="scss" scoped>
footer {
    margin-top: auto;
    padding: 50px 25px;
    background-color: rgb(30, 32, 34);
    }
    .container {
        display: flex;
        flex-direction: column;
        gap: 32px;
        @media (min-width: 800px) {
            flex-direction: row;
            gap: 0px;
        }
        
        > div {
            display: flex;
            flex: 1;
        }

        .left {
            gap: 32px;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media (min-width: 800px) {
                flex-direction: row;
                align-items: initial;
                gap: 0;
            }

            .header {
                text-align: center;
                font-size: 24px;
                color: #fff;
                text-decoration: none;
                font-weight: 600;
                @media (min-width: 800px) {
                    text-align: initial;
                }
            }
            span {
                color: rgb(240, 166, 30);
            }
            ul{
                gap: 16px;
                list-style: none;
                display: flex;
            }

            .col-1
            .col-2 {
                gap: 32px;
                display: flex;
                flex: 1;
                @media (min-width: 800px) {
                    gap: 0;
                }
            }

            .col-1 {
                flex-direction: column;
                margin-right: 20px;
            }

            h2 {
                text-align: center;
                @media (min-width: 800px) {
                    text-align: initial;
                }
            }
            ul {
               margin-top: auto; 


               li {
                   display: flex;
                   align-items: center;
                   .svg-icon {
                       margin: 0 -2px;
                       width: 24px;
                       height: auto;
                       
                   }
                   .svg-icon:hover {
                       fill: red;
                   }
               }
            }
        }

        .col-2 {
            ul {
                height: 100%;
                justify-content: center;
                flex-direction: row;
                flex-wrap: wrap;
                @media (min-width: 800px) {
                    flex-direction: column;
                }
                .link {
                    font-size: 16px;
                    font-weight: 500;
                    color: #fff;
                    text-decoration: none;
                    transition: .3s color ease;

                    &:hover {
                        text-decoration: underline;
                        color: rgb(240, 166, 30);
                    }
                }
            }
        }
    }

    .right {
        gap: 32px;
        color: #fff;
        align-items: center;
        flex-direction: column;
        @media (min-width: 800px) {
            align-items: flex-end;
            gap: 0;
        }
    }

    p {
        margin-top: auto;
    }
</style>