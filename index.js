'use strict'

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

  const isStudentDocument = item => item.accessGroup.startsWith('Elev')
  const documents = options.data.filter(isStudentDocument)

  return documents
}
