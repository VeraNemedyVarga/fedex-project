class Ajax {

    constructor() {
        this.root = ''; // server URL
        this.getHeaders = new Headers({'': /*token name*/ window.sessionStorage.accessToken});
        this.postHeaders = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
        this.putHeaders = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json', '': /*token name*/ window.sessionStorage.accessToken})
    }

    postData(endpoint, dataToSend) {
        return new Promise((resolve, reject) => {
            fetch(this.root + endpoint, {
                method: 'POST',
                headers: this.postHeaders,
                body: JSON.stringify(dataToSend)
            }).then( res => {
                res.json().then( data => {
                    resolve(data)
                });
            });
        });
    }

    loadData(endpoint) {
        return new Promise((resolve, reject) => {
            fetch(this.root + endpoint, {
                method: 'GET',
                headers: this.getHeaders
            }).then( res => {
                res.json().then( data => {
                    resolve(data)
                });
            });
        });
    }

    putData(endpoint, dataToSend) {
        return new Promise((resolve, reject) => {
            fetch(this.root + endpoint, {
                method: 'PUT',
                headers: this.putHeaders,
                body: JSON.stringify(dataToSend)
            }).then( res => {
                res.json().then( data => {
                    resolve(data)
                });
            });
        });
    }
}

export default Ajax;
