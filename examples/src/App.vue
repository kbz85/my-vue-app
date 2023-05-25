<template>
  <div class="w-full h-full p-5 demo">
    <a-button type="priamry" @click="openDrawer">展示组件</a-button>
    <div class="">
      <a-divider>
        <span>主题色</span>
      </a-divider>
      <div class="flex my-2">
        <div class="w-[100px]">主题色：</div>
        <color-picker v-for="key of themeList" :colorKey="key + '-color'" :key="key"></color-picker>
      </div>
      <div class="flex my-2">
        <div class="w-[100px]">hover：</div>
        <color-picker v-for="key of themeList" :colorKey="key + '-color-hover'" :key="key"></color-picker>
      </div>
      <div class="flex my-2">
        <div class="w-[100px]">active:</div>
        <color-picker v-for="key of themeList" :colorKey="key + '-color-active'" :key="key"></color-picker>
      </div>
      <div class="flex my-2">
        <div class="w-[100px]">disable:</div>
        <color-picker v-for="key of themeList" :colorKey="key + '-color-disable'" :key="key"></color-picker>
      </div>
    </div>
    <div class="">
      <a-divider>
        <span>文字</span>
      </a-divider>
      <div class="flex flex-col">
        <div class="m-3 text-4xl text-title">
          标题<color-picker colorKey="title-color"></color-picker>
          <span class="m-2 text-base">
            用于：标题文字、主标题、次标题、表格标题、弹窗标题
          </span>
        </div>
        <div class="m-3 text-4xl text-default">
          正文<color-picker colorKey="text-color"></color-picker>
          <span class="m-2 text-base">
            用于：正文、表单标题、表单内容、表格内容文字、默认图标颜色、默认图标图里文字、选项卡默认文字、弹窗内容文字、进度条百分比文字、分页默认文字
          </span>
        </div>
        <div class="m-3 text-4xl text-secondary">
          次级<color-picker colorKey="text-color-secondary"></color-picker>
          <span class="m-2 text-base">
            用于：说明文字、进度条滚动条操作颜色、基础图标（默认下拉箭头、叉）
          </span>
        </div>
        <div class="m-3 text-4xl text-disabled">
          禁用、失效<color-picker colorKey="disabled-color"></color-picker>
          <span class="m-2 text-base">
            用于：禁用文字、失效图标颜色、提示性文字（请输入）
          </span>
        </div>
        <div class="text-white  text-4xl m-3 bg-[#000] w-[250px]">
          白色<color-picker colorKey="white-color"></color-picker>
          <span class="m-2 text-base">
            用于：含底色文字
          </span>
        </div>
      </div>
    </div>
    <div class="">
      <a-divider>
        <span>边框</span>
      </a-divider>
      <div class="w-full h-[120px] flex">
        <div class="w-[150px] h-[120px] mx-3 border-2 border-default border-solid rounded">
          <color-picker colorKey="border-color-base"></color-picker>
        </div>
        <div class="w-[150px] h-[120px] mx-3 border-2 border-split border-solid rounded">
          <color-picker colorKey="border-color-split"></color-picker>
        </div>
        <div class="w-[150px] h-[120px] mx-3 border-2 border-tip border-solid rounded">
          <color-picker colorKey="border-color-tip"></color-picker>
        </div>
        <div class="w-[150px] h-[120px] mx-3 border-2 border-disable border-solid rounded">
          <color-picker colorKey="border-color-disable"></color-picker>
        </div>
      </div>
    </div>
    <div class="">
      <a-divider>
        <span>阴影</span>
      </a-divider>
      <div class="w-full h-[150px] flex">
        <div class="w-[200px] h-full shadow-low mx-4"></div>
        <div class="w-[200px] h-full shadow-middle mx-4"></div>
        <div class="w-[200px] h-full shadow-high mx-4"></div>
        <div class="w-[200px] h-full shadow-higher mx-4"></div>
      </div>
    </div>
    <components-drawer v-model:show="componentsDrawerShow"></components-drawer>
  </div>
</template>
<script setup lang="ts">
import ColorPicker from './components/color-picker.vue'
import ComponentsDrawer from './components/ComponentsDrawer.vue'
import { ref } from 'vue';

const componentsDrawerShow = ref(false)
function openDrawer() {
  componentsDrawerShow.value = true
}
const themeList = ref([
  'primary', 'success', 'alarm', 'error', 'warning', 'info'
])

</script>
<style lang="less" scoped>
.demo {
  overflow-x: hidden;
}
</style>