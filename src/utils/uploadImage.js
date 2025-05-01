import { API_PATHS } from "./apiPath";
import axiosInstance from "./axiosInstance";

const uploadImage = async (ImageFile) => {
    const formData = new FormData();
    formData.append('image', ImageFile);

    try {
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
            header: {
                'content-type': 'multipart/form-data'
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error uploading the image", error);
        throw error;
    }
}

export default uploadImage;
