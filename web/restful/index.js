/**
 * 已废弃，请使用nros.restful发送请求
 */
import axios from 'axios'

const Restful = {
    /**
     * 默认返回JSON对象
     * @param {String|Object} url {url:'',headers: {}}
     * @param {} data
     */
    get(url) {
        let urlStr = formatURL(url);
        if(url.data) {
            let query = '';
            for(let key in url.data) {
                if(url.data.hasOwnProperty(key)) {
                    let value = url.data[key];
                    query += key + '=' + typeof value === 'string'?value:JSON.stringify(value) + '&'
                }
            }
            if(query.length > 0){
                query = query.slice(0, query.length - 1);
                urlStr+= '?' + query;
            }
        }
        return axios.get(urlStr)
    },
    post(url, data) {
        let urlStr = formatURL(url);
        data = typeof(data) === 'string' ? JSON.parse(data) : data
        return axios.post(urlStr,data)
    },
    postJSON(url, data) {
        return Restful.post(url, data);
    },
    delete(url, data) {
        let urlStr = formatURL(url);
        data = typeof(data) === 'string' ? JSON.parse(data) : data
        return axios.delete(urlStr,data);
    },
    put(url, data) {
        let urlStr = formatURL(url);
        data = typeof(data) === 'string' ? JSON.parse(data) : data
        return axios.put(urlStr,data);
    }
};

//==================================private==================================
function formatURL(url) {
    let urlStr, _u;
    if (typeof url === 'object') {
        _u = url.url;
        if (!_u.startsWith('/')) _u = '/' + _u;
    } else {
        _u = url;
        if (!_u.startsWith('/')) _u = '/' + _u;
    }
    if(rootConfig && rootConfig.url) {
        urlStr = rootConfig.url + _u;
    }else {
        urlStr = _u;
    }
    return urlStr;
}

function setHeaders(url) {
    let headers;
    headers = url.headers || {};

    let hasContentType = false;
    let hasAccept = false;

    for (let header in headers) {
        if (headers.hasOwnProperty(header)) {
            if(header === 'data') continue;
            if (typeof headers[header] === 'string') {
                let lower = header.toLowerCase();
                if(lower === 'content-type') hasContentType = true;
                if(lower === 'accept') hasContentType = true;
            }
        }
    }
    if(!hasContentType) {
        headers['content-type'] = 'application/json';
    }
    if(!hasAccept) {
        headers['accept'] = 'application/json';
    }
    return headers;
}

export default Restful;


export default 