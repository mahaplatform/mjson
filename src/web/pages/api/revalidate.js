const revalidate = async (req, res) => {
  if(req.method !== 'POST' || !req.body.slug) res.json(false)
  await res.revalidate(req.body.slug)
  res.json(true)
}

export default revalidate
