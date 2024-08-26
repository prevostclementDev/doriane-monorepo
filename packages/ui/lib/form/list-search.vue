<script setup>
import Search from "../icons/search.vue";
import Flex from "../flex.vue";
import Box from "../box.vue";
import Button from "../Button.vue";
import Close from "../icons/close.vue";
import Input from "./input.vue";
import Select from "./Select.vue";
import Cross from "../icons/cross.vue";

const props = defineProps({
  options : {
    type : Array,
    default : []
  },
  modelValue : {
    type : Array,
    default : []
  },
  onsubmit : {
    type : Function,
    default : (data) => {}
  }
})

const emit = defineEmits(['update:modelValue'])
const searchMenuOpen = ref(false)
const search = ref(props.modelValue)
const inputText = ref('')

watch(search, (nv,ov) => {
  renderValue()
}, { deep : true })

function toggleSearchMenu() { searchMenuOpen.value = ! searchMenuOpen.value }

function addSearch() {
  search.value.push({ column : props.options[0].value, value : '' })
  renderValue()
}
function removeSearch(index) {
  delete search.value.splice(index, 1)
  renderValue()
}

function renderValue() {
  inputText.value = ''

  search.value.forEach((item, index) => {
    console.log(item.column)
    inputText.value += searchOptionsTitle(item.column) + ' : ' + item.value

    if ( search.value.length - 1 !== index ) inputText.value += ' | '
  })

}

function searchOptionsTitle(value) {
  let title = ''
  props.options.forEach(item => {
    if ( item.value === value ) title = item.title
  })
  return title
}

function reset() {
  search.value = [];
  emit('update:modelValue', search.value)
  toggleSearchMenu()
}

function submit(){
  emit('update:modelValue', search.value)
  toggleSearchMenu()
}

renderValue()
</script>

<template>
  <div class="arraySearch">
    <div class="inputLayout">
      <label for="search">
        <flex gaprow=".5rem" gapcol=".5rem">
          <search type="dark" />
          <input
              placeholder="Rechercher"
              type="text"
              name="search"
              id="search"
              @click="toggleSearchMenu"
              @input="renderValue"
              v-model="inputText"
          />
        </flex>
      </label>
    </div>

    <div class="searchMenu" v-show="searchMenuOpen">
      <box type="light small">

        <div class="close">
          <flex justify="flex-end">
            <Button type="clear" :onclick="toggleSearchMenu">
              <close type="dark"></close>
            </Button>
          </flex>
        </div>

        <div class="input-rows">

          <div class="row-title">
            <flex>
              <div class="title-column">Colonne</div>
              <div class="title-column">Valeur</div>
            </flex>
          </div>

          <div class="containers-row">
            <flex direction="column">
              <div class="row" v-for="(item, index) in search">
                <flex>
                  <div class="input-column">
                    <Select
                        v-model="item.column"
                        :options="props.options"
                    />
                  </div>
                  <div class="input-column">
                    <Input
                        v-model="item.value"
                    />
                  </div>
                  <Button type="clear" :onclick="() => removeSearch(index)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z" fill="#A51313"/>
                    </svg>
                  </Button>
                </flex>
              </div>
            </flex>
          </div>

        </div>

        <div class="action">
          <flex direction="column">
            <flex>
              <Button type="clear" :onclick="addSearch">
                <cross type="dark" />
              </Button>
            </flex>
            <flex justify="flex-end">
              <Button type="secondary" :onclick="reset">Réinitialiser</Button>
              <Button :onclick="submit">Rechercher</Button>
            </flex>
          </flex>
        </div>

      </box>
    </div>

  </div>
</template>

<style scoped lang="scss">
.arraySearch {
  width: fit-content;
  height: fit-content;

  .inputLayout {
    border-bottom: 1px solid getColor(primary0);
    padding: .6rem 0;

    input {
      border: none;
      outline: none;
      background: transparent;

      @include typographie(textBold);
      @include color(primary0);
      @include fontSize(sm);

      &::placeholder {
        @include typographie(textLight);
        @include fontSize(sm);
        @include color(primary0);
        opacity: 1;

      }

    }

  }

  .searchMenu {
    display: inline-block;
    position: absolute;
    width: 600px;
    transform: translateY(-1px);

    .input-rows {

      .title-column {
        width: 50%;
        margin-bottom: .4rem;
        @include typographie(textBold);
        @include color(primary0);

      }

      .containers-row {

        .row {
          width: 100%;

          .input-column {
            width: 50%;

          }

        }

      }

    }

    .action {
      margin-top: 1.4rem;

    }

  }

}
</style>