import {expect} from 'chai'

describe('100 doors',()=>{
  it('should be 1 for 1',()=>{
    expect(getDoorToggleTime(1)).to.be.equal(1)
  })
})
