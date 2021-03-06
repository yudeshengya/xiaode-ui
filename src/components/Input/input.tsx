import React from "react";
import classNames from "classnames";
import { prefixClass } from "../../provider"

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'size' | 'prefix'>{
  /** 是否禁用状态，默认为 false */
  disabled?: boolean;
  /** 控件大小 */
  size?: "large" | "middle" | "small";
  /** 带有后缀图标的 input */
  suffix?: React.ReactNode;
  /** 带有前缀图标的 input */
  prefix?: React.ReactNode;
  /** 设置前置标签 */
  prepend?: React.ReactNode | string;
  /** 设置后置标签 */
  append?: React.ReactNode | string;
  /** 输入框内容变化时的回调 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = (props) => {
  const {disabled, size, suffix, prefix, prepend, append, onChange, style, className, ...resetProps} = props;

  const classesWrapper = classNames(`${prefixClass}-input-wrapper`, className, {
    [`${prefixClass}-input-wrapper-${size}`]: size,
    [`${prefixClass}-input-wrapper-disabled`]: disabled,
  })
  const classesInput = classNames(`${prefixClass}-input`, {
    [`${prefixClass}-input-prefix`]: prefix,
    [`${prefixClass}-input-suffix`]: suffix
  })
  return (
    <div className={classesWrapper} style={style}>
      {prepend ? <span className={`${prefixClass}-input-prepend`}>{prepend}</span> : null}
      <div className={`${prefixClass}-input-affix-wrapper`}>
        {prefix ? <span className={`${prefixClass}-input-icon-prefix`}>{prefix}</span> : null}
        <input
          className={classesInput}
          disabled={disabled}
          onChange={onChange}
          {...resetProps} 
        />
        {suffix ? <span className={`${prefixClass}-input-icon-suffix`}>{suffix}</span> : null}
      </div>
      {append ? <span className={`${prefixClass}-input-append`}>{append}</span> : null}
    </div>
  )
}

Input.defaultProps = {
  size: "middle"
}