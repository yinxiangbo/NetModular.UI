/** 页面信息 */
const page = new function() {
  this.title = '示例代码'
  this.name = 'components-flex-demo1'
  this.path = '/components/flex/demo1'
  this.icon = 'develop'
}()

export const route = {
  page,
  component: () => import('./index')
}

export default page
