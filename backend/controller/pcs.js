const data = require('../data.json')

// GET tous les PCs
const getAllPcs = (req, res) => {
  res.status(200).json(data.pcs)
}

// GET un PC par son id
const getPcById = (req, res) => {
  const id = parseInt(req.params.id)
  const pc = data.pcs.find(p => p.id === id)

  if (!pc) {
    res.status(404).json({ message: 'PC non trouvé' })
  } else {
    res.status(200).json({
      message: 'PC trouvé',
      pc
    })
  }
}

module.exports = { getAllPcs, getPcById }
