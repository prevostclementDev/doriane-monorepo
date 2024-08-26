<script setup>
import Error from "../icons/error.vue";
import Flex from "../flex.vue";
import Eyes from "../icons/eyes.vue";
import EyesClose from "../icons/eyesClose.vue";
import Button from "../Button.vue";

const props = defineProps({
  type: {
    type : String,
    default : 'text'
  },
  name : {
    type : String,
    default : ''
  },
  placeholder: {
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
  }
})

const refType = ref(props.type);
</script>

<template>
  <div class="wrapper-input">

    <div class="wrapper-label-input">
      <div class="title" v-if="title !== ''">
        {{ title }}
      </div>

      <div class="layoutInput">
        <input
            :type="refType"
            :name="props.name"
            :placeholder="props.placeholder"
            :value="props.modelValue"
            :disabled="props.disabled"
            @input="$emit('update:modelValue', $event.target.value)"
        >
        <div class="action" v-if="props.type === 'password'">
          <Button type="clear">
            <eyes
                v-if="refType === 'password'"
                @click="refType = 'text'"
                type="dark"
            />
          </Button>
          <Button type="clear">
            <eyes-close
                v-if="refType === 'text'"
                @click="refType = 'password'"
                type="dark"
            />
          </Button>
        </div>
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

      input {
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