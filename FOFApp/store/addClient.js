export default {
	namespaced: true,
	state: () => ({
		errorMap: {
			'Name': '请输入姓名',
			'Mobile': '请输入手机号',
			'Email': '请输入邮箱',
			'Corp': '请输入学校/公司名称',
			"Area": '请输入所在区域',
		},
		baseForm:{
			Name: '',
			Mobile: '',
			Email: '',
			Corp: '',
			Area: ''
		},
		clientForm:{
			Name: '',
			Mobile: '',
			Email: '',
			Corp: '',
			Area: ''
		},
		teamList:[],    //委托团体
	}),
	mutations: {
		updateClientForm(state, val){
			console.log('---store------',val)
			state.clientForm = {...state.clientForm,...val}
			console.log('--结果-',state.clientForm)
		},
		updateTeamList(state, val){
			if(val && val.length ===0){
				state.teamList = []
			}else{
				state.teamList = [...state.teamList, ...val || []]
			}
		},
		cleanForm(state){
			state.clientForm=state.baseForm
		}
	},

	getters: {

	}
}
