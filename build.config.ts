import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries:[{input:'./src/index'},{input:'./src/tailwind-preset-default'}],
    externals:['vite','rollup'],
    // Generates .d.ts declaration file
    declaration: true,
    failOnWarn:false,
    rollup:{
      inlineDependencies: true,
    }
})