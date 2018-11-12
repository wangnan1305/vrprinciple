<template>
  <div>
    <h3>vuex
    <p>{{obj}}</p>
    <p>{{count}}</p>
    <button @click="addAction(10)">+</button>
    <button @click="reduceAction(10)">-</button>
  </h3>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapState(['obj', 'count']),
    ...mapGetters(['count'])
    // count () {
    //   return this.$store.getters.count
    // }
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
