var Mock = require('mockjs');

module.exports = {
    getComment: Mock.mock({
        'error': 0,
        'message': 'success',
        'result|5': [{
            'author': '@name',
            'comment': '@cparagraph',
            'date': '@datetime',
            'name': '@name'
        }]
    }),
    addComment: Mock.mock({
        'error': 0,
        'message': 'success',
        'result': []
    }),
    getName: {
        'name': '112dd'
    },
    userLogin: Mock.mock({
        'code': 200,
        'msg': 'ok',
        'data': '@string(15)'
    }),
    queryUserScroll: Mock.mock({
        'code': 200,
        'msg': '',
        'data': {
            'scrollPrize|5': [{
                'name': '@cname()',
                'residue|10-100': 200
            }],
            'scrollWin|10': [{
                'phone|13000000000-18999999999': 1,
                'specialtyNo|+1000': 100,
                'name': '@cname()',
                'ctime': '@datetime'

            }]
        }
    }),
    adminLogin: {
        'code': 200,
        'data': {
            'menus': [{
                'path': '/analyze',
                'component': 'layout',
                'name': '分析',
                'iconCls': 'el-icon-search',
                'leaf': false,
                'children': [{
                        'path': '/analyze/research',
                        'name': '调研结果',
                        'component': 'main',
                        'leaf': true
                    }]
            }, {
                    'path': '/plan',
                    'component': 'layout',
                    'name': '计划',
                    'iconCls': 'el-icon-menu',
                    'leaf': false,
                    'children': [{
                        'path': '/plan/enact',
                        'name': '计划制定',
                        'component': 'main',
                        'leaf': true
                    }]
                }, {
                    'path': '/carry',
                    'component': 'layout',
                    'name': '实施',
                    'iconCls': 'el-icon-menu',
                    'leaf': false,
                    'children': [{
                        'path': '/carry/research',
                        'name': '客户管理',
                        'component': 'main',
                        'leaf': true
                    }]
                }, {
                    'path': '/system',
                    'component': 'layout',
                    'name': '系统管理',
                    'iconCls': 'el-icon-setting',
                    'leaf': false,
                    'children': [{
                        'path': '/system/research',
                        'name': '问卷制定',
                        'component': 'main',
                        'leaf': true
                    }]
                }, {
                    'path': '/assess',
                    'component': 'layout',
                    'name': '评估',
                    'iconCls': 'el-icon-setting',
                    'leaf': false,
                    'children': [{
                        'path': '/assess/research',
                        'name': '督考主任',
                        'component': 'main',
                        'leaf': true
                    }]
                }

            ]
        },
        'msg': 'ok'
    }

};