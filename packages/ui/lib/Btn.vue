<template>
  <button>
    <slot></slot>
  </button>
</template>

<style  scoped lang="scss">
button {
  @include interaction(button-primary);

}
</style>
