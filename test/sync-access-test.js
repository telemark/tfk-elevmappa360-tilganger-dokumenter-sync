'use strict'

const tap = require('tap')
const findDocumentsToSync = require('../index')
const students = require('./data/students.json')
const documents = require('./data/documents.json')
const documentsToSync = findDocumentsToSync({ masterdata: students, data: documents })

tap.throws(
  function () {
    findDocumentsToSync()
  },
  { message: 'Missing required input: options' },
  'Throws if options not supplied'
)

tap.throws(
  function () {
    findDocumentsToSync({ masterdata: false })
  },
  { message: 'Missing required input: options.masterdata' },
  'Throws if options.masterdata not supplied'
)

tap.throws(
  function () {
    findDocumentsToSync({ masterdata: true })
  },
  { message: 'Invalid format options.masterdata must be an array' },
  'Throws if options.masterdata not an array'
)

tap.throws(
  function () {
    findDocumentsToSync({ masterdata: [], data: false })
  },
  { message: 'Missing required input: options.data' },
  'Throws if options.data not supplied'
)

tap.throws(
  function () {
    findDocumentsToSync({ masterdata: [], data: true })
  },
  { message: 'Invalid format options.data must be an array' },
  'Throws if options.data not an array'
)

tap.equal(documentsToSync.length, 2, 'It finds the correct documents to sync')
