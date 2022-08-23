<template>
  <div className="box-main" id="main-market">
    <div className="box-body">
      <a-row 
        :gutter="[16,16]"
        v-if="dataItem.list?.length !== 0"
      >
        <a-col 
          :xs="12" 
          :md="8" 
          :lg="8" 
          :xl="6"
          v-for="(dataItem, index) in dataItem.list"
          :key="index"
        >
          <div
            className="item"
          >
            <div>
              <Item :data-Item="dataItem" />
            </div>
          </div>
        </a-col>
      </a-row>
      <a-row 
        :gutter="[16,16]"
        v-else
      >
        <a-col 
          :xs="12" 
          :md="8" 
          :lg="8" 
          :xl="6"
        >
          <div class="noData">No Data</div>
        </a-col>
      </a-row>
      <div className="pagination mt-30">
        <a-pagination v-model:current="current" :total="total" show-less-items />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "../../components/item/item.vue";
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  components: {
    Item,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    data: {
      type: Object,
    },
  }, 

  setup(props, context){
    const dataItem = ref([])
    const total = ref(0)
    // eslint-disable-next-line vue/no-setup-props-destructure
    watch(props, () => {
      dataItem.value = props?.data?.data
      total.value = props?.data?.data.total_page
    })
    // console.log('props', props)

    return {dataItem, total, current: ref(props?.data?.data?.page)}
  },
})
</script>

<style lang='scss'>
#main-market {
    width: calc(100% - 240px);
    margin-left: 240px;
}
.noData{
  font-size: 2rem;
  color: #fff;
  text-align: center;
}
</style>