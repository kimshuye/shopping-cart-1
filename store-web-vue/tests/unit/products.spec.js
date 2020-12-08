import { mount } from '@vue/test-utils'

import Products from '@/components/Products.vue'
// import router, { routes } from '@/router/index'

describe('Products', () => {
  it('Render Products page', () => {
    const expectLabelToy = 'Toys'

    const wrapper = mount(Products)

    expect(wrapper.find('#productList').text()).toBe(expectLabelToy)
  })

  it('Create Select age element', async () => {
    const expectSelectAge = 'Select age'

    const wrapper = mount(Products)

    expect(wrapper.find('[for="inputAge"]').text()).toBe(expectSelectAge)
  })

  it('Create Option age Default is Choose', async () => {
    const expectTextAge = 'Choose'
    const valueAge = 'aSelect'

    const wrapper = mount(Products)
    const select = wrapper.find('#inputAge')
    await select.setValue(valueAge)

    expect(select.find('option:checked').element.text).toBe(expectTextAge)
  })

  it('Change Option age by value is a3', async () => {
    const expectValueAge = 'a3'
    const valueAge = 'a3'

    const wrapper = mount(Products)
    const select = wrapper.find('#inputAge')
    await select.setValue(valueAge)

    expect(select.element.value).toBe(expectValueAge)
  })

  it('Change Option age by text is less 6 m', async () => {
    const expectTextAge = 'less 6 m'
    const valueAge = 'a1'

    const wrapper = mount(Products)
    const selected = wrapper.find(`option[value="${valueAge}"]`)
    await selected.setChecked()

    expect(selected.element.text).toBe(expectTextAge)
  })
})
