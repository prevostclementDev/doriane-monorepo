<script setup>
import Calendar from "./icons/calendar.vue";
import Pedagogie from "./icons/pedagogie.vue";
import Users from "./icons/users.vue";
import Notifications from "./icons/notifications.vue";
import Params from "./icons/params.vue";
import Docs from "./icons/docs.vue";

const props = defineProps({
  icon : {
    type : String,
    required : true,
  },
  text : {
    type : String,
    required : true,
  },
  type : {
    type : String,
    required : true,
    default : 'dark'
  }
})
</script>

<template>
  <div :class="'icon-text ' + props.type">
      <div class="icon">

        <calendar v-if="props.icon == 'calendar'" :type="props.type" />
        <Users v-else-if="props.icon == 'users'" :type="props.type" />
        <pedagogie v-else-if="props.icon == 'pedagogie'" :type="props.type" />
        <notifications v-else-if="props.icon == 'notification'" :type="props.type" />
        <params v-else-if="props.icon == 'params'" :type="props.type" />
        <docs v-else-if="props.icon == 'docs'" :type="props.type" />

      </div>
      <div class="text">
        {{ props.text }}
      </div>
  </div>
</template>

<style scoped lang="scss">
.icon-text {
  width: fit-content;
  height: fit-content;
  @include flex();

  .text {
    @include typographie(h2);
    @include flex();
    margin-left: 0.7rem;

  }

  .icon {
    @include flex();

    svg {
      height: 1.5rem;
      width: 1.5rem;

    }

  }

  &.dark {
    @include color(primary0);

  }

  &.light {
    @include color(light1);

  }

  &.small {

    .text {
      @include fontSize(sm)

    }

  }

}
</style>