//封装分类数据的业务代码
//获取数据
import { getCategoryIdAPI } from '@/apis/category'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';


export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryIdAPI(id);
        categoryData.value = res.result
    }
    onMounted(() => {
        getCategory()
    })
    //目标：当路由参数发生变化时，可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}