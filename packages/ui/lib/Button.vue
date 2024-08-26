<script setup>
const props = defineProps({
  type : {
    type : String,
    required : false,
    default : 'primary'
  },
  onclick : {
    type: Function,
    required : false
  }
})
</script>

<template>
  <button
    @click="(e) => onclick(e)"
    :class="props.type"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {

  &.primary {
    @include interaction(button-primary);

  }

  &.secondary {
    @include interaction(button-secondary);

  }

  &.clear {
    @include interaction(button-clear);

  }

  &.full {
    width: 100%;

  }

}
</style>