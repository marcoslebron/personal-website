import { describe, it, expect, vi } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import ProjectsPage from './index.vue'

// Mock the global queryCollection composable provided by Nuxt Content
mockNuxtImport('queryCollection', () => {
  return (collectionName: string) => {
    const chain = {
      limit: () => chain, // Support chaining `.limit(x)` if added later
      all: () => {
        return Promise.resolve([
          { 
            title: 'Test Portfolio Architecture', 
            description: 'A deeply mocked test portfolio description.', 
            path: '/projects/test-mock',
            stack: ['Vitest', 'Mocking']
          }
        ])
      }
    }
    return chain
  }
})

describe('Projects Listing Page', () => {
  it('mounts the page and fetches mocked projects collection', async () => {
    const wrapper = await mountSuspended(ProjectsPage)
    
    // 1. Verify static page layout features
    expect(wrapper.text()).toContain('Projects')
    expect(wrapper.text()).toContain('Selected works, experiments, and production systems.')
    
    // 2. Verify dynamic querying integrated correctly with the sub-component
    expect(wrapper.text()).toContain('Test Portfolio Architecture')
    expect(wrapper.text()).toContain('A deeply mocked test portfolio description.')
    expect(wrapper.text()).toContain('Vitest')
  })
})
