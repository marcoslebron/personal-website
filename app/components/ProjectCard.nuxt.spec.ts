import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProjectCard from './ProjectCard.vue'

describe('ProjectCard', () => {
  it('renders correctly', async () => {
    const project = {
      title: 'Test Project',
      description: 'A test description',
      path: '/projects/test',
      stack: ['Vue', 'Nuxt']
    }
    const wrapper = await mountSuspended(ProjectCard, {
      props: { project }
    })
    
    expect(wrapper.text()).toContain('Test Project')
    expect(wrapper.text()).toContain('A test description')
    expect(wrapper.text()).toContain('Vue')
    expect(wrapper.text()).toContain('Nuxt')
  })
})
