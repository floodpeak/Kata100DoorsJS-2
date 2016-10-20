import {expect} from 'chai'
import getDoorToggleTime from '../getDoorToggleTime'

describe('100 doors',()=>{
  it('should be 1 for 1',()=>{
    expect(getDoorToggleTime(1)).to.be.equal(1)
  })
})
