import * as components from '../pages/**/*.js'

var ignoreArr = ['main']
var routes = []
for(var key in components){
    let path = key.replace(/\$/ig,'/').replace(/\_/ig,'').toLowerCase()
    let ignore = false
    ignoreArr.map((item)=>{
        if(path.indexOf(item) > -1){
            ignore = true
        }
    })
    let pathArr = path.split('/')
    if(pathArr[pathArr.length - 1].indexOf('index') > -1){
        path = path.substring(0,path.lastIndexOf('/'))
    }
    if(path.indexOf('home') > -1){
        path = ''
    }
    if(!ignore && components[key] && typeof(components[key]) == 'function'){
        routes.push({
            path:`/${path}`,
            component:components[key]
        })
    }
}

module.exports = routes
