// 先引入mockjs模块
import  Mock  from "mockjs";

import banner from './banner.json'
import floor from './floor.json'

// Mock.mock模拟，第一个参数模拟请求地址，第二个参数模拟请求数据
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})