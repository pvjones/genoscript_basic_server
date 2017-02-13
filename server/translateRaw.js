const dna = require('dna2json');
const JSONStream = require('JSONStream');
const fs = require('fs');
const path = require('path');


exports.toJSON = (readPath, writePath) => {
  if (readPath, writePath) {

    let txt = fs.readFileSync(readPath, "utf-8");
    dna.parse(txt, function(err, snps) {
      fs.writeFileSync(writePath, JSON.stringify(snps));
    });
  };
};