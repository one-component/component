export default {
  esm: 'rollup',
  cjs: process.env.NODE_ENV === 'production' ? 'rollup' : false,
}
