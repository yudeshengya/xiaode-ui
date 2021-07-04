import React from "react";
import classNames from "classnames";

export interface ProgressProps{
  /** 百分比 */
  percent: number;
  /** 状态 */
  status?: "primary" | "secondary" | "success" | "info" | "warning" | "danger"
  /** 是否显示进度数值 */
  showInfo?: boolean;
  /** 进度条线的高度 */
  strokeHeight?: number
  /** 自定义样式 */
  style?: React.CSSProperties
}

export const Progress: React.FC<ProgressProps> = (props) => {
  const {percent, status = "primary", showInfo, strokeHeight = 10, style} = props;

  return (
    <div className="progress-bar-wrapper" style={style}>
      <div className="progress-bar-outer">
        <div 
          className={`progress-bar progress-bar-status-${status}`} 
          style={{height: strokeHeight, width: `${percent}%`}}
        ></div>
      </div>
      {showInfo && <span className="progress-bar-info">{percent}%</span>}
    </div>
  )
}