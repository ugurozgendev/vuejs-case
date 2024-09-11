import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  perPage: number
  perPageDataCount: number
  selectedPosts: number[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    perPage: 6,
    perPageDataCount: 6,
    selectedPosts: []
  },
  mutations: {
    setPerPage(state, perPage) {
      state.perPage = perPage
    },
    setPerPageDataCount(state, count) {
      state.perPageDataCount = count
    },
    addPosts(state, payload) {
      state.selectedPosts = [
        ...state.selectedPosts,
        ...payload.filter((id: number) => !state.selectedPosts.includes(id))
      ]
    },
    removePost(state, removeId) {
      state.selectedPosts = [...state.selectedPosts.filter((id) => removeId !== id)]
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}
