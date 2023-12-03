import request from '@/utils/http'

export function getCategoryIdAPI(id) {
    return request({
        url: '/category',
        params: {
            id
        }
    })
}

export const getCategoryFilterAPI = (id) => {
    return request({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}