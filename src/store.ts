import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  perPage: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    perPage: 6
  },
  mutations: {
    setPerPage(state, perPage) {
      state.perPage = perPage
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}
