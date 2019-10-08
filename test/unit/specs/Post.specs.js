import Vue from 'vue'
import Post from '../../../src/theme/Post.vue'

describe('Post.vue', () => {
  it('should render the link', () => {
    const PostConstructor = Vue.extend(Post)
    const comp = new PostConstructor({
      propsData: {
        link: 'http://www.google.com'
      }
    }).$mount()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('http://www.google.com')
  })
})
