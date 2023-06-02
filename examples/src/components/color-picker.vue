<!--
 * @Author: kbz85 248997917@qq.com
 * @Date: 2023-05-25 10:14:21
 * @LastEditors: kbz85 248997917@qq.com
 * @LastEditTime: 2023-05-30 11:44:56
 * @FilePath: \my-vue-app\examples\src\components\color-picker.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <ColorPicker v-model:pure-color="selector" @pure-color-change="changevalue"></ColorPicker>
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
const props = defineProps<{
    colorKey: string
}>()
const selector = ref('')
function changevalue(value: string) {
    let strTailwind = ''
    if (value.includes('rgba')) {
        const startIndex = value.indexOf('(') + 1
        const lastIndex =  value.lastIndexOf(',')
        strTailwind = value.substring(startIndex, lastIndex).replaceAll(',', ' ').trim();
    } else {
        strTailwind = value.substring(value.indexOf('(') + 1, value.indexOf(')')).replaceAll(',', ' ').trim();
    }
    document.documentElement.style.setProperty('--' + props.colorKey, value)
    if (strTailwind !== '') document.documentElement.style.setProperty('--' + props.colorKey + '-tailwindcss', strTailwind)
}
onMounted(() => {
    selector.value = document.documentElement.style.getPropertyValue('--' + props.colorKey)
})
</script>
<style lang='less'></style>