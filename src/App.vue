<template>
  <div class="w-full h-full p-5 demo">
    <div class="">
      <a-divider>
        <span>主题色</span>
      </a-divider>
      <div class="w-full h-[120px] flex">
        <div class="w-[150px] h-[100px] mx-3">
          <div class="w-full h-[70%] bg-primary rounded-t"></div>
          <div class="w-[50%] h-[30%] bg-primary bg-opacity-50 rounded-bl float-left"></div>
          <div class="w-[50%] h-[30%] bg-primary bg-opacity-10 rounded-br float-left"></div>
        </div>
        <div class="w-[150px] h-[100px] mx-3">
          <div class="w-full h-[70%] bg-success rounded-t"></div>
          <div class="w-[50%] h-[30%] bg-success bg-opacity-50 rounded-bl float-left"></div>
          <div class="w-[50%] h-[30%] bg-success bg-opacity-10 rounded-br float-left"></div>
        </div>
        <div class="w-[150px] h-[100px] mx-3">
          <div class="w-full h-[70%] bg-alarm rounded-t"></div>
          <div class="w-[50%] h-[30%] bg-alarm bg-opacity-50 rounded-bl float-left"></div>
          <div class="w-[50%] h-[30%] bg-alarm bg-opacity-10 rounded-br float-left"></div>
        </div>
        <div class="w-[150px] h-[100px] mx-3">
          <div class="w-full h-[70%] bg-warning rounded-t"></div>
          <div class="w-[50%] h-[30%] bg-warning bg-opacity-50 rounded-bl float-left"></div>
          <div class="w-[50%] h-[30%] bg-warning bg-opacity-10 rounded-br float-left"></div>
        </div>
        <div class="w-[150px] h-[100px] mx-3">
          <div class="w-full h-[70%] bg-error rounded-t"></div>
          <div class="w-[50%] h-[30%] bg-error bg-opacity-50 rounded-bl float-left"></div>
          <div class="w-[50%] h-[30%] bg-error bg-opacity-10 rounded-br float-left"></div>
        </div>
        <div class="w-[150px] h-[100px] mx-3">
          <div class="w-full h-[70%] bg-info rounded-t"></div>
          <div class="w-[50%] h-[30%] bg-info bg-opacity-50 rounded-bl float-left"></div>
          <div class="w-[50%] h-[30%] bg-info bg-opacity-10 rounded-br float-left"></div>
        </div>
      </div>
    </div>
    <div class="">
      <a-divider>
        <span>按钮</span>
      </a-divider>
      <!-- <div class="w-full m-3 text-2xl text-primary font-bold">按钮</div> -->
      <a-button class="mx-3" type="primary">primary</a-button>
      <a-button class="mx-3" type="success" @click="success">success</a-button>
      <a-button class="mx-3" type="alarm">alarm</a-button>
      <a-button class="mx-3" type="warning" @click="warning">warning</a-button>
      <a-button class="mx-3" type="error" @click="error">error</a-button>
      <a-button class="mx-3" type="info" @click="info">info</a-button>
    </div>
    <div class="mt-3">
      <a-divider>
        <span>标签</span>
      </a-divider>
      <a-tag class="mx-3" type="primary">primary</a-tag>
      <a-tag class="mx-3" type="success">success</a-tag>
      <a-tag class="mx-3" type="alarm">alarm</a-tag>
      <a-tag class="mx-3" type="warning">warning</a-tag>
      <a-tag class="mx-3" type="error">error</a-tag>
      <a-tag class="mx-3" type="info">info</a-tag>
    </div>
    <div class="mt-3">
      <a-divider>
        <span>警告提示</span>
      </a-divider>
      <a-alert class="mx-3" message="primary Text" type="primary" />
      <a-alert class="mx-3" message="success Text" type="success" />
      <a-alert class="mx-3" message="alarm Text" type="alarm" />
      <a-alert class="mx-3" message="warning Text" type="warning" />
      <a-alert class="mx-3" message="error Text" type="error" />
      <a-alert class="mx-3" message="info Text" type="info" />
    </div>
    <div class="">
      <a-divider>
        <span>文字</span>
      </a-divider>
      <div class="flex flex-col">
        <div class="text-title text-4xl m-3">
          标题
          <span class="text-base m-2">
            用于：标题文字、主标题、次标题、表格标题、弹窗标题
          </span>
        </div>
        <div class="text-default text-4xl m-3">
          正文
          <span class="text-base m-2">
            用于：正文、表单标题、表单内容、表格内容文字、默认图标颜色、默认图标图里文字、选项卡默认文字、弹窗内容文字、进度条百分比文字、分页默认文字
          </span>
        </div>
        <div class="text-secondary text-4xl m-3">
          次级
          <span class="text-base m-2">
            用于：说明文字、进度条滚动条操作颜色、基础图标（默认下拉箭头、叉）
          </span>
        </div>
        <div class="text-disabled text-4xl m-3">
          禁用、失效
          <span class="text-base m-2">
            用于：禁用文字、失效图标颜色、提示性文字（请输入）
          </span>
        </div>
        <div class="text-white  text-4xl m-3 bg-[#000] w-[250px]">
          白色
          <span class="text-base m-2">
            用于：含底色文字
          </span>
        </div>
      </div>
      <a-divider>
        <span>组件文字演示</span>
      </a-divider>
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
      <a-divider>
        <span>分页</span>
      </a-divider>
      <div class="m-3">
        <a-pagination v-model:current="current" :total="500" />
      </div>
      <div class="m-3">
        <a-pagination size="small" :total="50" show-size-changer show-quick-jumper />
      </div>
      <a-divider>
        <span>步骤条</span>
      </a-divider>
      <div class="m-3">
        <a-steps :current="1" status="error">
          <a-step title="Finished" description="This is a description." />
          <a-step title="In Progress" description="This is a description." />
          <a-step title="Waiting" description="This is a description." />
        </a-steps>
      </div>
      <a-divider>
        <span>多选框</span>
      </a-divider>
      <div class="m-3">
        <a-checkbox-group v-model:value="checkbox1" name="checkboxgroup" :options="plainOptions" />
      </div>
      <div class="m-3">
        <a-checkbox-group v-model:value="checkbox2" :options="optionsWithDisabled" disabled>
          <template #label="{ value }">
            <span style="color: red">{{ value }}</span>
          </template>
        </a-checkbox-group>
      </div>
      <a-divider>
        <span>表单</span>
      </a-divider>
      <div class="m-3">
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
      <a-divider>
        <span>日期时间</span>
      </a-divider>
      <div class="m-3">
        <a-date-picker v-model:value="time1" />
        <a-date-picker v-model:value="time2" />
        <a-date-picker v-model:value="time3" picker="month" />
        <a-range-picker v-model:value="time4" />
        <a-date-picker v-model:value="time5" />
        <a-date-picker v-model:value="time6" picker="week" />
      </div>
      <a-divider>
        <span>级联</span>
      </a-divider>
      <div class="m-3">
        <a-cascader v-model:value="cascader1" style="width: 100%" multiple max-tag-count="responsive" :options="options"
          placeholder="Please select"></a-cascader>
      </div>
      <a-divider>
        <span>滑动条</span>
      </a-divider>
      <div class="m-3">
        <a-slider v-model:value="value1" :marks="marks">
          <template #mark="{ label, point }">
            <template v-if="point === 100">
              <strong>{{ label }}</strong>
            </template>
            <template v-else>{{ label }}</template>
          </template>
        </a-slider>
      </div>
      <a-divider>
        <span>树选择</span>
      </a-divider>
      <div class="m-3">
        <a-tree-select v-model:value="tree1" show-search style="width: 100%"
          :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }" placeholder="Please select" allow-clear
          tree-default-expand-all :tree-data="treeData">
        </a-tree-select>
      </div>
      <a-divider>
        <span>气泡卡片</span>
      </a-divider>
      <div class="m-3">
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
      <a-divider>
        <span>表格</span>
      </a-divider>
      <div class="m-3">
        <vxe-table border :data="tableData">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="name" title="Name">
            <template #default="{ row }">
              <span>自定义插槽模板 {{ row.name }}</span>
            </template>
          </vxe-column>
          <vxe-column field="sex" title="Sex"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
        </vxe-table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CascaderProps, TreeSelectProps, message } from 'ant-design-vue';
// import { setStyleDom } from './styles/color';
import { reactive, ref } from 'vue';
// import { ExclamationCircleOutlined  } from 'ant-design/icons-vue';
// setStyleDom()
const success = () => {
  message.success('This is a success message', 100);
};
const error = () => {
  message.error('This is an error message', 100);
};
const warning = () => {
  message.warning('This is a warning message', 100);
};
const info = () => {
  message.info('This is a info message', 100);
};
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

const tableData = ref<UserVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])
</script>
<style lang="less" scoped>
.demo {
  overflow-x: hidden;
}
</style>
