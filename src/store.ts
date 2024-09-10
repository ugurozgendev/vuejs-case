import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  perPage: number
  perPageDataCount: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    perPage: 6,
    perPageDataCount: 6
  },
  mutations: {
    setPerPage(state, perPage) {
      state.perPage = perPage
    },
    setPerPageDataCount(state, count) {
      state.perPageDataCount = count
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}
