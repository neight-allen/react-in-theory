var expect = require('chai').expect
const React  = require('react')
const App =  require('../app/components/App')
const LikesCounter = require('../app/components/LikesCounter')
const ActionButton = require('../app/components/ActionButton')
import { shallow, mount, render } from 'enzyme'

describe('app.jsx renders the likes counter',function(){
  it('should render the application',function(){

    const wrapper = shallow(<App/>)

    expect(wrapper.contains(<LikesCounter initialCount={0} />)).to.be.true
    expect(wrapper.props()).to.deep.equal({ initialCount: 0 })
  })


  it('should have the button text rendered onto the page', function(){
    const wrapper = render(<App/>)
    expect(wrapper.text()).to.contain('Likes: 0Like! (+1)Dislike! (-1)')
  })
})

describe('likes counter',function(){
  it('should have 2 action button props', function(){
    const wrapper = render(<LikesCounter/>)
    expect(wrapper.find('.ActionButton')).to.have.length(2)
  })

  it('should allow me to click the action button', function(){
    const wrapper = mount(<LikesCounter/>)
    wrapper.state().count = 0 // we must do this because this value isn't set initially
    var button = wrapper.find('#like').simulate('click')

    expect(wrapper.state().count).to.equal(1)
  })
})
