import { isUrl } from 'utils/utilsMenu';
import menu from './menu'

function formatter(data, parentPath = '/', parentAuthority) {
    return data.map(item => {
        let { path } = item;
        if (!isUrl(path)) {
            path = parentPath + item.path
        }
        const result = {
            ...item,
            path,
            authority: item.authority || parentAuthority,
        }
        if (item.children) {
            result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority)
        }
        return result
    })
}

export const getMenuData = () => formatter(menu);
