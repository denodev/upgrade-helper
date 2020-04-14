import semver from 'semver/preload'
import versions from './releases'

const DENO_API_DIFF_REPO = 'denodev/deno_api_diff_clean'

export const RELEASES_URL = `https://raw.githubusercontent.com/${DENO_API_DIFF_REPO}/master/RELEASES`

export const getDiffPatchURL = ({ fromVersion, toVersion }) =>
  `https://raw.githubusercontent.com/${DENO_API_DIFF_REPO}/diffs/diffs/${fromVersion}...${toVersion}.diff`

export const getBinaryFileURL = ({ version, path }) =>
  `https://github.com/${DENO_API_DIFF_REPO}/raw/${version}/${path}`

export const getVersionsInDiff = ({ fromVersion, toVersion }) => {
  const cleanedToVersion = semver.valid(semver.coerce(toVersion))

  return versions.filter(({ version }) => {
    const cleanedVersion = semver.coerce(version)

    // `cleanedVersion` can't be newer than `cleanedToVersion` nor older (or equal) than `fromVersion`
    return (
      semver.compare(cleanedToVersion, cleanedVersion) !== -1 &&
      ![0, -1].includes(semver.compare(cleanedVersion, fromVersion))
    )
  })
}

const baseChangelogURL =
  'https://github.com/denoland/deno/blob/master/Releases.md'
export const getChangelogURL = ({ version }) =>
  `${baseChangelogURL}#v${version.replace('.', '')}0`

// settings constants
export const SHOW_LATEST_RCS = 'Show latest release candidates'
