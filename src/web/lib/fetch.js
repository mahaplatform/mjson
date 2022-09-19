const fetchData = async (endpoint) => {
  console.log(`fetching ${endpoint}`)
  const filename = endpoint.split('/').join('-')
  return require(`../../data/${filename}`).default
}

export default fetchData
