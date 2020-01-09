import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2ce568f3 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _e8a866f4 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _c3919a0c = () => interopDefault(import('../pages/history.vue' /* webpackChunkName: "pages/history" */))
const _1644e6cf = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _5136ceff = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _4c9d43b8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2ce568f3,
    name: "about"
  }, {
    path: "/contact",
    component: _e8a866f4,
    name: "contact"
  }, {
    path: "/history",
    component: _c3919a0c,
    name: "history"
  }, {
    path: "/login",
    component: _1644e6cf,
    name: "login"
  }, {
    path: "/project",
    component: _5136ceff,
    name: "project"
  }, {
    path: "/",
    component: _4c9d43b8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
