const fixtureVersions = ['0.37', '0.36']

jest.setMock(
  '../index.js',
  fixtureVersions.map(version => ({
    version
  }))
)
