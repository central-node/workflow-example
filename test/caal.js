var tap = require('tap')
var fun2 = require('../local/caal')

tap.test("testing caal's module", function (t) {
  t.plan(3)
  t.equal(fun2('dog'), 'woof')
  t.equal(fun2('cat'), 'miau')
  t.equal(fun2('jhsd'), 'unknown')
})
