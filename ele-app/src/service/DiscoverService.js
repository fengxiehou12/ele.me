import axios from 'axios'
import Api from '../api'
import {handleImage} from '../util/handleImages'
import {handleImageNotZip} from '../util/handleImages'
//请求发现页顶部数据
export function getDiscoverTop(platform, block_index, lat, lon,){
    return new Promise((resolve, reject)=>{
        axios.get(Api.DISCOVERTOP_URL, {
            params: {
                platform,
                block_index,
                latitude: lat,
                longitude: lon,
            }
        })
        .then(response=>{
            // console.log(response.data[1])
            let result = response.data[1].map(item=>{
                return {
                    img: handleImage(item.main_pic_hash, 90),   //图片
                    title: item.title,     //标题
                    subtitle: item.subtitle   //副标题
                }  
            })
            let result2 = response.data[2].map(item=>{
                return {
                    img: handleImage(item.main_pic_hash, 90),   //图片
                    title: item.title,     //标题
                    subtitle: item.subtitle   //副标题
                }  
            })
           
            let res = {
                result:result
            }
            resolve(result);
        
        })
        .catch(error=>{
            
        })
    })
}


//请求发现页每日推荐数据
export function getRecommend(lat, lon, offset, limit){
    return new Promise((resolve, reject)=>{
        axios.get(Api.RECOMMEND_URL, {
            params: {
                latitude: lat,
                longitude: lon,
                offset,
                limit
            }
        })
        .then(response=>{
            console.log(response)
            let result = response.data.items.map(item=>{
                return {
                    img: handleImageNotZip(item.food.image_path, 90),   //图片
                    name: item.food.name,
                    month_sales: item.food.month_sales,
                    satisfy_rate: item.food.satisfy_rate,
                    price: item.food.price,
                    discount_activity: item.food.discount_activity,
                    restaurant_name: item.food.restaurant_name
                }  
            })
            console.log(result);
            resolve(result);
        
        })
        .catch(error=>{
            
        })
    })
}

 //请求发现页限时好礼数据
export function getlimit(){
    return new Promise((resolve, reject)=>{
        axios.get(Api.LIMIT_URL)
        .then(response=>{
            console.log(response)
            let result = response.data.map(item=>{
                return {
                    img: handleImage(item.image_hash, 90),   //图片
                    title: item.title,
                    points_required: item.points_required,
                    original_price: item.original_price,
                    corner_marker: item.corner_marker,
                    url: item.url
                }  
            })
            console.log(result);
            resolve(result);
        
        })
        .catch(error=>{
            
        })
    })
}