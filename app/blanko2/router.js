var express = require('express');
var router = express.Router();

const { sinkronBlanko , addBlanko, checkIsianBlanko, getBlankoAll, getBlankobyID } = require('./controller');

const authenticateUser = require('../middleware/authentication');
const { checkIfPetani } = require('../middleware/check-role');

router.post('/tambahblanko', authenticateUser, checkIfPetani, addBlanko);
router.get('/lihatblanko', authenticateUser, checkIfPetani, getBlankoAll);
router.get(
  '/lihatblanko/:idBlanko',
  authenticateUser,
  checkIfPetani,
  getBlankobyID
);

router.post('/cekblanko', authenticateUser, checkIfPetani, checkIsianBlanko);
router.put('/sinkronblanko', authenticateUser, checkIfPetani, sinkronBlanko);

// ENDPOPINT BARU
router.post('/tambah', authenticateUser, checkIfPetani, addBlanko);

router.post('/daftarisian', authenticateUser, checkIfPetani, checkIsianBlanko);

router.put('/sinkron', authenticateUser, checkIfPetani, sinkronBlanko);

router.get('/', authenticateUser, checkIfPetani, getBlankoAll);

router.get(
  '/:idBlanko',
  authenticateUser,
  checkIfPetani,
  getBlankobyID
);

module.exports = router;
