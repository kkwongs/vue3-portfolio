import { createStore } from 'vuex'
import project from './project'

export default createStore({
  modules: {
    project
  },
  state() {
    return {
      isShowProject: false,
      projectNum: ''
    }
  },
  mutations: {
    showProject(state, payload) {
      state.isShowProject = true;
      state.projectNum = payload;
    },
    closeProject(state) {
      state.isShowProject = false;
    }
  }
})