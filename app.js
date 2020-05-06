// Following tutorial from:
// https://ngpec.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728910#overview

console.log('Starting ...')

setTimeout(() => {
    console.log('2 Second Timer Popped!')
}, 2000)

setTimeout(() => {
    console.log('Immediate Timer Popped!')
}, 0)

console.log('Stopping ...')