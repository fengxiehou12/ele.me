import axios from 'axios'
import Api from '../api'
import {handleImage} from '../util/handleImages'
import {handleBgImage} from '../util/handleImages'

//详情页顶部数据请求
export function getSellerData(id, lat, lon){
    return new Promise((resolve, reject)=>{
        let path = Api.DETAIL_HEADER_URL +'/'+id;
        axios.get(path, {
            params: {
                extras: ['activities','albums','license','identification','qualification'],
                terminal: 'h5',
                latitude: lat,
                longitude: lon
            }
        })
        .then(response=>{
            let result = {
                logo: handleImage(response.data.image_path, 130), //logo
                bgimg: handleBgImage(response.data.image_path), //背景
                name: response.data.name,   //商铺名
                rating: response.data.rating, //评分
                recent_order_num: response.data.recent_order_num,   //月销量
                delivery_mode: response.data.delivery_mode.text,    //配送方式
                time: response.data.order_lead_time,  //配送时间
                distance: response.data.distance,
                promotion_info: response.data.promotion_info,      //提示
                activities: response.data.activities?response.data.activities.map(act=>{   //活动
                    return {
                        icon_name: act.icon_name,
                        icon_color: act.icon_color,
                        description: act.description
                    }
                }):null,

            }
             resolve(result);
        })
    })
}

//详情页详情数据请求
// export function getSellerDetailData(id){
//     return new Promise((resolve, reject)=>{
//         axios.get(Api.DETAIL_LIST_URL, {
//             params: {
//                 restaurant_id: id
//             }
//         })
//         .then(response=>{
//             console.log(response.data);
//             let result = response.data.map(res=>{
                
//                 return {
//                     name: res.name,
//                     description: res.description,
//                     foods: res.foods.map(fd=>{
//                         console.log(fd.specfoods[0].price);
//                         return {
//                             rating: fd.rating,
//                             description: fd.description,
//                             month_sales: fd.month_sales,
//                             image_path: handleImage(fd.image_path, 140),
//                             name: fd.name,
//                             benefit_text: fd.activity!=null ? fd.activity.benefit_text:null,
//                             discountNum: fd.activity!=null ? fd.activity.applicable_quantity_text:null,
//                             original_price: fd.specfoods[0].original_price?fd.specfoods[0].original_price:fd.specfoods[0].price,
//                             price: fd.specfoods[0].price ? fd.specfoods[0].price : original_price
//                         }
//                     })
//                 }
//             })
         
//             resolve(result);
//         })
//     })
// }


export function getSellerDetailData(id){
    return new Promise((resolve, reject)=>{
        axios.get(Api.DETAIL_LIST_URL,{
            params: {
                restaurant_id:id
            }
        }).then((response)=>{
            
            let menuData=response.data.map(item=>{
                
                let food=item.foods.map(food=>{
                    //原价
                    let original_price=food.specfoods[0].original_price?food.specfoods[0].original_price:food.specfoods[0].price
                    //价格
                    let activity_price=null;
                    //判断有没有活动
                    let activity=null;
                    if(food.activity){
                        activity={
                            benefit_text: food.activity.benefit_text,
                            activity_price:food.activity.fixed_price,//活动价
                            activity_text:food.activity.applicable_quantity_text,    //活动说明
                            activity_text_color:food.activity.applicable_quantity_text_color,    //活动说明颜色
                            activity_num:food.activity.applicable_quantity,
                        };
                        //console.log(food.activity)
                        activity_price=food.activity.fixed_price;
                    }
                    //判断有没有规格
                    let specifications=null
                    if(food.specifications){
                        specifications=food.specifications
                    }
                    //判断价格
                    let price=activity_price?activity_price:original_price;
                    return{
                        img:handleImage(food.image_path,130),   //图片
                        name:food.name,                   //名称
                        description:food.description,     //说明
                        month_sales:food.month_sales,     //销量
                        satisfy_rate:food.satisfy_rate,   //评价
                        activity,                          //活动
                        price,//价格
                        specifications,           //规格  给规格加上名字 id 和价格
                        attributes:food.attributes,   //新品种
                        count:0,                    //数量
                        
                    }
                })
                return{
                    title:item.name,    //标题
                    description: item.description,  //描述
                    title_icon:handleImage(item.icon_url,90),
                    food,    //食物
                }
            })
            console.log(menuData);
            resolve(menuData)
        })
    })
}
