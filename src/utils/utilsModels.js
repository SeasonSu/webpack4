import * as models from '../models/*.js'

export const loadModels = app => {
    for(var key in models){
        models[key] && app.model(models[key])
    }
}
