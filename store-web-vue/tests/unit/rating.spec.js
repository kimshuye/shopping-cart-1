import Rating from '@/components/Rating.vue'

import { mount } from '@vue/test-utils'

// import sinon from 'sinon';
// const spy = sinon.stub();

// mount({
//   render: null,
//   destroyed() {
//     spy()
//   }
// }).destroy();
// expect(spy.calledOnce).toBe(true);

describe('Rating', () => {
  it('renders stars is 5', () => {
    var expectStars = 5

    const wrapper = mount(Rating)
    var stars = wrapper.findAll('.star')

    expect(stars.length).toBe(expectStars)
  })
})
