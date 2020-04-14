import '../releases/__mocks__/index'
import { getVersionsInDiff } from '../utils'

describe('getVersionsInDiff', () => {
  it('returns the versions in the provided range', () => {
    const versions = getVersionsInDiff({
      fromVersion: '0.36.0',
      toVersion: '0.39.0'
    })

    expect(versions).toEqual([{ version: '0.37' }])
  })

  it('returns the versions in the provided range with release candidates', () => {
    const versions = getVersionsInDiff({
      fromVersion: '0.36.0',
      toVersion: '0.39.0-rc.1'
    })

    expect(versions).toEqual([{ version: '0.37' }])
  })

  it('returns the versions in the provided range with patches specified', () => {
    const versions = getVersionsInDiff({
      fromVersion: '0.36.1',
      toVersion: '0.40.0'
    })

    expect(versions).toEqual([{ version: '0.37' }])
  })
})
