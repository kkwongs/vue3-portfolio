import projectInfo from "./projectInfo";

export default {
  namespaced: true,
  state() {
    return {
      isShowProject: false,
      isShowProjectImage: false,
      projectNum: null,
      projectInfo,
    };
  },
  mutations: {
    showProject(state, payload) {
      state.isShowProject = true;
      state.projectNum = payload;
    },
    closeProject(state) {
      state.isShowProject = false;
    },
    showProjectImage(state, payload) {
      state.isShowProjectImage = true;
      state.projectNum = payload;
    },
    closeProjectImage(state) {
      state.isShowProjectImage = false;
    },
  },
};
