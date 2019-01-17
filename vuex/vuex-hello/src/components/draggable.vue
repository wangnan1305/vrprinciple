<template>
  <div class="fluid container">
    <div class="form-group form-group-lg panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Sortable control</h3>
      </div>
      <div class="panel-body">
        <div class="checkbox">
          <label><input type="checkbox" v-model="editable">Enable drag and drop</label>
        </div>
        <button type="button" class="btn btn-default" @click="orderList">Sort by original order</button>
      </div>
    </div>

    <div class="col-md-3">
      <draggable class="list-group" v-model="list">
        <transition-group type="transition" :name="'flip-list'">
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
      }),
      editable: true,
      delayedDragging: false
    }
  },
  methods: {
    orderList () {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order
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
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
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
}
</style>
