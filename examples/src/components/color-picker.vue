<template>
    <div>
        <ColorPicker v-model:value="selector" @active-key-change="changevalue" @pure-color-change="changevalue" @gradient-color-change="changevalue"></ColorPicker>
        <!-- < v-model:value="selector"></> -->
    </div>
</template>
<script lang='ts' setup>
import { ref } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
const selector = ref()
const changevalue = (value:string) => {
    console.log(value);
    const root = document.documentElement;
    root.style.setProperty('--primary-color', value);
    
    // const styles = document.getElementsByTagName("style")
   
    // const theme = Array.from(styles).find((dom) => {
    //     return dom.getAttribute('theme')
    // })

    // console.log(theme);
}
</script>
<style lang='less'>
</style>