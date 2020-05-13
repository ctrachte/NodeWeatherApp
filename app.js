// Following tutorial from:
// https://ngpec.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728910#overview

// Lesson 6.31
// console.log('Starting ...')

// setTimeout(() => {
//     console.log('2 Second Timer Popped!')
// }, 2000)

// setTimeout(() => {
//     console.log('Immediate Timer Popped!')
// }, 0)

// console.log('Stopping ...')

const request = require('postman-request')
const long = '-92.016712'
const lat =  '34.957049'
const access_key = '89cc5db32cd40ec478c4b603d3ec4460'

let weatherUrl = `http://api.weatherstack.com/current?access_key=${access_key}&query=${lat},${long}`

request({ url: weatherUrl }, (error, response) => {
    if (error) {
        console.log(error)
    } else {
        const data = JSON.parse(response.body)
        console.log(data)
    }
})