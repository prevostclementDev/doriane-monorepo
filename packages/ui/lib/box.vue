<script setup>
const props = defineProps({
  type : {
    type : String,
    default : 'default',
    required : true,
  }
})
</script>

<template>
  <div :class="'box ' + props.type">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.box {
  border-radius: 0.625rem;
  padding: 1.5rem;

  &.small {
    padding: .8rem;

  }

  &.default {
    border: 1px solid getColor(primary1);
    @include bgColor(primary2);

  }

  &.success {
    border: 1px solid getColor(succes1);
    @include bgColor(succes0);

  }

  &.error {
    border: 1px solid getColor(error1);
    @include bgColor(error0);

  }

  &.light {
    border: 1px solid getColor(primary3);
    @include bgColor(light1);

  }

}
</style>