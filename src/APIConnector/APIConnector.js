const api_endpoint = 'http://127.0.0.1:8000/api/'

const axios = require('axios');

const test_mode = true

const getItemByID = async (id) => {
    return axios.get(api_endpoint + "item/" + id +"/").then(function (result) {
        // handle success
        // console.log(JSON.stringify(result.data))
        return result.data
    })
    .catch(function (error) {
        // handle error
        if (test_mode) return {
            "id":4,
            "name":"최신 15W 차량용 핸드폰 고속 무선 충전 거치대",
            "price":30,
            "url":"http://item.gmarket.co.kr/detailview/Item.asp?goodscode=1727799442",
            "options":"[]",
            "store":{
                "id":1,
                "name":"Gmarket"
            },
            "categories":{
                "id":6,
                "name":"Living"
            }
        }
        
        return new Error(error)
    
    })
}

const getActiveCategory = async () => {
    return axios.get(api_endpoint + "category/?isactive=True").then(result =>{
        return result.data
    }).catch(error => {
        if (test_mode) return {
            "data":[
                {"id":5,"name":"Fashion"},
                {"id":6,"name":"Living"},
                {"id":7,"name":"Beauty"},
                {"id":8,"name":"Kid"}]
            }
        return new Error(error)
    })
}

const getItemsByCategory = async (category, limit) => {
    let endpoint = api_endpoint + `item/?category=${category}`
    if (limit) endpoint += `&limit=${limit}`

    return axios.get(endpoint).then(result =>{
        return result.data
    }).catch(error => {
        if (test_mode){
            return {"data":[
                {
                    "id":4,
                    "name":"최신 15W 차량용 핸드폰 고속 무선 충전 거치대",
                    "price":30,
                    "url":"http://item.gmarket.co.kr/detailview/Item.asp?goodscode=1727799442",
                    "options":"[1,2,3]",
                    "store":{
                        "id":1,
                        "name":"Gmarket"
                    },
                    "categories":{
                        "id":6,
                        "name":"Living",
                        "is_active":true
                    }
                },
                {"id":4,"name":"최신 15W 차량용 핸드폰 고속 무선 충전 거치대","price":30,"url":"http://item.gmarket.co.kr/detailview/Item.asp?goodscode=1727799442","options":"[]","store":{"id":1,"name":"Gmarket"},"categories":{"id":6,"name":"Living","is_active":true}},
                {"id":4,"name":"최신 15W 차량용 핸드폰 고속 무선 충전 거치대","price":30,"url":"http://item.gmarket.co.kr/detailview/Item.asp?goodscode=1727799442","options":"[]","store":{"id":1,"name":"Gmarket"},"categories":{"id":6,"name":"Living","is_active":true}},
                {"id":4,"name":"최신 15W 차량용 핸드폰 고속 무선 충전 거치대","price":30,"url":"http://item.gmarket.co.kr/detailview/Item.asp?goodscode=1727799442","options":"[]","store":{"id":1,"name":"Gmarket"},"categories":{"id":6,"name":"Living","is_active":true}},
                {"id":4,"name":"최신 15W 차량용 핸드폰 고속 무선 충전 거치대","price":30,"url":"http://item.gmarket.co.kr/detailview/Item.asp?goodscode=1727799442","options":"[]","store":{"id":1,"name":"Gmarket"},"categories":{"id":6,"name":"Living","is_active":true}}
            ]}
        }
        return new Error(error)
    })
}

export default {
    getItemByID,
    getActiveCategory,
    getItemsByCategory
}