'use strict'

let proxy = require('redbird')({port: 80})

proxy.register('fake.betaqxl.com/something', 'http://127.0.0.1:8085')

module.exports = {}
