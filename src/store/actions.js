
import {
  getSwiperUrl,
  getMsiteData,
  getTopicData,
  getNavData
} from '../api'
import {
  GET_SWIPER_DATA,
  GET_MSITE_DATA,
  GET_TOPIC_DATA,
  GET_NAV_DATA
} from './mutation-types'

export default {
  async getSwiperData ({commit},cb) {
    const result = await getSwiperUrl()
    if(result.code === 0){
      const data = result.data;
      commit(GET_SWIPER_DATA,{data})
      typeof cb==='function' && cb()
    }
  },
  async getMsiteData ({commit},cb) {
    const result = await getMsiteData()
    if(result.code === 0){
      const data = result.data;
      commit(GET_MSITE_DATA,{data})
      typeof cb==='function' && cb()
    }
  },
  async getTopicData ({commit},cb) {
    const result = await getTopicData()
    if(result.code === 0){
      const data = result.data;
      commit(GET_TOPIC_DATA,{data})
      typeof cb==='function' && cb()
    }
  },
  async getNavData ({commit},cb) {
    const result = await getNavData()
    if(result.code === 0){
      const data = result.data;
      commit(GET_NAV_DATA,{data})
      typeof cb==='function' && cb()
    }
  }
}
