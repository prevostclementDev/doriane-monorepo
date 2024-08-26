<script setup>
import Chevron from "./icons/chevron.vue";
import Flex from "./flex.vue";
import Box from "./box.vue";
import Input from "./form/input.vue";
import Button from "./Button.vue";
import Logout from "./icons/logout.vue";

const profileOpen = ref(false)

</script>

<template>
  <div class="wrapper-profile">

    <div class="popover" @click.prevent="profileOpen = ! profileOpen">
      <flex justify="space-between" direction="row">

        <img src="" alt="">
        <p>Marine Lemont</p>
        <div :class="'chevron ' + ((profileOpen) ? 'open' : 'close')">
          <chevron type="dark" />
        </div>

      </flex>
    </div>

    <div class="profile" v-show="profileOpen">
      <box type="default">
        <flex direction="column">
          <h2>Mon compte</h2>
          <Input
              title="Nom"
          />
          <Input
              title="prénom"
          />

          <div class="action">
            <Button type="secondary">Changer de mot de passe</Button>
            <Button type="secondary">Changer d’email</Button>
          </div>

          <flex justify="flex-end">
            <Button type="secondary"><flex><Logout /></flex></Button>
            <Button type="primary">Enregistrer</Button>
          </flex>

        </flex>

      </box>
    </div>

  </div>
</template>

<style scoped lang="scss">
.wrapper-profile {
  width: 100%;
  position: relative;
  padding-left: 1rem;

  .popover {
    @include bgColor(light1);
    border-radius: 1.6875rem 0 0 1.6875rem;
    padding: .5rem;
    width: 100%;
    user-select: none;
    cursor: pointer;

    img {
      width: 50px;
      height: 50px;
      background: gray;
      border-radius: 50%;

    }

    p {
      @include typographie(textBold);
      @include color(primary0)

    }

    .chevron {
      @include flex();
      width: fit-content;
      height: fit-content;
      transform: rotate(180deg);
      transform-origin: center;
      transition: .2s ease-in-out all;

      &.open {
        transform: rotate(0);

      }

    }

  }

  .profile {
    position: absolute;
    display: inline-block;
    right: 0;
    bottom: 0;
    transform: translate(100%, 0);
    width: 400px;

    h2 {
      @include color(primary0);
      width: 100%;

    }

    .action {
      display: flex;
      align-items: stretch;
      flex-direction: column;
      gap: .5rem;
      margin: 1rem 0;

    }


  }

}
</style>