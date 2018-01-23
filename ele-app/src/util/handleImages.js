import Api from '../api'
export function handleImage(path, size){
    if(path){
        let dataParams = path.endsWith('png')?'.png':'.jpeg';

        return Api.IMAGE_HOST
            + path + dataParams
            + `?imageMogr/format/webp/thumbnail/!${size}x${size}r/gravity/Center/crop/${size}x${size}/`
    }else{
        return '';
    }
}
export function handleImageNotZip(path){
    if(path){
        let dataParams = path.endsWith('png')?'.png':'.jpeg';

        return Api.IMAGE_HOST
            + path + dataParams
    }else{
        return '';
    }
}