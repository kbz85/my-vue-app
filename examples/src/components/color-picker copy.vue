<template>
    <div>
        <ColorPicker v-model:pure-color="selector"></ColorPicker>
        <!-- < v-model:value="selector"></> @pure-color-change="changevalue"-->
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref, watch } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
const props = defineProps<{
    color: string
}>()
const selector = ref('')
watch(selector, (newV: string, oldV: string) => {
    if (newV === '' || oldV === '') return
    const styles = document.getElementsByTagName('style');
    const root = Array.from(styles).find(item => {
        return item.getAttribute('theme')
    })
    let oldStrTailwind = ''
    if (oldV.includes('rgba')) oldStrTailwind = oldV.substring(oldV.indexOf('(') + 1, oldV.indexOf('1)')).replaceAll(',', ' ').trim();
    else oldStrTailwind = oldV.substring(oldV.indexOf('(') + 1, oldV.indexOf(')')).replaceAll(',', ' ').trim();

    const strTailwind = newV.substring(newV.indexOf('(') + 1, newV.indexOf(')')).replaceAll(',', ' ').trim();
    console.log(newV, strTailwind, oldV, oldStrTailwind);
    
    if (root && root.textContent) {
        root.textContent = root.textContent.replaceAll(oldV, newV).replaceAll(oldStrTailwind, strTailwind)    
    }
})
onMounted(() => {
    selector.value = props.color
})
</script>
<style lang='less'></style>