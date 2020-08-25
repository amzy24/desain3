export { default as Card } from '../..\\components\\Card.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyCard = import('../..\\components\\Card.vue' /* webpackChunkName: "components_Card" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
