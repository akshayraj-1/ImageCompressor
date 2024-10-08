import axios from "axios";
import PropTypes from "prop-types";

function useImageCompressor() {

    const API_URL = import.meta.env.VITE_COMPRESSOR_API_URL;
    const API_KEY = import.meta.env.VITE_COMPRESSOR_API_KEY;

    const compress = async (files = [], quality = 70, onProgress = () => {}) => {
        try {
            const formData = new FormData();
            formData.append("key", API_KEY);
            formData.append("quality", quality);

            files.forEach((file, idx) => {
                formData.append(`files[${idx}]`, file);
            });

            const response = await axios.post(
                API_URL, formData, {
                    timeout: 0,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        onProgress(percentCompleted);
                    },
                });
            return await response?.data || { success: false };
        } catch (e) {
            console.log(e.message);
            return e.response && e.response.data ? e.response.data : { success: false };
        }
    };

    compress.propTypes = {
        files: PropTypes.arrayOf(PropTypes.object).isRequired,
        quality: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        onProgress: PropTypes.func
    }

    return { compress };
}

export default useImageCompressor;