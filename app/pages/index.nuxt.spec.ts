import { describe, it, expect } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import HomePage from './index.vue'

// Mock Nuxt Content queries to return isolated generic data
mockNuxtImport('queryCollection', () => {
  return (collectionName: string) => {
    const chain = {
      // Must return `chain` to support fluent API `queryCollection('...').limit(3).all()`
      limit: () => chain,
      all: () => {
        if (collectionName === 'projects') {
          return Promise.resolve([{ title: 'Mocked Home Project', description: 'Awesome project', path: '/projects/mock-1' }])
        }
        if (collectionName === 'caseStudies') {
          return Promise.resolve([{ title: 'Mocked Home Study', description: 'Deep architecture review', path: '/case-studies/mock-1' }])
        }
        if (collectionName === 'writing') {
          return Promise.resolve([{ title: 'Mocked Home Note', path: '/writing/mock-1' }])
        }
        return Promise.resolve([])
      }
    }
    return chain
  }
})

describe('Home Page Layout and Queries', () => {
  it('mounts the home page and fetches all 3 distinct data collections', async () => {
    // Note: Due to the complexity of the root page, mountSuspended cleanly resolves all `await useAsyncData` setup logic!
    const wrapper = await mountSuspended(HomePage)
    
    // Static text from Hero
    expect(wrapper.text()).toContain('Marcos Lebron')
    expect(wrapper.text()).toContain('Senior Frontend / Full Stack Engineer')
    
    // Data populated by the globally mocked composable
    expect(wrapper.text()).toContain('Mocked Home Project')
    expect(wrapper.text()).toContain('Mocked Home Study')
    expect(wrapper.text()).toContain('Mocked Home Note')
  })
})
