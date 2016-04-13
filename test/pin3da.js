var tap = require('tap')
var fun1 = require('../local/pin3da')

tap.test("testing pin3da's module", function (t) {
  t.plan(1)
  // Note: this line didn't do what it was intended to do so I changed it!
  t.equal(fun1(5, 6), 60)
})
