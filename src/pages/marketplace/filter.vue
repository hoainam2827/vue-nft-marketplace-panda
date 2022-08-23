<template>
    <div className="box-filter" id="filter-market">
      <div className="wrap-filter">
        <div className="mb-20 clear-filter">
          <span>Filter</span>

          <span
            className="action-clear"
            @click="handleClearFilter"
          >
            Clear filter
          </span>
        </div>

        <div className="mb-20">
          <div className="custom-radio">
            <a-radio-group v-model:value="value" @change="handlerChangeValueSearch">
              <a-radio 
                v-for="(type, index) in TYPE"
                :style="radioStyle" 
                :value="type.value"
                :key="index"
              >
                {{type.name}}
              </a-radio>
            </a-radio-group>
          </div>
        </div>
      </div>
    </div>

    <!-- <div className="filter-market-mb">
      <div className="mb-20 clear-filter">
        <span
          className="action-clear"
          @onClick="handleClearFilter"
        >
          Clear filter
        </span>
      </div>

      <div className="mb-20">
        <div className="custom-radio">
          <a-radio-group v-model:value="value">
            <a-radio 
              v-for="(type, index) in TYPE"
              :style="radioStyle" 
              :value="type.value"
              :key="index"
            >
              {{type.name}}
            </a-radio>
          </a-radio-group>
        </div>
      </div>
    </div> -->
</template>

<script>
import { defineComponent, reactive, ref, watch } from 'vue';
export default defineComponent({
  props: {
    valueSearch: {
      type: Object,
    },
  },
  setup(props, context) {
    const TYPE = ref([
      {
        name: 'Normal',
        value: 'NORMAL'
      },
      {
        name: 'Rare',
        value: 'RARE'
      },
      {
        name: 'Super Rare',
        value: 'SUPER_RARE'
      },
      {
        name: 'Epic',
        value: 'EPIC'
      },
      {
        name: 'Legendary',
        value: 'LEGENDARY'
      },
      {
        name: 'Mythic',
        value: 'MYTHIC'
      }
    ])
    const value = ref('');
    const radioStyle = reactive({
      display: 'flex',
      height: '30px',
      lineHeight: '30px',
    });

    const handlerChangeValueSearch = () => {
      // eslint-disable-next-line vue/no-mutating-props
      props.valueSearch.value = value.value
      context.emit('update-item', props.valueSearch.value)
      // console.log('props.valueSearch.value', props.valueSearch.value)
    }

    const handleClearFilter = () => {
      // eslint-disable-next-line vue/no-mutating-props
      value.value = ''
      handlerChangeValueSearch()
    }

    handlerChangeValueSearch()

    return {
      value,
      radioStyle,
      TYPE,
      handlerChangeValueSearch,
      handleClearFilter
    };
  },

});
</script>

<style>

</style>