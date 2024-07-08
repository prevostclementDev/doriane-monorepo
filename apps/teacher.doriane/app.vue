<script setup>
import {useRouting} from "@doriane/stores/lib/routing";

const routing = useRouting()
</script>

<template>
  <div>
    <h1>Bonjour</h1>
    {{ $hello('Apps') }}

    <ui-Btn>test 2</ui-Btn>
    <ui-test-link-test />

    <nuxt-link :to="routing.url.planningSingle(10)">Creer des données</nuxt-link>

    <VueDatePicker></VueDatePicker>

  </div>
</template>
