import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Card } from 'antd'
import GitHubButton from 'react-github-btn'
import ReactGA from 'react-ga'
import VersionSelector from '../common/VersionSelector'
import DiffViewer from '../common/DiffViewer'
import Settings from '../common/Settings'
import { homepage } from '../../../package.json'
import logo from '../../assets/logo.svg'
import { SHOW_LATEST_RCS } from '../../utils'

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
`

const Container = styled(Card)`
  width: 90%;
  border-radius: 3px;
  border-color: #e8e8e8;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoImg = styled.img`
  width: 100px;
  margin-bottom: 15px;
`

const TitleHeader = styled.h1`
  margin: 0;
  margin-left: 15px;
`

const StarButton = styled(({ className, ...props }) => (
  <div className={className}>
    <GitHubButton {...props} />
  </div>
))`
  margin-top: 10px;
  margin-left: 15px;
  margin-right: auto;
`

const Home = () => {
  const [fromVersion, setFromVersion] = useState('')
  const [toVersion, setToVersion] = useState('')
  const [showDiff, setShowDiff] = useState(false)
  const [settings, setSettings] = useState({
    [`${SHOW_LATEST_RCS}`]: false
  })

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-123999279-2')
      ReactGA.pageview('/')
    }
  }, [])

  const handleShowDiff = ({ fromVersion, toVersion }) => {
    if (fromVersion === toVersion) {
      return
    }

    setFromVersion(fromVersion)
    setToVersion(toVersion)
    setShowDiff(true)
  }

  const handleSettingsChange = settingsValues => {
    const normalizedIncomingSettings = settingsValues.reduce((acc, val) => {
      acc[val] = true
      return acc
    }, {})

    setSettings(normalizedIncomingSettings)
  }

  return (
    <Page>
      <Container>
        <TitleContainer>
          <LogoImg
            alt="Deno upgrade helper logo"
            title="Deno upgrade helper logo"
            src={logo}
          />

          <a href={homepage}>
            <TitleHeader>Deno upgrade helper</TitleHeader>
          </a>

          <StarButton
            href="https://github.com/denodev/upgrade-helper"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star denodev/upgrade-helper on GitHub"
          >
            Star
          </StarButton>

          <Settings handleSettingsChange={handleSettingsChange} />
        </TitleContainer>

        <VersionSelector
          showDiff={handleShowDiff}
          showReleaseCandidates={settings[SHOW_LATEST_RCS]}
        />
      </Container>

      <DiffViewer
        showDiff={showDiff}
        fromVersion={fromVersion}
        toVersion={toVersion}
      />
    </Page>
  )
}

export default Home
