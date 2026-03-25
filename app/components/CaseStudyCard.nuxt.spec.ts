import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import CaseStudyCard from './CaseStudyCard.vue'

describe('CaseStudyCard', () => {
  it('renders correctly', async () => {
    const study = {
      title: 'Test Study',
      description: 'Study description',
      path: '/case-studies/test',
      bullets: ['Point 1', 'Point 2']
    }
    const wrapper = await mountSuspended(CaseStudyCard, {
      props: { study }
    })
    
    expect(wrapper.text()).toContain('Test Study')
    expect(wrapper.text()).toContain('Study description')
    expect(wrapper.text()).toContain('Point 1')
  })
})
