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
    uri: `${process.env.SERVER}/graphql`,
    fetch,
  });

  const cache = new InMemoryCache();

  // If on the client, recover the injected state
  if (!ssr) {
    // If on the client, recover the injected state
    if (typeof window !== 'undefined') {
      const state = window.__INITIAL_STATE__;
      if (state.apollo) {
        // If you have multiple clients, use `state.<client_id>`
        cache.restore(state.apollo.defaultClient);
      }
    }
  }

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
    ...(ssr ? {
      // Set this on the server to optimize queries when SSR
      ssrMode: true,
    } : {
      // This will temporary disable query force-fetching
      ssrForceFetchDelay: 100,
    }),
  });

  return apolloClient;
}
