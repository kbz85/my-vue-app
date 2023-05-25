<template>
    <div>
        <ColorPicker v-model:pure-color="selector"  ></ColorPicker>
        <!-- < v-model:value="selector"></> @pure-color-change="changevalue"-->
    </div>
</template>
<script lang='ts' setup>
import { ref, watch } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
const selector = ref('rgba(24,144,255, 1)')
watch(selector, (oldV:string, newV:string) => {
    console.log(oldV, newV);
    const styles = document.getElementsByTagName('style');
    const root = Array.from(styles).find(item => {
        return item.getAttribute('theme')
    })
    // console.log(root?.textContent);
})
// const changevalue = (oldV:string, value: string) => {
//     console.log(oldV, value);
//     const styles = document.getElementsByTagName('style');
//     const root = Array.from(styles).find(item => {
//         return item.getAttribute('theme')
//     })
//     console.log(root?.textContent);
    
//     if (root) {
//         root.style.setProperty('--primary-color', value);
//         let extractedString = value.substring(value.indexOf('(') + 1, value.indexOf(')'));
//         console.log(extractedString);
//         extractedString = extractedString.replaceAll(',', '')
//         root.style.setProperty('--primary-color-tailwindcss', extractedString);
//     }

// }
</script>
<style lang='less'></style>