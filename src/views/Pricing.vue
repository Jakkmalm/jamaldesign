<template class="template">
  <body>
    <div class="container">
      <h1>Choose your website</h1>

      <div class="product">
        <button class="dropdownBtn">Produkter</button>
        <div class="dropdown-content">
          <p @click="setProductPrice(5995)">One-pager (5995:-)</p>
          <p @click="setProductPrice(9995)">Hemsida (9995:-)</p>
          <p @click="setProductPrice(19995)">Webbshop (19995:-)</p>
        </div>
      </div>
      <div class="extent">
        <button class="dropdownBtn">Omfattning</button>
        <div class="dropdown-content">
          <p @click="setExtent(1)">Small</p>
          <p @click="setExtent(1.2)">Medium (+20%)</p>
          <p @click="setExtent(1.4)">Large (+40%)</p>
        </div>
      </div>
      <div class="adding">
        <button class="dropdownBtn">Tillval</button>
        <div class="dropdown-content">
          <p @click="hasSelectedContactForm = !hasSelectedContactForm">Kontaktformulär +3000:-</p>
          <p @click="hasSelectedGallery = !hasSelectedGallery">Bildgalleri +4000:-</p>
          <p @click="hasSelectedMapfunction = !hasSelectedMapfunction">Kartfunktion +2500:-</p>
        </div>
      </div>
      <div class="price-div">
        <label class="totalPrice" for="totalPrice">Totalpris: {{ calculatedTotalPrice }} :- </label>
        <h2 class="chosen-products" v-if="this.calculatedTotalPrice > 1" >SHOPPINGBAG:   </h2>
        <p class="link" v-if="hasSelectedContactForm">Kontaktformulär <img class="remove-icon" :src="trashCan" @click="hasSelectedContactForm = !hasSelectedContactForm"></p>
        <p class="link" v-if="hasSelectedGallery">Bildgalleri <img class="remove-icon" :src="trashCan" @click="hasSelectedGallery = !hasSelectedGallery"></p>
        <p class="link" v-if="hasSelectedMapfunction">Kartfunktion <img class="remove-icon" :src="trashCan" @click="hasSelectedMapfunction = !hasSelectedMapfunction"></p>
        <p>SMALL</p>
        <p>MEDIUM</p>
        <p>LARGE</p>
        
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Pricing",
  data () {
    return {
      trashCan: require('../assets/Icons/trash-regular.svg'),

      totalPrice: 0,
      productPrice: 0,
      extent: 1,
      hasSelectedContactForm: false,
      hasSelectedGallery: false,
      hasSelectedMapfunction: false,
      small: false,
      medium: false,
      large: false,
    }
  },
  methods: {
    setProductPrice(price) {
      this.productPrice = price;
    },
    setExtent(extent) {
      this.extent = extent;
    }

  },
  computed: {
    calculatedTotalPrice: function() {
      let totalPrice = this.productPrice;
      if(
        this.hasSelectedContactForm
      ) {
        totalPrice += 3000;
      }
      if(
        this.hasSelectedGallery
      ) {
        totalPrice += 4000;
      }
      if(
        this.hasSelectedMapfunction
      ) {
        totalPrice += 2500;
      }
      return totalPrice * this.extent;
    },
    
  },
};
</script>

<style lang="scss" scoped>

body {
  background: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: auto;
  border-left: 5px solid rgb(240, 166, 30);
}

.arrow-light {

  @media (min-width: 750px) {
    position: relative;
    margin-right: 10px;
  }
  
}

h1 {
  text-align: left;
  margin-top: 50px;
  padding: 10px;
  transition: 300ms;

  @media (min-width: 800px) {
    font-size: 42px;
  }
}


.container {
  @media (max-width: 460px) {
   margin-left: 20px; 
  }
  
}

.product,
.extent,
.adding {
  width: 150px;
  padding: 0;
  transition: 500ms ease all;
  position: relative;
  margin: 80px 0;

  @media (min-width: 460px) {
    display: inline-block;
    flex-direction: row;
  }

  @media (min-width: 750px) {
    width: auto;
  }

  &:hover .dropdown-content{
    display: block;
    position: absolute;

    p:hover {
      border-right: 1px solid rgb(240, 166, 30);
      color: rgb(240, 166, 30);
      transition: .3s;
    }
  }
  
}

.dropdownBtn {
  margin-top: 0;
  width: 150px;

  @media (min-width: 750px) {
    position: relative;
    width: auto;
    font-size: 32px;
    border-radius: 40px;
    padding: 20px 40px;
  }
}

.dropdown-content {
  flex-direction: row;
  display: none;
  position: absolute;
  width: 100%;
  border-left: 2px solid black;

  @media (min-width: 750px) {

  }
}

.price-div {
  width: 50%;
  min-width: 200px;
  margin-top: 80px;
  padding: 12px 6px;

  @media (min-width: 460px) {
    padding: 10px 5px;
    margin-top: auto;
  }

  @media (min-width: 750px) {
    margin-top: 50px;
  }

  .link {
    cursor: default;
  }
  .remove-icon {
    cursor: pointer;
    position: relative;
    right: auto;
    height: 18px;
    width: auto;
  }
  

  .totalPrice {
    font-size: 24px;

    @media (min-width: 750px) {
      font-size: 32px;
    }
  }
}

.dropdown-content p {
  text-decoration: none;
  font-size: 14px;
  color: black;
  cursor: pointer;
  padding: 4px 4px;

  @media (min-width: 750px) {
    font-size: 16px;
  }
}



</style>