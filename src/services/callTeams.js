const axios = require('axios');

export const getTeams = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/teams')
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.response.data.message);
            })
    })
}

export const postTeam = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3001/teams', data)
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
