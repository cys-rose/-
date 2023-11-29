import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layouts';
import { ref } from 'vue';
export const useCategoryStore = defineStore('category', () => {
    // 导航列表的逻辑
    const categoryList = ref([])
    const getCategory = async () => {
        const res = await getCategoryAPI()
        console.log(res);
        categoryList.value = res.result
    }

    return {
        categoryList,
        getCategory
    }
})
