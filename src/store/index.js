import Vue from 'vue'
import Vuex from 'vuex'
import { _getUserInfo,_getPhonePre } from '../fetch/api'
import { print } from 'util';
import Cookies from 'js-cookie';
Vue.use(Vuex)

const user = {
  state: {
    meau: '',
    userInfo: '',
    globalsetting:null,
    preList:''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_MEAU: (state, name) => {
      state.meau = name
    },
    SET_USER: (state, data) => {
      state.userInfo = data
      let username = data.Account || '';
      Cookies.set('username',username);
    },
    OUT_USER: (state, name) => {
      state.userInfo = ''
    },
    SET_PRE: (state, data) => {
      state.preList = data;
    },
  },

  actions: {
    setNowMeau({commit, state},data){
        commit('SET_MEAU', data);
    },
    loginOut({commit, state},data){
      commit('OUT_USER', data);
    },
    getUserInfo({commit,state},data){
      return new Promise(function(resolve, reject){
        _getUserInfo().then( result => {
          if(result.Code == 0){
            const userInfo = result.Data;
            commit('SET_USER',userInfo);
            }
            resolve();
          })
          
      })
      
    },
    getNumberPre({commit,state},data){
      _getPhonePre().then(result =>{
        const preList = result.Data.country_list;
        commit('SET_PRE',preList);
      })
    }
  }
}

const store = new Vuex.Store({
  modules: {
      user
  }
})
export default store