import { BANNER_MESSAGE } from '@/store/consts'



export const banner_message_fun = async (dispatch,getState) =>{
	dispatch({
	    type: BANNER_MESSAGE,
	    getState
	})
}
