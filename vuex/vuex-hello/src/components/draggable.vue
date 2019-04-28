<template>
  <div class="fluid container">
    <div class="col-md-3">
      <draggable class="list-group" v-model="list">
        <transition-group type="transition" :name="'flip-wnnn'">
          <li class="list-group-item" v-for="(element, index) in list" :key="element.order">
            <div>
              <div></div>
              {{element.name}}
            </div>
            <span class="badge">{{index}}</span>
          </li>
        </transition-group>
      </draggable>
    </div>
    <div class="list-group col-md-3">
      <pre>{{listString}}</pre>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
const message = [
  '第一页',
  '第二页',
  '第三页',
  '第四页',
  '第五页'
]
export default {
  name: 'hello',
  components: {
    draggable
  },
  data () {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false }
      })
    }
  },
  computed: {
    listString () {
      return JSON.stringify(this.list, null, 2)
    }
  },
  watch: {
  }
}
</script>

<style>
.flip-wnnn-move {
  transition: transform 2s;
}
.no-move {
  transition: transform 0s;
}
/* .ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
} */
</style>
