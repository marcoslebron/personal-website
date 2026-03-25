import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import WritingCard from './WritingCard.vue'

describe('WritingCard', () => {
  it('renders correctly with description', async () => {
    const post = {
      title: 'Test Post',
      description: 'Post description',
      path: '/writing/test'
    }
    const wrapper = await mountSuspended(WritingCard, {
      props: { post }
    })
    
    expect(wrapper.text()).toContain('Test Post')
    expect(wrapper.text()).toContain('Post description')
  })
})
