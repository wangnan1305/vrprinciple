<template>
  <div class="parent">
    <h3>vuex  </h3>
    <p>{{obj}}</p>
    <p>{{count}}</p>
    <Button :value="'+'" @changeValue="addAction(10)"/>
    <Button :value="'-'" @changeValue="reduceAction(10)" />
    <button @click="addAction(10)">+</button>
    <button @click="reduceAction(10)">-</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import Button from './button.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Button
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
<style lang="less" scoped>
.btn-parent{
  // background: green;
  /deep/.button{
    background: green
  }
}

</style>
