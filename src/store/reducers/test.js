
const initState = {
	num:1
}




export function testReducer(state = initState,action){
	if(action.type == 'TEST'){
		state.num = state.num+1;
			
	}
	return { ...state }
}