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

  it('triggers a click to products', async () => {
    // const router = createRouter({
    //     history: createWebHashHistory(),
    //     routes
    //   })
    router.push('/products')
    await router.isReady()
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findComponent(Products).exists()).toBe(true)
  })
})
