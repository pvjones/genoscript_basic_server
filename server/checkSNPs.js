exports.forGenotype = (genoset, dnaFile) => {
  const query = require(`./queries/${genoset}`)
  const dna = require(`./../data/raw/${dnaFile}`)

  const matches = query(dna);
  console.log(matches)
}