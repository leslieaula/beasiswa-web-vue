import Vue from 'vue';
import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

// Install the vue plugin
Vue.use(VueApollo);

// Create the apollo client
export function createApolloClient(ssr = false) {
  const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: 'https://api.graph.cool/simple/v1/cjdxua0np003o0186k4jmb8xh',
    fetch,
  });

  const ileterate = {};
  const cache = new InMemoryCache();

  // If on the client, recover the injected state
  if (!ssr && typeof window !== 'undefined') {
    const state = window.__INITIAL_STATE__;

    // If you have multiple clients, use `state.<client_id>`
    if (state.apollo) cache.restore(state.apollo.defaultClient);

    // Set this on the server to optimize queries when SSR
    ileterate.ssrForceFetchDelay = 100;
  } else if (ssr) {
    // Set this on the server to optimize queries when SSR
    ileterate.ssrMode = true;
  }

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
    ...ileterate,
  });

  return apolloClient;
}
