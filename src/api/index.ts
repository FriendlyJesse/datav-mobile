import request from '../utils/request'

export function getScreenMobileData () {
  return request({
    url: '/screen/mobile',
    method: 'get'
  })
}
