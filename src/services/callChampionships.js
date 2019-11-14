const axios = require('axios');

export const getChampionships = () => {
    // créer une nouvelle promesse
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/championships/')
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.response.data.message);
            })
    })
}

export const postChampionship = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3001/championships/', data)
            .then((res) => {
                console.log(res.data.message)
                resolve(res.data)
            })
            .catch(err => {
                console.log(err.response.data.error)
                reject(err.response.data.error)
            })
    })
}
