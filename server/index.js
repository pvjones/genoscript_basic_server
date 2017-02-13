const express = require('express');
const bodyParser = require('body-parser');
const translateRaw = require('./translateRaw')
const checkSNPs = require('./checkSNPs')
const port = 3000;

const app = express();
app.use(express.static(__dirname + './../public'));

//right now these are hard-coded
let readPath = './../data/raw/user4/ancestry-female.txt';
let writePath = './../data/raw/user4/ancestry-female.json';

translateRaw.toJSON(readPath, writePath);

let dnaFile = 'user4/ancestry-female' //hard-code for user dna json

let genoset1 = 'isFemale'
checkSNPs.forGenotype(genoset1, dnaFile);

let genoset2 = 'isMale'
checkSNPs.forGenotype(genoset2, dnaFile);

let genoset3 = 'gs228' // has sickle cell anemia
checkSNPs.forGenotype(genoset3, dnaFile);

let genoset4 = 'gs291' //low risk of heart attack
checkSNPs.forGenotype(genoset4, dnaFile);

let genoset5 = 'gs117' //strong predictor of type 1 diabetes
checkSNPs.forGenotype(genoset5, dnaFile);

let genoset6 = 'gs101' // more likely to experience lactose intolerance
checkSNPs.forGenotype(genoset6, dnaFile);

let genoset7 = 'gs122' //up to 7x increased likelihood of male pattern baldness
checkSNPs.forGenotype(genoset7, dnaFile);

let genoset8 = 'gs137' // slightly increased chance for thyroid cancer
checkSNPs.forGenotype(genoset8, dnaFile);

let genoset9 = 'gs191' // difficulty metabolizing NSAIDs
checkSNPs.forGenotype(genoset9, dnaFile);

let genoset10 = 'gs243' // up to 50% increased risk of mortality if prostate cancer
checkSNPs.forGenotype(genoset10, dnaFile);

let genoset11 = 'gs211' // possible reduced ability to metabolize ethanol
checkSNPs.forGenotype(genoset11, dnaFile);

let genoset12 = 'gs209' // possible increased likelihood of anxiety disorders (up to 1.7x)
checkSNPs.forGenotype(genoset12, dnaFile);

let genoset13 = 'gs249' // increased risk for Parkinsons Disease;
checkSNPs.forGenotype(genoset13, dnaFile);

let genoset14 = 'gs248' // decrease risk for Parkinsons Disease;
checkSNPs.forGenotype(genoset14, dnaFile);

let genoset15 = 'gs116' // 80% likely unable to taste bitter;
checkSNPs.forGenotype(genoset15, dnaFile);

let genoset16 = 'gs123' // 2.7x increased risk of basal skin cell carcinoma;
checkSNPs.forGenotype(genoset16, dnaFile);

let genoset17 = 'gs216' // 11x more likely to develop Alzheimers, increased risk (5-10%) of high cholesterol and 40-50% increased risk of cardiovascular disease. 40% less likely to contract Hepatitis C
checkSNPs.forGenotype(genoset17, dnaFile);

let genoset18 = 'gs119' // 6.5x breast cancer risk
checkSNPs.forGenotype(genoset18, dnaFile);

let genoset19 = 'gs159' // fast caffeine metabolizer
checkSNPs.forGenotype(genoset19, dnaFile);

let genoset20 = 'gs293' // increased risk of late-onset Alzheimers
checkSNPs.forGenotype(genoset20, dnaFile);

let genoset21 = 'gs221' // increased risk of autoimmune disorder such as celiac disease
checkSNPs.forGenotype(genoset21, dnaFile);

let genoset22 = 'gs126' // may be a poor metabolizer of Warfarin
checkSNPs.forGenotype(genoset22, dnaFile);

let genoset23 = 'gs102' // 1.3x increase risk for ALS
checkSNPs.forGenotype(genoset23, dnaFile);

let genoset24 = 'rs12333032T' // increased risk of cocaine-induced paranoia
checkSNPs.forGenotype(genoset24, dnaFile);

let genoset25 = 'rs5400TT' // possible decreased sensitivity to glucose consumption
checkSNPs.forGenotype(genoset25, dnaFile);

let genoset26 = 'rs11362AG' // 2.4x increased risk of colonic Crohn's disease
checkSNPs.forGenotype(genoset26, dnaFile);

let genoset27 = 'gs128' // type O blood
checkSNPs.forGenotype(genoset27, dnaFile);

let genoset28 = 'rs1815739TT' // Impairment to fast-twitch muscle fibers. Likely better at endurance
checkSNPs.forGenotype(genoset28, dnaFile);

let genoset29 = 'rs1815739CC' // Better performing fast-twitch muscles. Likely better at sprinting
checkSNPs.forGenotype(genoset29, dnaFile);

app.listen(port, function() {
  console.log(`Express is running on ${port}`)
})