import { mount } from '@vue/test-utils'
import { render } from '@vue/server-test-utils'

import App from '@/App.vue'
import Products from '@/components/Products.vue'

describe('Products', () => {
  it('renders Products', async () => {
    const expectLabelToy = 'Toys'
    const wrapper = await render(Products)
    expect(wrapper.find('#productList').text()).toContain(expectLabelToy)
  })
  it('renders a child component via routing', async () => {
    const expactedTemp = 'Products'
    const wrapper = mount(App)
    expect(wrapper.find('[to="/products"]').text()).toContain(expactedTemp)
  })

  it('triggers a click to link products', async () => {
    const wrapper = mount(App)

    await wrapper.find('[to="/products"]').trigger('click')
  })
})
