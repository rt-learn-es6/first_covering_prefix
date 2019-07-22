import { expect } from 'chai'
import { describe, it } from 'mocha'

import { Solution } from '../src/solution'

describe('Solution', () => {
  const actualInput = [[2, 2, 1, 0, 1]]
  const expectedOutput = [3]

  const sut = new Solution()

  describe('#solution', () => {
    for (let i = 0; i < actualInput.length; i += 1) {
      describe(`Test on index: ${i}`, () => {
        it(`returns ${expectedOutput[i]}`, () => {
          expect(sut.solution(actualInput[i])).to.eq(expectedOutput[i])
        })
      })
    }
  })
})
