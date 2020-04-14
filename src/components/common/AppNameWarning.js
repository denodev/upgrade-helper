import React from 'react'
import styled from '@emotion/styled'
import { Alert } from 'antd'
import Markdown from './Markdown'

const Container = styled.div({
  width: '100%',
  marginTop: '16px'
})

export const AppNameWarning = () => (
  <Container>
    <Alert
      message={
        <Markdown>
          Keep in mind that the patches are more than the actual project needs
          to be modified, for example `function copyFile(from: string, to:
          string)` to `function copyFile(fromPath: string, toPath: string)`.
        </Markdown>
      }
      type="info"
      closable
    />
  </Container>
)
