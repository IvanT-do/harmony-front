export const useImageInterceptor = (axiosInstance) => {
    //подстановка
    axiosInstance.interceptors.response.use((value) => {
        if(Array.isArray(value.data)){
            value.data = value.data.map(item => {
                if(item && typeof item === "object" && !Array.isArray(item)){
                    if("image" in item){
                        item.image = (import.meta.env.VITE_BASE_URL + import.meta.env.VITE_IMAGE_BASE_PATH).replace(/([^:])\/\//g, "$1");
                    }
                }
                return item;
            });
        }

        return value;
    })
}