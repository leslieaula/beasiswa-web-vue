import Vue from 'vue';
import App from './App';

import { createStore } from 'store/index';
import { createRouter } from 'router/index';
import { sync } from 'vuex-router-sync';

import VueApollo from 'vue-apollo';
import { createApolloClient } from '../api/apollo';

require('static/bootstrap/bootstrap.min.css');
require('static/bootstrap/bootstrap-theme.min.css');

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp(ssrContext) {
  // create store and router instances
  const store = createStore();
  const router = createRouter();

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router);

  const apolloClient = createApolloClient(ssrContext.ssr);
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  });

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    apolloProvider,
    ssrContext,
    render: h => h(App),
  });

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return {
    app,
    router,
    store,
    apolloProvider,
  };
}
