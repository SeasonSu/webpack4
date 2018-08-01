import request from 'utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
    console.log('api/queryCurrent')
  return request('/api/currentUser');
}
