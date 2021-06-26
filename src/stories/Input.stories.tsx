import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "../components";
import {Icon} from "../components"
import {Search, User} from "@icon-park/react"

export default {
  title: 'Example/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}/>;


export const Primary = Template.bind({})
Primary.args = {
  placeholder: "输入什么好呢"
}
Primary.storyName = "基础输入框"

export const Pend = Template.bind({})
Pend.args = {
  prepend: "https://",
  append: ".com",
  defaultValue: "mysite"
}
Pend.storyName = "前置/后置标签"

export const CarryIcon = Template.bind({})
CarryIcon.args = {
  prefix: <Icon IconOrigin={User} />,
  suffix: <Icon IconOrigin={Search} />,
}
CarryIcon.storyName = "带图标输入框"

// export const DisabledInput = Template.bind({})
// DisabledInput.args = {
//   prepend: "http://",
//   append: ".com",
//   value: "mysite"
// }
// DisabledInput.storyName = "禁止输入"

export const DisabledInput = () => {
  const [val, setVal] = useState('')

  return (
    <Input onChange={(e) => setVal(e.target.value)} value={val} />
  )
}