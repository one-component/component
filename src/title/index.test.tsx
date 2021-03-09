import React from 'react'
import renderer from 'react-test-renderer'
import { Title } from './index'

test('Title render', () => {
  const t = 'Foo render'
  const c = renderer.create(<Title title={t} />)
  const tree = c.toJSON()
  expect(tree).toMatchSnapshot()
})
