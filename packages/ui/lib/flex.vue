<script setup>
const props = defineProps({
  justify : {
    type : String,
    default : 'center'
  },
  align : {
    type : String,
    default : 'center'
  },
  direction : {
    type : String,
    default : 'row'
  },
  wrap : {
    type : String,
    default : 'nowrap'
  },
  gaprow : {
    type : String,
    default : '1rem'
  },
  gapcol : {
    type : String,
    default : '1rem'
  }
})
</script>

<template>
  <div class="flex" :style="{
    justifyContent : props.justify,
    alignItems : props.align,
    flexDirection : props.direction,
    wrap : props.wrap,
    rowGap : props.gaprow,
    columnGap : props.gapcol
  }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.flex {
  display: flex;
  width: 100%;
  height: 100%;

}
</style>