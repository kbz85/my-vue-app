<template>
    <div>
        <ColorPicker v-model:pure-color="selector"  @pure-color-change="changevalue"></ColorPicker>
        <!-- < v-model:value="selector"></> @pure-color-change="changevalue"-->
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
const props = defineProps<{
    color: string
}>()
const selector = ref('')
function changevalue(value:string) {
    const dom = document.documentElement
    // const dom = document.getElementById('app') as HTMLDivElement
    const strTailwind = value.substring(value.indexOf('(') + 1, value.indexOf(')')).replaceAll(',', ' ').trim()
    dom.style.setProperty('--primary-color', value)
    dom.style.setProperty('--primary-color-tailwindcss', strTailwind)
    console.log(dom.style.getPropertyValue('--primary-color'), dom.style.getPropertyValue('--primary-color-tailwindcss'));
    
}
onMounted(() => {
    selector.value = props.color
})
</script>
<style lang='less'></style>