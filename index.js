'use strict'

const schoolsInfo = require('tfk-schools-info')

module.exports = options => {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.masterdata) {
    throw new Error('Missing required input: options.masterdata')
  }
  if (!Array.isArray(options.masterdata)) {
    throw new Error('Invalid format options.masterdata must be an array')
  }
  if (!options.data) {
    throw new Error('Missing required input: options.data')
  }
  if (!Array.isArray(options.data)) {
    throw new Error('Invalid format options.data must be an array')
  }

  var students = {}
  var schools = {}
  const isStudentDocument = item => item.accessGroup.startsWith('Elev')
  const studentDocuments = options.data.filter(isStudentDocument)
  schoolsInfo().forEach(school => {
    schools[school.shortName] = school.accessGroup
  })
  options.masterdata.forEach(student => {
    students[student.personalIdNumber] = {unitId: student.unitId, accessGroup: schools[student.unitId]}
  })
  const mustChange = item => students[item.personalIdNumber] && students[item.personalIdNumber].accessGroup !== item.accessGroup
  const docsForChange = studentDocuments.filter(mustChange)
  const documentList = docsForChange.map(doc => { return {documentNumber: doc.documentNumber, accessGroup: students[doc.personalIdNumber].accessGroup} })

  return documentList
}
