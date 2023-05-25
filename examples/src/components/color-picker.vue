<template>
    <div>
        <ColorPicker v-model:pure-color="selector" @pure-color-change="changevalue"></ColorPicker>
        <!-- < v-model:value="selector"></> @pure-color-change="changevalue"-->
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
    const dom = document.getElementById('body') as HTMLDivElement
    let strTailwind = ''
    if (value.includes('rgba')) strTailwind = value.substring(value.indexOf('(') + 1, value.indexOf('1)')).replaceAll(',', ' ').trim();
    else strTailwind = value.substring(value.indexOf('(') + 1, value.indexOf(')')).replaceAll(',', ' ').trim();

    // const strTailwind = value.substring(value.indexOf('(') + 1, value.indexOf(')')).replaceAll(',', ' ').trim()
    dom.style.setProperty('--' + props.colorKey, value)
    if (strTailwind !== '') dom.style.setProperty('--' + props.colorKey + '-tailwindcss', strTailwind)
    // console.log(dom.style.getPropertyValue('--primary-color'), dom.style.getPropertyValue('--primary-color-tailwindcss'));
}
onMounted(() => {
    const dom = document.getElementById('body') as HTMLDivElement
    selector.value = dom.style.getPropertyValue('--' + props.colorKey)
})
</script>
<style lang='less'></style>