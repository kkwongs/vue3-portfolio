import projectInfo from './projectInfo'

export default {
  namespaced: true,
  state() {
    return {
      isShowProject: false,
      projectNum: '',
      projectInfo
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
}