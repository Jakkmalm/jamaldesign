<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
  </div>
  <div class="updates">
    <div class="container">
      <h2>Register to get a limited 25% off on your website!</h2>
      <router-link class="router-button" :to="{ name: 'About' }">
        Register for JamalDesign <img :src="Arrow" class="arrow arrow-light" />
      </router-link>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";

export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
      Arrow: require("../assets/Icons/arrow-right-light.svg"),
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "Are you looking for the perfect website? Have a look here.",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a Filler Title",
          blogHTML: "This is a Filler blog post title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filler Title2",
          blogHTML: "This is a Filler blog post title",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;

      &:hover {
        transform: translateY(-5px);
      }

      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;

      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
