import { mount } from '@vue/test-utils'

import Products from '@/components/Products.vue'
// import router, { routes } from '@/router/index'

describe('Products', () => {
  it('Render Products page', () => {
    const expectLabelToy = 'Toys'

    const wrapper = mount(Products)

    expect(wrapper.find('#productList').text()).toBe(expectLabelToy)
  })

  it('Find Select age element', async () => {
    const expectSelectAge = 'Select age'

    const wrapper = mount(Products)

    expect(wrapper.find('[for="inputAge"]').text()).toBe(expectSelectAge)
  })
})
