import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SiteFooter from './SiteFooter.vue'

describe('SiteFooter', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(SiteFooter)
    expect(wrapper.text()).toContain('Marcos Lebron')
    expect(wrapper.text()).toContain('GitHub')
  })
})
