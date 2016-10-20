import {expect} from 'chai'
import getDoorToggleTime from '../getDoorToggleTime'

describe('100 doors',()=>{
  it('should be 1 for 1',()=>{
    expect(getDoorToggleTime(1)).to.be.equal(1)
  })
  it('should be 2 for 2',()=>{
    expect(getDoorToggleTime(2)).to.be.equal(2)
  })
  it('should be 3 for 2',()=>{
    expect(getDoorToggleTime(3)).to.be.equal(2)
  })
})
