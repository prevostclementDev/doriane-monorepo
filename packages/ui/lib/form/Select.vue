<script setup>
import Error from "../icons/error.vue";
import Flex from "../flex.vue";

const props = defineProps({
  name : {
    type : String,
    default : ''
  },
  disabled: {
    type : Boolean,
    default : false
  },
  title : {
    type : String,
    default : ''
  },
  error : {
    type : String,
    default : ''
  },
  modelValue : {
    type : String,
    default : ''
  },
  options : {
    type : Array,
    default : []
  },
})
</script>

<template>
  <div class="wrapper-input">

    <div class="wrapper-label-input">
      <div class="title" v-if="title !== ''">
        {{ title }}
      </div>

      <div class="layoutInput">
        <select
            :name="props.name"
            :disabled="props.disabled"
            @input="$emit('update:modelValue', $event.target.value)"
        >
          <option v-for="option in props.options" :value="option.value" :selected="option.value === modelValue">{{ option.title }}</option>
        </select>
      </div>

      <div v-if="props.error !== ''" class="error">
        <flex align="center" justify="flex-start" gapcol="0.2rem" gaprow="0">
          <error type="dark" />
          <p>{{ props.error }}</p>
        </flex>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.wrapper-input {
  width: 100%;
  height: fit-content;

  .wrapper-label-input {

    .title {
      margin-bottom: .5rem;
      @include typographie(textBold);
      @include color(primary0);

    }

    .layoutInput {
      position: relative;

      select {
        @include interaction(input);
        @include typographie(text);
        @include color(primary0);

        &::placeholder {
          @include typographie(textLight);
          @include color(primary0);

        }

      }

      .action {
        @include flex();
        position: absolute;
        top: 50%;
        right: .5rem;
        transform: translateY(-50%);

        button {
          @include flex();

        }

      }

    }

    .error {
      @include color(error1);
      margin-top: .5rem;
      width: 100%;

    }

  }

}
</style>