<template>
<!-- "../../assets/images/nft/super-rare.jpg" -->
  <div
    class="default-item border-line-gradient"
  >
    <div class="d-flex justify-content-center position-relative">
      <img
        v-bind:src="imgNft[items?.panda_infor?.rarity?.replaceAll('_', '')?.toLocaleLowerCase()]"
        alt=""
        class="icon-item w-100"
      />

      <div class="rarity-properties">
        <div 
          v-bind:class="`rarity-default rarity-${items?.panda_infor?.rarity?.toLocaleLowerCase()}`"
        >
          {{getRarity(items?.panda_infor?.rarity)}}
        </div>

        <div class="d-flex flex-wrap">
          <div class="item-properties start-goal mr-4 mt-10">
            <img src="../../assets/icons/start-goal.svg" alt="" />
            <span>+ {{formatAmount(items?.panda_infor?.nft_effective?.start_gold)}}</span>
          </div>

          <div class="item-properties bonus white-space-nowrap mt-10">+ {{items?.panda_infor?.nft_effective?.min_bonus}} - {{items?.panda_infor?.nft_effective?.max_bonus}} (%)</div>
        </div>
      </div>
    </div>

    <div class="info">
      <div class="font-bubblegum fs-20">PANDA #{{items?.panda_infor?.token_id}}</div>
        <div class="d-flex align-center mt-4">
          <img src="../../assets/icons/crypto.svg" alt="" />
          <span class="fs-18 ml-8">{{formatAmount(items?.price)}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import { imgNft } from '../../assets/images/nft'
import { getRarity, formatAmount } from '../../utils/common'
export default {
  props: {
    dataItem: {
      type: Object,
    },
  },

  setup(props, context){
    const items = ref([])

    // eslint-disable-next-line vue/no-setup-props-destructure
    items.value = props?.dataItem
    console.log('props', props)
    // console.log('items.value', items.value)
    watch(props, () => {
      items.value = props?.dataItem
          console.log('items', items.value)
    })
    // console.log('props?.dataItem', props?.dataItem)
    return {items, imgNft, getRarity, formatAmount}
  }
}
</script>

<style lang="scss" scoped>
.default-item {
  position: relative;
  color: #FFFFFF;
  cursor: pointer;
  border-radius: 24px;

  &:before {
    border-radius: 22px;
  }

  .info {
    padding: 16px;
  }

  .icon-item {
    border-radius: 21px 21px 0 0;
  }

  .rarity-properties {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .price {
    display: flex;
    align-items: baseline;
    font-size: 20px;

    img {
      margin-right: 4px;
    }

    span {
      line-height: 1;
    }
  }

  .saled-at {
    font-size: 12px;
    line-height: 1;
  }

  .box-see-more {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%);
    border-radius: 24px;

    .btn-primary {
      min-width: 120px;
    }
  }

  &.show-detail {
    &:hover {
      .box-see-more {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>