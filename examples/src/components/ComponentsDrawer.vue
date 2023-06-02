<template>
  <a-drawer v-model:visible="visibleDraw" class="custom-class" title="Basic Drawer" placement="right" width="1000px"
    :mask="false" :maskClosable="false" @after-visible-change="afterVisibleChange">
    <div class="mt-3">
      <div class="flex">
        <div class="bg-primary-color w-[100px] h-[50px]"></div>
        <div class="bg-success-color w-[100px] h-[50px]"></div>
        <div class="bg-warning-color w-[100px] h-[50px]"></div>
        <div class="bg-error-color w-[100px] h-[50px]"></div>
        <div class="bg-info-color w-[100px] h-[50px]"></div>
      </div>
      <div class="flex mt-3">
        <div class="bg-primary-color-hover w-[100px] h-[50px]"></div>
        <div class="bg-success-color-hover w-[100px] h-[50px]"></div>
        <div class="bg-warning-color-hover w-[100px] h-[50px]"></div>
        <div class="bg-error-color-hover w-[100px] h-[50px]"></div>
        <div class="bg-info-color-hover w-[100px] h-[50px]"></div>
      </div>
      <div class="flex mt-3">
        <div class="bg-primary-color-active w-[100px] h-[50px]"></div>
        <div class="bg-success-color-active w-[100px] h-[50px]"></div>
        <div class="bg-warning-color-active w-[100px] h-[50px]"></div>
        <div class="bg-error-color-active w-[100px] h-[50px]"></div>
        <div class="bg-info-color-active w-[100px] h-[50px]"></div>
      </div>
      <div class="flex mt-3">
        <div class="bg-primary-color-disabled w-[100px] h-[50px]"></div>
        <div class="bg-success-color-disabled w-[100px] h-[50px]"></div>
        <div class="bg-warning-color-disabled w-[100px] h-[50px]"></div>
        <div class="bg-error-color-disabled w-[100px] h-[50px]"></div>
        <div class="bg-info-color-disabled w-[100px] h-[50px]"></div>
      </div>
    </div>
    <div class="mt-3">
      <div class="my-3">
        <a-divider>
          <span>按钮</span>
        </a-divider>
        <div class="my-3">
          <a-button v-for="item of themeList" class="mx-3" :type="item" :key="item">
            <a-tooltip :title="item">
              <span>{{ item }}</span>
            </a-tooltip>
          </a-button>
        </div>
        <div class="my-3">
          <a-button v-for="item of themeList" class="mx-3" :type="item" :key="item" disabled>
            {{ item }}
          </a-button>
        </div>
        <div class="my-3">
          <a-button v-for="item of themeList" class="mx-3" :type="item + '-line'" :key="item">{{ item }}</a-button>
        </div>
        <div class="my-3">
          <a-button v-for="item of themeList" class="mx-3" :type="item + '-text'" :key="item">{{ item }}</a-button>
        </div>
        <div class="my-3">
          <a-button v-for="item of themeList" class="mx-3" size="small" :type="item" :key="item">{{ item }}</a-button>
        </div>
        <div class="my-3">
          <a-button v-for="item of themeList" class="mx-3" :type="item" :key="item">{{ item }}</a-button>
        </div>
        <div class="my-3">
          <a-button v-for="item of themeList" class="mx-3" size="large" :type="item" :key="item">{{ item }}</a-button>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <a-divider>
        <span>标签</span>
      </a-divider>
      <a-tag class="mx-3" v-for="item of themeList" :type="item" :key="item">primary</a-tag>
    </div>
    <div class="mt-3">
      <a-divider>
        <span>下拉菜单</span>
      </a-divider>
      <a-dropdown class="mx-3">
        <a-button type="primary">
          下拉框(hover展开)
        </a-button>
        <template #overlay>
          <a-menu>
            <a-menu-item><span>1st menu item111111111111</span></a-menu-item>
            <a-menu-item><span>1st menu item111111111111</span></a-menu-item>
            <a-menu-item><span>1st menu item111111111111</span></a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <a-dropdown :trigger="['click']" class="mx-3">
        <a-button type="primary">
          下拉框(点击展开)
        </a-button>
        <template #overlay>
          <a-menu>
            <a-menu-item><span>1st menu item111111111111</span></a-menu-item>
            <a-menu-item><span>1st menu item111111111111</span></a-menu-item>
            <a-menu-item><span>1st menu item111111111111</span></a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <a-dropdown :trigger="['contextmenu']" class="mx-3">
        <a-button type="primary" @click.prevent>
          下拉框(右键展开)
        </a-button>
        <template #overlay>
          <a-menu>
            <a-menu-item><span>1st menu item111111111111</span></a-menu-item>
            <a-menu-item><span>1st menu item111111111111</span></a-menu-item>
            <a-menu-item><span>1st menu item111111111111</span></a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <div class="mt-3">
      <a-divider>
        <span>警告提示</span>
      </a-divider>
      <a-alert class="mx-3" v-for="item of themeList" :type="item" :key="item" :message="item + 'Text'" />
    </div>
    <div class="mt-3">
      <a-divider>
        <span>select选择器</span>
      </a-divider>
      <div class="flex m-3">
        <a-select ref="select" v-model:value="value1" style="width: 120px">
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
    <div class="m-3">
      <a-divider>
        <span>分页</span>
      </a-divider>
      <a-pagination v-model:current="current" :total="500" />
    </div>
    <div class="m-3">
      <a-divider>
        <span>步骤条</span>
      </a-divider>
      <a-steps :current="1" status="error">
        <a-step title="Finished" description="This is a description." />
        <a-step title="In Progress" description="This is a description." />
        <a-step title="Waiting" description="This is a description." />
      </a-steps>
    </div>
    <div class="m-3">
      <a-divider>
        <span>多选框</span>
      </a-divider>
      <a-checkbox-group v-model:value="checkbox1" name="checkboxgroup" :options="plainOptions" />
      <div class="">
        <a-checkbox-group v-model:value="checkbox2" :options="optionsWithDisabled" disabled>
          <template #label="{ value }">
            <span style="color: red">{{ value }}</span>
          </template>
        </a-checkbox-group>
      </div>
    </div>
    <div class="m-3">
      <a-divider>
        <span>表单</span>
      </a-divider>
      <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="Activity name">
          <a-input v-model:value="formState.name" placeholder="请输入" />
        </a-form-item>
        <a-form-item label="Instant delivery">
          <a-switch v-model:checked="formState.delivery" />
        </a-form-item>
        <a-form-item label="Activity type">
          <a-checkbox-group v-model:value="formState.type">
            <a-checkbox value="1" name="type">Online</a-checkbox>
            <a-checkbox value="2" name="type">Promotion</a-checkbox>
            <a-checkbox value="3" name="type">Offline</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <a-form-item label="Resources">
          <a-radio-group v-model:value="formState.resource">
            <a-radio value="1">Sponsor</a-radio>
            <a-radio value="2">Venue</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="Activity form">
          <a-input v-model:value="formState.desc" type="textarea" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary">Create</a-button>
          <a-button style="margin-left: 10px">Cancel</a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="m-3">
      <a-divider>
        <span>日期时间</span>
      </a-divider>
      <a-date-picker v-model:value="time1" />
      <a-date-picker v-model:value="time2" />
      <a-date-picker v-model:value="time3" picker="month" />
      <a-range-picker v-model:value="time4" />
      <a-date-picker v-model:value="time5" />
      <a-date-picker v-model:value="time6" picker="week" />
    </div>
    <div class="m-3">
      <a-divider>
        <span>级联</span>
      </a-divider>
      <a-cascader v-model:value="cascader1" style="width: 100%" multiple max-tag-count="responsive" :options="options"
        placeholder="Please select"></a-cascader>
    </div>
    <div class="m-3">
      <a-divider>
        <span>滑动条</span>
      </a-divider>
      <a-slider v-model:value="value1" :marks="marks">
        <template #mark="{ label, point }">
          <template v-if="point === 100">
            <strong>{{ label }}</strong>
          </template>
          <template v-else>{{ label }}</template>
        </template>
      </a-slider>
    </div>
    <div class="m-3">
      <a-divider>
        <span>树选择</span>
      </a-divider>
      <a-tree-select v-model:value="tree1" show-search style="width: 100%"
        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }" placeholder="Please select" allow-clear
        tree-default-expand-all :tree-data="treeData">
      </a-tree-select>
    </div>
    <div class="m-3">
      <a-divider>
        <span>气泡卡片</span>
      </a-divider>
      <a-popover title="Title" trigger="hover">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <a-button>Hover me</a-button>
      </a-popover>
      <a-popover title="Title" trigger="focus">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <a-button>Focus me</a-button>
      </a-popover>
      <a-popover title="Title" trigger="click">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <a-button>Click me</a-button>
      </a-popover>
    </div>
    <div class="m-3">
      <a-divider>
        <span>表格</span>
      </a-divider>
      <vxe-table border :data="tableData" :row-config="{ isCurrent: true, isHover: true }">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="name" title="Name">
          <template #default="{ row }">
            <span>自定义插槽模板 {{ row.name }}</span>
          </template>
        </vxe-column>
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="age" title="Age"></vxe-column>
      </vxe-table>
      <Grid v-bind="gridOptions" />
    </div>
    <div class="m-3">
      <a-divider>
        <span>弹层</span>
      </a-divider>
      <a-button type="primary" @click="showModal">Open Modal</a-button>
      <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
    </div>
    <div class="m-3">
      <a-divider>
        <span>缺省命令</span>
      </a-divider>
      <div class="w-full h-[100px]" v-el-empty:buildadmin.value="0"></div>
      <div class="w-full h-[100px]" v-el-empty:favicon.value="null"></div>
      <div class="w-full h-[100px]" v-el-empty:logo.value="false"></div>
      <div class="w-full h-[100px]" v-el-empty:vform-banner.value="value"></div>
    </div>
  </a-drawer>
