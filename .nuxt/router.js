import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _209350eb = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _4b7f967e = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _09f2cec7 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _110a98f7 = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages_project" */))
const _404b2bb0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _209350eb,
    name: "about"
  }, {
    path: "/contact",
    component: _4b7f967e,
    name: "contact"
  }, {
    path: "/login",
    component: _09f2cec7,
    name: "login"
  }, {
    path: "/project",
    component: _110a98f7,
    name: "project"
  }, {
    path: "/",
    component: _404b2bb0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
