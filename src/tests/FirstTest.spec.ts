import { User } from '@models/User'

test('Everyone calls me is Na handsome => ok', () => {
  const user = new User()
  user.name = 'Na'
  expect(user.name).toEqual('Na')
})
