import { mount,shallowMount,createLocalVue ,mockRouter} from '@vue/test-utils'

import router, { routes } from '@/router/index'
import App from '@/App.vue'
import Products from '@/components/Products.vue'
import About from '@/views/About.vue'

import { createRouter, createWebHistory } from 'vue-router'
import VueRouter from "vue-router"

// const localVue = createLocalVue()
// localVue.use(router)

describe("Products", () => {
    it("Render Products page", () => {
        const wrapper = mount(Products)
        expect(wrapper.text()).toBe('Select Toy')
    })

    // it("Render Products router", async() => {
    //     const $route = {
    //         path: '/some/path'
    //       }
          
    //       const wrapper = shallowMount(App, {
    //         mocks: {
    //           $route
    //         }
    //       })
          
    //       //wrapper.vm.$route.path // /some/path
    //       expect(wrapper.vm.$route.path).toBe($route.path)
    // })

    // it("renders a child component via routing", async () => {
    //   // const router = new VueRouter({ routes })
    //   const localVue = createLocalVue()

    //   const wrapper = mount(App,  {localVue,router})

    //   router.push("/about")
    //   await wrapper.vm.$nextTick()

    //   expect(wrapper.findComponent(About).exists()).toBe(true)
    // })
})

