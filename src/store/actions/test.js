import {TEST} from '@/store/consts'



export async function test(parameter){
	return {
		type:TEST,
		parameter
	}
}