// this line HAAAAAAAAS to go
const versions = ['0.37', '0.36']

export default versions.map(version => ({
  ...require(`./${version}`).default,
  version
}))
