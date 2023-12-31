import { defineStore } from "pinia";
import axios from "axios";

//사용자 인증처리 전역저장소
export const useAuthStore = defineStore("auth", {
  persist: true,
  state: () => {
    return {
      user: null,
      accessToken: null,
      refreshToken: null,
    };
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    setAccessToken(accessToken) {
      this.accessToken = accessToken;
    },
    setRefreshToken(refreshToken) {
      this.refreshToken = refreshToken;
    },
    async login(user) {
      try {
        const response = await axios.post("http://localhost:8080/login", user);
        console.log("login....1");
        this.user = response.data.user;
        this.accessToken = response.data.accessToken;
        this.refreshToken = response.data.refreshToken;
        //로컬스토리지 저장

        return response;
      } catch (err) {
        throw err;
      }
    },
    logout() {
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;
    },
  },

  getters: {
    getUser: (state) => {
      return state.user;
    },
    getAccessToken: (state) => {
      return state.accessToken;
    },
    getRefreshToken: (state) => {
      return state.refreshToken;
    },
  },
});