</template>
<script lang='ts' setup>
import { CascaderProps, TreeSelectProps } from 'ant-design-vue';
import { onMounted, reactive, ref, watch } from 'vue';
import { VxeGridProps } from 'vxe-table';
const props = defineProps<{
  show: boolean
}>()
const emit = defineEmits(['update:show'])
const visibleDraw = ref<boolean>(false);

const afterVisibleChange = (bool: boolean) => {
  console.log('visible', bool);
  emit('update:show', bool)
};
const themeList = ref([
  'primary', 'success', 'alarm', 'error', 'warning', 'info'
])
watch(() => props.show, (value: boolean) => {
  visibleDraw.value = value
})
const value = ref(0)
const value1 = ref('jack')
const value2 = ref('lucy')
const value3 = ref('lucy')
const current = ref()
const checkbox1 = ref('')
const checkbox2 = ref('Apple')
const plainOptions = ['Apple', 'Pear', 'Orange'];
const optionsWithDisabled = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

const labelCol = { style: { width: '150px' } }
const wrapperCol = { span: 14 }
const formState = reactive({
  name: '',
  delivery: true,
  type: '1',
  resource: '1',
  desc: ''
})

const time1 = ref()
const time2 = ref()
const time3 = ref()
const time4 = ref()
const time5 = ref()
const time6 = ref()
const cascader1 = ref()
const options: CascaderProps['options'] = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: `Number ${index}`, value: index })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
]
const marks = ref<Record<number, any>>({
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: '100°C',
  },
})
const tree1 = ref()
const treeData = ref<TreeSelectProps['treeData']>([
  {
    title: 'parent 1',
    value: 'parent 1',
    children: [
      {
        title: 'parent 1-0',
        value: 'parent 1-0',
        children: [
          {
            title: 'my leaf',
            value: 'leaf1',
          },
          {
            title: 'your leaf',
            value: 'leaf2',
          },
        ],
      },
      {
        title: 'parent 1-1',
        value: 'parent 1-1',
      },
    ],
  },
])

const tableData = ref([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const gridOptions = reactive<VxeGridProps<any>>({
  border: true,
  height: 300,
  align: null,
  columnConfig: {
    resizable: true
  },
  columns: [
    { type: 'seq', width: 50 },
    { field: 'name', title: 'name' },
    { field: 'sex', title: 'sex', showHeaderOverflow: true },
    { field: 'address', title: 'Address', showOverflow: true }
  ],
  toolbarConfig: {
    slots: {
      buttons: 'toolbar_buttons'
    }
  },
  data: [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
    { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
    { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },
    { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' }
  ]
})

const visible = ref<boolean>(false);

const showModal = () => {
  visible.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};
onMounted(() => {
  visible.value = props.show
})
</script>
<style lang='less'></style>