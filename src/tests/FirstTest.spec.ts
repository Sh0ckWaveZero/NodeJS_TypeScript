import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()
  user.name = 'Na'
  expect(user.name).toEqual('Na')
})
