import * as components from '../pages/**/*.js'
import * as models from '../pages/**/*.model.js'
console.log(typeof(models))
console.log(models)
console.log(components)
var ignoreArr = ['main']
var routes = []
var error = []
for(var key in components){
    let path = key.replace(/\$/ig,'/').replace(/\_/ig,'').toLowerCase()
    let ignore = false
    let _router = {}
    for(var keyM in models){
        if(keyM == key){
            _router.models = models[keyM]
        }
    }
    ignoreArr.map((item)=>{
        if(path.indexOf(item) > -1){
            ignore = true
        }
    })
    let pathArr = path.split('/')
    if(pathArr[pathArr.length - 1].indexOf('index') > -1){
        _router.path = path.substring(0,path.lastIndexOf('/'))
    }
    if(path.indexOf('home') > -1){
        _router.path = ''
    }
    _router.component = components[key]
    if(!ignore && components[key] && typeof(components[key]) == 'function'){
        if(path.indexOf('error') > -1){
            _router.path = '*'
            error.push(_router)
        }else{
            _router.path = `/${_router.path}`
            routes.push(_router)
        }

    }
}

routes = routes.concat(error)

module.exports = routes
