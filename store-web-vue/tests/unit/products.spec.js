import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import sinon from 'sinon'

import Products from '@/components/Products.vue'
import router from '@/router/index'
// import router, { routes } from '@/router/index'

describe('Products', () => {
  const selectAgeId = 'inputAge'

  it('Render Products page', () => {
    const expectLabelToy = 'Toys'

    const wrapper = mount(Products)

    expect(wrapper.find('#productList').text()).toBe(expectLabelToy)
  })

  it('Create Select age Label', async () => {
    const expectSelectAge = 'Select age'

    const wrapper = mount(Products)

    expect(wrapper.find(`[for="${selectAgeId}"]`).text()).toBe(expectSelectAge)
  })

  it('Create selectedAge member Products Component', async () => {
    const expectValueAge = 'aSelect'

    const localVue = createLocalVue()
    localVue.use(router)
    const wrapper = shallowMount(Products, {
      localVue,
      mocks: { selectedAge: expectValueAge }
    })
    expect(wrapper.vm.selectedAge).toBe(expectValueAge)
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

  it('when onInit is called', () => {
    // const expectValueAge = ''

    const clickMethodStub = sinon.stub()

    const wrapper = shallowMount(Products)
    wrapper.setMethods({ onInit: clickMethodStub })

    wrapper.vm.onInit()
    expect(clickMethodStub.called).toBe(true)
    // expect(wrapper.vm.selectedAge).toBe(expectValueAge)
  })

  // it('setData change selectedAge', async () => {
  //   const expectVmodel = 'newSelect'

  //   const wrapper = mount(Products)

  //   await wrapper.setData({ selectedAge: expectVmodel })

  //   expect(wrapper.vm.selectedAge).toBe(expectVmodel)
  // })

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

  it('Change Option age by text is 7-12 m', async () => {
    const expectValueAge = 'a2'
    const expectTextAge = '7-12 m'

    const wrapper = mount(Products)
    const select = wrapper.find(`#${selectAgeId}`)
    await select.setValue(expectValueAge)

    expect(select.element.value).toBe(expectValueAge)
    expect(select.find('option:checked').element.text).toBe(expectTextAge)
    expect(select.find('option:checked').element.selected).toBe(true)
  })

  it('Change Option age by text is 3-6 y', async () => {
    const expectValueAge = 'a4'
    const expectTextAge = '3-6 y'

    const wrapper = mount(Products)
    const select = wrapper.find(`#${selectAgeId}`)
    await select.setValue(expectValueAge)

    expect(select.element.value).toBe(expectValueAge)
    expect(select.find('option:checked').element.text).toBe(expectTextAge)
    expect(select.find('option:checked').element.selected).toBe(true)
  })

  it('Change Option age by text is more 6 y', async () => {
    const expectValueAge = 'a5'
    const expectTextAge = 'more 6 y'

    const wrapper = mount(Products)
    const select = wrapper.find(`#${selectAgeId}`)
    await select.setValue(expectValueAge)

    expect(select.element.value).toBe(expectValueAge)
    expect(select.find('option:checked').element.text).toBe(expectTextAge)
    expect(select.find('option:checked').element.selected).toBe(true)
  })

  it('Change Option age by text is All ages', async () => {
    const expectValueAge = 'a6'
    const expectTextAge = 'All ages'

    const wrapper = mount(Products)
    const select = wrapper.find(`#${selectAgeId}`)
    await select.setValue(expectValueAge)

    expect(select.element.value).toBe(expectValueAge)
    expect(select.find('option:checked').element.text).toBe(expectTextAge)
    expect(select.find('option:checked').element.selected).toBe(true)
  })

  const selectGenderId = 'inputGender'

  it('Create Select gender Label', async () => {
    const expectSelectGender = 'Select gender'

    const wrapper = mount(Products)

    expect(wrapper.find(`[for="${selectGenderId}"]`).text()).toBe(expectSelectGender)
  })

  // it('setData selectedGender', async () => {

  //   const expectVmodel = 'newSelect'

  //   const wrapper = mount(Products)
  //   // await wrapper.setData({ selectedGender: expectVmodel })

  //   expect(wrapper.vm.selectedGender).toBe(expectVmodel)
  // })

  // it('Create Option gender Default is Choose', async () => {
  //   const expectValueGender = 'gSelect'
  //   const expectTextGender = 'Choose'

  //   const wrapper = mount(Products)
  //   const select = wrapper.find(`#${selectGenderId}`)
  //   const selected = wrapper.find('option:checked')

  //   expect(select.element.value).toBe(expectValueGender)
  //   expect(select.find('option[disabled]').element.text).toBe(expectTextGender)
  //   expect(selected.element.selected).toBe(true)
  // })
})
