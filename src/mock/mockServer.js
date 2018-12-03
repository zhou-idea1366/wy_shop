import Mock from 'mockjs'
import SwiperData from './swiper'
import dataHome from './datahome.json'
import dataTopic from './datatopic.json'
import categoryData from './category.json'
import dataNav from './datanav.json'

Mock.mock('/swiperData', {code: 0, data: SwiperData.banner})
Mock.mock('/home', {code: 0, data: dataHome})
Mock.mock('/datatopic', {code: 0, data: dataTopic})
Mock.mock('/datanav', {code: 0, data: dataNav.categoryL1List})
Mock.mock('/categoryData', {code:0, data: categoryData})
