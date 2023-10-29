import axiosClient from "./axiosClient"


const catelogyApi = {
    getAll(params){
        const url= '/catelogies';
        return axiosClient.get(url,{params: params})
    },

    get(id){
        const url= `/catelogies/${id}`;
        return axiosClient.get(url)
    },

    add(data){
        const url= '/catelogies';
        return axiosClient.post(url,data)
    },

    update(data){
        const url= `/catelogies/${data.id}`;
        return axiosClient.patch(url,data)
    },

    remove(id){
        const url= `/catelogies/${id}`;
        return axiosClient.delete(url)
    }
} 
export  default catelogyApi