import { mount } from '@vue/test-utils'

import Products from '@/components/Products.vue'
// import router, { routes } from '@/router/index'

describe('Products', () => {
  const selectAgeId = 'inputAge'

  it('Render Products page', () => {
    const expectLabelToy = 'Toys'

    const wrapper = mount(Products)

    expect(wrapper.find('#productList').text()).toBe(expectLabelToy)
  })

  it('Create Select age element', async () => {
    const expectSelectAge = 'Select age'

    const wrapper = mount(Products)

    expect(wrapper.find(`[for="${selectAgeId}"]`).text()).toBe(expectSelectAge)
  })

  it('Create Option age Default is Choose', async () => {
    const expectValueAge = 'aSelect'
    const expectTextAge = 'Choose'

    const wrapper = mount(Products)
    const select = wrapper.find(`#${selectAgeId}`)
    const selected = wrapper.find('option:checked')

    expect(select.element.value).toBe(expectValueAge)
    expect(select.find('option[disabled]').element.text).toBe(expectTextAge)
    expect(selected.element.selected).toBe(true)
  })

  it('Change Option age by value is a3', async () => {
    const expectValueAge = 'a3'
    const expectTextAge = '1-2 y'

    const wrapper = mount(Products)
    const select = wrapper.find(`#${selectAgeId}`)
    await select.setValue(expectValueAge)

    expect(select.element.value).toBe(expectValueAge)
    expect(select.find('option:checked').element.text).toBe(expectTextAge)
  })

  it('Change Option age by text is less 6 m', async () => {
    const expectValueAge = 'a1'
    const expectTextAge = 'less 6 m'

    const wrapper = mount(Products)
    const select = wrapper.find(`#${selectAgeId}`)
    await select.setValue(expectValueAge)

    expect(select.element.value).toBe(expectValueAge)
    expect(select.find('option:checked').element.text).toBe(expectTextAge)
    expect(select.find('option:checked').element.selected).toBe(true)
  })
})
