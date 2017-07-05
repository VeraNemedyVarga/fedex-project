class Ajax {
    get(url, callback, header) {
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url);
        httpRequest.setRequestHeader('Accept', 'application/json');
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        // httpRequest.setRequestHeader('x-access-token', header);
        httpRequest.send();
        httpRequest.onreadystatechange = function() {
            if(httpRequest.status === 200 && httpRequest.readyState === 4) {
                let data = JSON.parse(httpRequest.response);
                callback(data);
            }
        }
    }
    post(url, callback, response) {
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', url);
        httpRequest.setRequestHeader('Accept', 'application/json');
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.send(response);
        httpRequest.onreadystatechange = function() {
            if(httpRequest.status === 200 && httpRequest.readyState === 4) {
                let data = JSON.parse(httpRequest.response);
                callback(data);
            }
        }
    }
}

export default Ajax
