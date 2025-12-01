import axiosClient from "@/apis/axiosClient";

const addProductToCart = async (data) => {

    return await axiosClient.post('/cart', data)

}

export {addProductToCart}