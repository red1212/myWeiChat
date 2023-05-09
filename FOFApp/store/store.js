import Vue from 'vue'
import Vuex from 'vuex'

import moduleUsers from './users.js'
import moduleClient from './addClient.js'
import modulePurchase from './purchase.js'
Vue.use(Vuex)

// 3. 创建 Store 的实例对象
const store = new Vuex.Store({
  // TODO：挂载 store 模块
  modules: {
	m_users:moduleUsers,
	m_client:moduleClient,
	m_purchase:modulePurchase
  },
})

// 4. 向外共享 Store 的实例对象
export default store
