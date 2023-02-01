<template>
  <div class="hello">
    <h1>Pokemon Chooser</h1>
    <br /><br />
    <div class="container">
      <div class="row">
        <div
          class="pokemonPicker"
          v-for="(pokemon, index) in activeList"
          :key="index"
        >
          <div :id="pokemon.name" class="col-lg-6 mb-4">
            <div class="card">
              <img class="card-img-top" :src="pokemon.image" alt="" />

              <div class="card-body">
                <h5 class="card-title">{{ pokemon.name }}</h5>

                <button
                  id="btnClick1"
                  href="#"
                  class="btn btn-outline-primary btn-sm"
                  @click="iChooseYou(pokemon.id)"
                >
                  <span><i :class="getIcon(pokemon.hearted)"></i></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      pokemonList: [
        {
          id: 1,
          name: "Bulbasaur",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
          hearted: false,
        },
        {
          id: 2,
          name: "Squirtle",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
          hearted: false,
        },
        {
          id: 3,
          name: "Charmander",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
          hearted: false,
        },
        {
          id: 4,
          name: "Caterpie",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
          hearted: false,
        },
        {
          id: 5,
          name: "Metapod",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
          hearted: false,
        },
        {
          id: 6,
          name: "Butterfree",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
          hearted: false,
        },
        {
          id: 7,
          name: "Ratata",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
          hearted: false,
        },
        {
          id: 8,
          name: "Ekans",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
          hearted: false,
        },
        {
          id: 9,
          name: "Pikachu",
          image:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
          hearted: false,
        },
      ],
      activeList: [],
      topPokemonList: [],
      arrayNumbers: [1, 2],
      count: 0,
      btnIcon: `<i class="fa-regular fa-heart"></i>`,
      btnIcon1: `<i class="fa-regular fa-heart"></i>`,
    };
  },
  beforeMount: function() {
    this.activeList = this.pokemonList.splice(0, 2);
  },
  created() {
    // let lastPos = (this.$data.pokemonList).length -1<
    // let randomNumber = Math.random() * (lastPos - 0) + 0
    // let pokemonName = (this.$data.pokemonList)[randomNumber].name
    // let pokemonImg = (this.$data.pokemonList)[randomNumber].image
  },
  computed: {},
  methods: {
    iChooseYou(pokemonId) {
      this.activeList.map((pokemon) => {
        if (pokemon.id == pokemonId) {
          pokemon.hearted = !pokemon.hearted;
        } else if (pokemon.hearted == true) {
          this.topPokemonList.push(pokemon);
        }
      });

      setTimeout(() => {
        this.getNewPokemon(pokemonId);
      }, 2000);
    },
    getNewPokemon(pokemonId) {
      let randomNumber = this.generateRandom(1, 9, this.arrayNumbers);
      console.log(randomNumber);
      if (pokemonId != randomNumber && this.pokemonList.length != 1) {
        for (let i = 0; i < this.activeList.length; i++) {
          if (this.activeList[i].id == pokemonId) {
            this.activeList.splice(i, 1);
            if (pokemonId != 1 && pokemonId != 2) {
              this.arrayNumbers.push(pokemonId);
              console.log("not bulbasaur or squirtle");
            } else {
              alert("already in array number");
            }
          }
        }
        this.activeList.push(this.pokemonList[randomNumber]);
        this.pokemonList.splice(randomNumber, 1);
        this.arrayNumbers.push(pokemonId);
      } else if (this.pokemonList.length <= 1) {
        this.topPokemonList.push(this.pokemonList[0]);
      }
    },
    getIcon(heart) {
      return !heart ? "fa-regular fa-heart" : "fa-solid fa-heart";
    },
    generateRandom(min, max, numArr) {
      this.myFunc(numArr)
      console.log("numArr: ", numArr);
      let num = Math.floor(Math.random() * (max - min + 1)) + min;
      let randomNum;
      for (let i = 0; i < numArr.length; i++) {
        randomNum = num === numArr[i] ? this.generateRandom(min, max) : num;
      }
      return randomNum;
    },
    myFunc(a) {
      if (a !== undefined) {
        console.log(a.length);
      } else {
        console.log(a.length);        
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.hello {
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 50px;
}

.pokemonPicker {
  width: 50%;
}

#Bulbasaur {
  float: left;
  width: 90%;
}

#Squirtle {
  float: right;
  width: 90%;
}
</style>
