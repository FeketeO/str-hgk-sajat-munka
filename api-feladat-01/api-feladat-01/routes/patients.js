const express = require('express')
const router = express.Router()

const patientService = require('../service/patient.service')

/* GET patients list - home page */
router.get('/', async (req, res, next) => {
  const patients = await patientService.read()
  res.json(patients)
})

// GET vaccinated persons counted

router.get('/count', async (req, res, next) => {
  const patients = patientService.read()
  const countedPatients = {
    count: patients.filter(patient => patient.vaccine !== 'none').length
  }
  res.json(countedPatients)
})

// GET vaccinated persons' data
router.get('/vaccinated', async (req, res, next) => {
  const patients = await patientService.read()
  const vaccinatedPatientsData = patients.filter(patient => patient.vaccine !== 'none')
  res.json(vaccinatedPatientsData)
})

module.exports = router
