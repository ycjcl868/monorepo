<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    increment() {
      // `this` will refer to the component instance
      this.count++
    }
  }
}
</script>

<template>
  <p>{{ msg }}</p>
  <p>{{ count }}</p>
  <button @click="increment">Add</button>
</template>
