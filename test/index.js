import test from 'ava'

test('foo', async t => {
  return new Promise((resolve, reject) => {
    setTimeout(() => t.pass(resolve('oi')), Math.random() * 10000)
  })
})
