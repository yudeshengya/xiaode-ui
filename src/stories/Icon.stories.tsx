import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "../components"
import {Search, User, Right} from "@icon-park/react"

export default {
  title: 'Example/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;


export const Primary = () => {
  return (
    <div className="icon-demo-icon">
      <Icon IconOrigin={Search} design="primary" />
      <Icon IconOrigin={User} design="danger" />
      <Icon IconOrigin={Right} design="success" size={30} />
    </div>
  )
}
Primary.storyName = "图标"