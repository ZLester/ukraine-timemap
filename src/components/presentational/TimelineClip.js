import React from 'react'

const TimelineClip = ({ dims }) => (
  <clipPath id='clip'>
    <rect
      x='120'
      y='0'
      width={dims.width - dims.margin_left - dims.width_controls}
      height={dims.height - 25}
    />
  </clipPath>
)

export default TimelineClip
