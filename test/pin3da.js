var tap = require('tap')
var fun = require('../local/pin3da')

tap.test("testing pin3da's module", function (t) {
  t.plan(1)
  t.ok(fun(5, 6), 60)
})
