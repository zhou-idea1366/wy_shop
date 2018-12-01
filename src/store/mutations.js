
import {
  GET_SWIPER_DATA,
  GET_MSITE_DATA,
  GET_TOPIC_DATA,
  GET_NAV_DATA
} from './mutation-types'

export default {
   [GET_SWIPER_DATA] (state,{data}){
    state.SwiperData =data
   },
   [GET_MSITE_DATA] (state,{data}){
    state.dataHome =data
   },
   [GET_TOPIC_DATA] (state,{data}){
    state.dataTopic =data
   },
   [GET_NAV_DATA] (state,{data}){
    state.dataNav =data
   }
}
