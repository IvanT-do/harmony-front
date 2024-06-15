
//Функционал добавления ко всем изображениям начальной ссылки
export const useImageInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.response.use((value) => {
        if(Array.isArray(value.data)){
            value.data = value.data.map(item => {
                if(item && typeof item === "object" && !Array.isArray(item)){
                    if("image" in item){
                        item.image = (import.meta.env.VITE_BASE_URL + import.meta.env.VITE_IMAGE_BASE_PATH).replace(/([^:])\/\//g, "$1/") + item.image;
                    }
                }
                return item;
            });
        }

        return value;
    })
}