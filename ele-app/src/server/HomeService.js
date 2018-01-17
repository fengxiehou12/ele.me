import axios from 'axios'
import Api from '../api'
import {handleImage} from '../util/handleImages'

//请求banner的函数
export function getBannerdata(lat, lon, tmp){
    return new Promise((resolve, reject)=>{
        //创建get请求banner数据
        axios.get(Api.BANNER_URL, {
            params: {
                'latitude': lat,
                'longitude': lon,
                'templates': tmp
            }
        })
        //请求成功
        .then((response)=>{
            let newData = response.data[0].entries.map(item=>{
                return {
                    name: item.name,
                    img: handleImage(item.image_hash, 90)
                }
            })
            console.log(newData)
            //对数据执行8条为1页banner的切割
            let resultData = [];
            while(newData.length>0){
                resultData.push(newData.splice(0, 8));
            }
            console.log(resultData)
            resolve(resultData);
        })
        //请求失败
        .catch((error)=>{

        })
    })
}