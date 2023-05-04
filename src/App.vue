<template>
  <div class="w-full h-full p-5 demo">
    <div class="">
      <div class="w-full m-3">主题色</div>
      <div class="w-full h-[120px] flex">
        <div class="w-[150px] h-[100px] mx-3">
          <div class="w-full h-[70%] bg-primary rounded-t"></div>
          <div class="w-[50%] h-[30%] bg-primary bg-opacity-50 rounded-bl float-left"></div>
          <div class="w-[50%] h-[30%] bg-primary bg-opacity-10 rounded-br float-left"></div>
        </div>
        <div class="w-[150px] h-[100px] mx-3">
          <div class="w-full h-[70%] bg-success rounded-t"></div>
          <div class="w-[50%] h-[30%] bg-success bg-opacity-50 rounded-bl float-left"></div>
          <div class="w-[50%] h-[30%] bg-success bg-opacity-10 rounded-br float-left"></div>
        </div>
        <div class="w-[150px] h-[100px] mx-3">
          <div class="w-full h-[70%] bg-alarm rounded-t"></div>
          <div class="w-[50%] h-[30%] bg-alarm bg-opacity-50 rounded-bl float-left"></div>
          <div class="w-[50%] h-[30%] bg-alarm bg-opacity-10 rounded-br float-left"></div>
        </div>
        <div class="w-[150px] h-[100px] mx-3">
          <div class="w-full h-[70%] bg-warning rounded-t"></div>
          <div class="w-[50%] h-[30%] bg-warning bg-opacity-50 rounded-bl float-left"></div>
          <div class="w-[50%] h-[30%] bg-warning bg-opacity-10 rounded-br float-left"></div>
        </div>
        <div class="w-[150px] h-[100px] mx-3">
          <div class="w-full h-[70%] bg-error rounded-t"></div>
          <div class="w-[50%] h-[30%] bg-error bg-opacity-50 rounded-bl float-left"></div>
          <div class="w-[50%] h-[30%] bg-error bg-opacity-10 rounded-br float-left"></div>
        </div>
        <div class="w-[150px] h-[100px] mx-3">
          <div class="w-full h-[70%] bg-info rounded-t"></div>
          <div class="w-[50%] h-[30%] bg-info bg-opacity-50 rounded-bl float-left"></div>
          <div class="w-[50%] h-[30%] bg-info bg-opacity-10 rounded-br float-left"></div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="w-full m-3">按钮</div>
      <a-button class="mx-3" type="primary">primary</a-button>
      <a-button class="mx-3" type="success" @click="success">success</a-button>
      <a-button class="mx-3" type="alarm">alarm</a-button>
      <a-button class="mx-3" type="warning" @click="warning">warning</a-button>
      <a-button class="mx-3" type="error" @click="error">error</a-button>
      <a-button class="mx-3" type="info" @click="info">info</a-button>
    </div>
    <div class="mt-3">
      <div class="w-full m-3">标签</div>
      <a-tag class="mx-3" type="primary">primary</a-tag>
      <a-tag class="mx-3" type="success">success</a-tag>
      <a-tag class="mx-3" type="alarm">alarm</a-tag>
      <a-tag class="mx-3" type="warning">warning</a-tag>
      <a-tag class="mx-3" type="error">error</a-tag>
      <a-tag class="mx-3" type="info">info</a-tag>
    </div>
    <div class="mt-3">
      <div class="w-full m-3">警告提示</div>
      <a-alert class="mx-3" message="primary Text" type="primary" />
      <a-alert class="mx-3" message="success Text" type="success" />
      <a-alert class="mx-3" message="alarm Text" type="alarm" />
      <a-alert class="mx-3" message="warning Text" type="warning" />
      <a-alert class="mx-3" message="error Text" type="error" />
      <a-alert class="mx-3" message="info Text" type="info" />
    </div>
    <div class="">
      <div class="w-full m-3">文字</div>
      <div class="flex flex-col">
        <div class="text-title text-4xl m-3">标题</div>
        <div class="text-default text-4xl m-3">正文</div>
        <div class="text-secondary text-4xl m-3">次级</div>
        <div class="text-disabled text-4xl m-3">禁用、失效</div>
        <div class="text-white  text-4xl m-3 bg-[#000] w-[80px]">白色</div>
      </div>
      <div class="w-full m-3">组件文字演示</div>
      <div class="w-full m-3">select选择器</div>
      <div class="flex">
        <a-select ref="select" v-model:value="value1" style="width: 120px" @focus="focus" @change="handleChange">
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled" disabled>Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
        <a-select v-model:value="value2" style="width: 120px" disabled>
          <a-select-option value="lucy">Lucy</a-select-option>
        </a-select>
        <a-select v-model:value="value3" style="width: 120px" loading>
          <a-select-option value="lucy">Lucy</a-select-option>
        </a-select>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { message } from 'ant-design-vue';
import { setStyleDom } from './styles/color';
import { ref } from 'vue';
setStyleDom()
const success = () => {
  message.success('This is a success message', 100);
};
const error = () => {
  message.error('This is an error message', 100);
};
const warning = () => {
  message.warning('This is a warning message', 100);
};
const info = () => {
  message.info('This is a info message', 100);
};
const value1 = ref('jack')
const value2 = ref('lucy')
const value3 = ref('lucy')
</script>
<style lang="less" scoped>
.demo {
  overflow-x: hidden;
}
</style>
