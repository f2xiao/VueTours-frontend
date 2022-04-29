<template>
  <div>
      <div>
          <button @click="show">cart:
              <span>{{count}}</span>
          </button>
      </div>
      <div v-show="isShown" class="modal">box</div>
  </div>
</template>

<script>
export default {
    name:'Cart',
    props:['count'],
    data() {
    return {
      isShown:false,
      count: 0
    }
  },
  methods: {
    show(){
      this.isShown = !this.isShown;
    }
  },
}
</script>

<style>
.modal{
    height: 100px;
    width: 100px;
    background: pink;
}
</style>