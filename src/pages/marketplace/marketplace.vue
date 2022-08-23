<template>
  <div class="box-wrapper-public" id="wrapper-public">
    <div class="page-marketplace">
      <div class="d-flex justify-content-space-between my-30 top-marketplace">
        <div class="total-nft">
          {{total}} {{+total === 1 ? 'NFT' : 'NFTs'}}
        </div>

        <div class="box-sort">
          <span class="white-space-nowrap mr-8">Sort by:</span>
          <a-select
            v-model:value="value"
            label-in-value
            style="width: 120px"
            :options="options"
            @change="handleChange"
            class="select-default select-primary"
          ></a-select>
        </div>
      </div>

      <div className="d-flex position-relative main-marketplace">
        <Filter 
          :valueSearch = {valueSearch}
          @update-item="updateItem"
        />
        <BoxRight 
          :data="data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import Filter from "./filter.vue";
import BoxRight from "./boxRight.vue";
import axios from 'axios';
import queryString from 'query-string';
import { formatValueSearch } from '../../utils/common'
export default defineComponent({
  components: {
    Filter,
    BoxRight,
  },
  setup() {
    const data = ref([])
    const error = ref(null)
    const page = ref(1);
    const limit = ref(12);
    const total = ref(0);
    const valueSort = ref('');
    const valueSearch = ref({});


    const options = ref([{
      value: '1',
      label: 'Low to hight',
    }, {
      value: '-1',
      label: 'Hight to low',
    }]);

    const handleChange = value => {
      valueSort.value = value.value
    };

    const getListPanda = async() => {
      let payload = {}
      payload.limit = limit.value;
      payload.page = page.value;

      payload = {
        ...payload,
        ...valueSearch.value
      }

      payload = formatValueSearch(payload)

      if (valueSort.value) {
        payload.sortKey = 'price'
        payload.sortType = valueSort.value
      }

      const stringified = queryString.stringify(payload).trim();
      try {
        const instance = axios.create({
          baseURL: 'https://marketplace-api.panda-dev.vmo.group/api/'
        });
        const response = await instance.get(`order/pandas?${stringified}`)

        data.value = response.data
        total.value = response?.data?.data?.total_record
      } catch (error) {
        console.log(error.value)
      }
    }

    const updateItem = (e) => {
      valueSearch.value.rarity = e
      getListPanda()
    }

    watch(valueSort, () => {
      getListPanda();
    })

    return {
      value: ref({
        value: 'Lowest price',
      }),
      options,
      handleChange,
      data,
      total,
      valueSearch,
      updateItem,
      limit,
      page,
    };
  },

});
</script>

<style lang="scss">
@import "./style.scss"
</style>