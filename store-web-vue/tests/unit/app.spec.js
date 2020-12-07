import { mount } from '@vue/test-utils'

import App from '@/App.vue'
import router from '@/router/index.js'
import Products from '@/components/Products.vue'

describe('Products', () => {
  it('renders a child component via routing', async () => {
    const expactedTemp = 'Products'
    const wrapper = mount(App)
    expect(wrapper.find('[to="/products"]').text()).toContain(expactedTemp)
  })

  it('triggers a click to link products', async () => {
    
    const wrapper = mount(App)

    await wrapper.find('[to="/products"]').trigger("click");
    
  })
})
