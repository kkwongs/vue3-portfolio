import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      isShowProject: false
    }
  },
  mutations: {
    showProject(state) {
      state.isShowProject = !state.isShowProject;
    }
  }
})