import { defineConfig } from 'umi';
// import { CountComponentsWebpackPlugin } from 'count-components-webpack-plugin';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  // chainWebpack(memo) {
  //   memo
  //     .plugin('count-components-webpack-plugin')
  //     .use(CountComponentsWebpackPlugin, [
  //       {
  //         libraryName: ['@digitalzz/bizui'],
  //       },
  //     ]);
  // },
});
