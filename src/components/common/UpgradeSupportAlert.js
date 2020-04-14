import React from 'react'
import styled from '@emotion/styled'
import { Tooltip } from 'antd'

const UpgradeSupportAlert = styled(props => (
  <span {...props}>
    Check out{' '}
    <Tooltip
      placement="bottom"
      title="Upgrade Support is a community-backed place to request and give help when upgrading your app"
    >
      <a
        href="https://github.com/denodev/upgrade-support"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        Upgrade Support
      </a>
    </Tooltip>{' '}
    if you are experiencing issues related to Deno during the upgrading process.
  </span>
))`
  padding-top: 10px;
  a {
    color: #045dc1;

    &:hover {
      color: #40a9ff;
    }
  }
`

export default UpgradeSupportAlert
