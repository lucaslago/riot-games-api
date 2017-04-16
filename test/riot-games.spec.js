import test from 'ava'
import riotGames from '../dist'

test('client.connect is a function', t => {
  t.is((typeof riotGames.client.connect), 'function')
})
