//  Promise Practice Code of NodeJS

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('The promise is successful')

    },2000)
})

p.then(res=>console.log(res))
console.log('After !!');