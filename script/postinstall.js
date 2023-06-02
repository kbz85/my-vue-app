import fs from 'fs'

copyFileSync('./patches/ant-design-vue/lib/notification/style/index-pure.less', './node_modules/ant-design-vue/lib/notification/style/index-pure.less');
copyFileSync('./patches/ant-design-vue/lib/switch/style/index-pure.less', './node_modules/ant-design-vue/lib/switch/style/index-pure.less');
copyFileSync('./patches/vxe-table/styles/pager.scss', './node_modules/vxe-table/styles/pager.scss');
copyFileSync('./patches/vxe-table/styles/table.scss', './node_modules/vxe-table/styles/table.scss');
copyFileSync('./patches/vxe-table/styles/button.scss', './node_modules/vxe-table/styles/button.scss');
copyFileSync('./patches/vxe-table/styles/button.scss', './node_modules/vxe-table/styles/radio.scss');
copyFileSync('./patches/vxe-table/styles/button.scss', './node_modules/vxe-table/styles/input.scss');
copyFileSync('./patches/vxe-table/styles/button.scss', './node_modules/vxe-table/styles/form.scss');
copyFileSync('./patches/vxe-table/styles/button.scss', './node_modules/vxe-table/styles/switch.scss');
// copyFileSync('./patches/vxe-table/styles/button.scss', './node_modules/vxe-table/styles/default.scss');

function copyFileSync(source, target) {
 var targetFile = target;

 // If target is a directory, a new file with the same name will be created
 if (fs.existsSync(target)) {
     if (fs.lstatSync(target).isDirectory()) {
         targetFile = path.join(target, path.basename(source));
     }
 }

 fs.writeFileSync(targetFile, fs.readFileSync(source));
}