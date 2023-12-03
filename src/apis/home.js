import httpInstance from '@/utils/http'

//获取banner
export function getBannerAPI(params={}) {
    //默认为1，商品列表为2
    const {distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}

export function findNewAPI() {
    return httpInstance({
        url: 'home/new'
    })
}

export function getHotAPI() {
    return httpInstance({
        url: 'home/hot'
    })
}

export function getGoodeAPI() {
    return httpInstance({
        url: 'home/goods'
    })
}