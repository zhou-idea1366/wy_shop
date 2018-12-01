import ajax from './ajax'

export const getSwiperUrl = () => ajax('/swiperData')
export const getMsiteData = () => ajax('/home')
export const getTopicData = () => ajax('/datatopic')
export const getNavData = () => ajax('/datanav')
