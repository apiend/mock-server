var Mock = require('mockjs');

module.exports = {
    getComment: Mock.mock({
        "error": 0,
        "message": "success",
        "result|5": [{
            "author": "@name",
            "comment": "@cparagraph",
            "date": "@datetime",
            "name": "@name"
        }]
    }),
    addComment: Mock.mock({
        "error": 0,
        "message": "success",
        "result": []
    }),
    getName: {
        "name": "112dd"
    },
    userLogin: Mock.mock({
        "code": 200,
        "msg": "ok",
        "data": "@string(15)"
    }),
    queryUserScroll: Mock.mock({
        "code": 200,
        "msg": "",
        "data": {
            "scrollPrize|5": [{
                "name": "@cname()",
                "residue|10-100": 200
            }],
            "scrollWin|10": [{
                "phone|13000000000-18999999999": 1,
                "specialtyNo|+1000": 100,
                "name": "@cname()",
                "ctime": "@datetime"

            }]
        }


    })


};