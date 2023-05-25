import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    externals:['vite','rollup'],
    // Generates .d.ts declaration file
    declaration: true,
    failOnWarn:false,
    rollup:{
      inlineDependencies: true,
    }
})