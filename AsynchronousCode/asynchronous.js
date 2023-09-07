// const repeat = ( str, times ) => {
    
//     let result = '';
//     for( let i = 0; i < times; i++ ){
//         result += str;
//     }
//     return result;

// }

// const scream = (str) => {
//     return str.toUpperCase();
// }

// const getRantText = ( phrase ) => {
//     let text = scream( phrase );
//     let rant = repeat( text, 8 );

//     return rant;
// }

// const makeRant = ( phrase, el ) => {
//     const h1 = document.createElement('h1');
//     h1.innerText = getRantText(phrase);
//     el.appendChild(h1);
// }

// makeRant( 'I hate mayonnaise', document.body );
// // makeRant( 'If you have to cough, please cover your mouth.   ', document.body );tg 


// console.log('I HAPPEN FIRST!');

// setTimeout(function(){
//     console.log('I HAPPEN THIRD!', 3000);
// })

// console.log('I HAPPEN SECOND!');


// CallBack Hell

const btn = document.querySelector('button');

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`;
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`;
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`;
//                 }, 5000)
//             }, 4000)
//         }, 3000)
//     }, 2000)
// }, 1000)

const moveX = ( element, amount, delay ) => {
    setTimeout( () => {
        element.style.transform = `translateX(${amount}px)`;
    }, delay)
}

moveX( btn, 600, 200 )

//PROMISES

// const willGetYouADog = new Promise( ( resolve, reject ) => {
//     const rand = Math.random();

//     if( rand < 0.5 ){
//         resolve();
//     }
//     else{
//         reject();
//     }
// } )

// // Every Promise has a then method that accepts a callback when the promise runs successfully

// willGetYouADog.then( () => {
//     console.log('Yay we got a Dog');
// })

// willGetYouADog.catch( () => {
//     console.log('No DOg!');
// })

// const willGetYouADog = new Promise( ( resolve, reject ) => {
//     const rand = Math.random();

//     setTimeout( () => {
//         if( rand < 0.5 ){
//             resolve();
//         }
//         else{
//             reject();
//         }

//     }, 5000)
   
// } )

// Every Promise has a then method that accepts a callback when the promise runs successfully

// willGetYouADog.then( () => {
//     console.log('Yay we got a Dog');
// }).catch( () => {
//     console.log('No DOg!');
// })


// Functions can also return a promise

// const makeDogPromise = () => {
//     return new Promise( ( resolve, reject ) => {
//         const rand = Math.random();
    
//         setTimeout( () => {
//             if( rand < 0.5 ){
//                 resolve();
//             }
//             else{
//                 reject();
//             }
    
//         }, 5000)
       
//     } );
// };

// makeDogPromise()
// .then( () => {
//     console.log('YAY WE GOT A DOG!!!!');
// }).catch( () => {
//     console.log(':( NO DOG');
// })


// You Can Reject or Resolve a Promise with a Value

// const fakeRequest = (url) => {
//     return new Promise( ( resolve, reject ) => {
//         setTimeout( () => {
//             const rand = Math.random();

            

//                 const pages = {
//                     '/users' : [
//                         { id: 1, username: 'Bilbo'},
//                         { id: 5, username: 'Esmerada'},
//                     ],

//                     '/about' : 'This is the about page!'
//                 }
//                 const data = pages[url];

//                 if(data){
//                     resolve( { status : 200, data});
//                 }
//                 else{
//                     reject( { status: 404 } );
//                 }
              
            
//         }, 3000)
//     } )
// }

// fakeRequest('/users')
// .then( (res) => {
//     console.log('Status Code', res.status);
//     console.log('Data', res.data);
//     console.log('REQUEST WORKED!');
// })
// .catch( (res) => {
//     console.log(res.status);
//     console.log('REQUEST FAILED!');
// })


const fakeRequest = (url) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            const rand = Math.random();

            

                const pages = {
                    '/users' : [
                        { id: 1, username: 'Bilbo'},
                        { id: 5, username: 'Esmerada'},
                    ],

                    '/users/1' : [
                        { id: 1, 
                          username: 'Bilbo',
                          upVotes: 360,
                          city: 'Lisbon',
                          topPostId: 454321
                        },
                       
                    ],
                    '/users/5' : [
                        { id: 5, 
                          username: 'Esmerel',
                          upVotes: 571,
                          city: 'Honolulu',
                          topPostId: 454321
                        },
                        { id: 5, username: 'Esmerada'},
                    ],
                    '/posts/454321': {
                        id: 454321,
                        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    },

                    '/about' : 'This is the about page!'
                }
                const data = pages[url];

                if(data){
                    resolve( { status : 200, data});
                }
                else{
                    reject( { status: 404 } );
                }
            
            
        }, 3000)
    } )
}

fakeRequest('/users').then( (res) => {
    
    const id = res.data[0].id;
    console.log(id);
    fakeRequest(`/users/${id}`).then( (res) =>{
        console.log(res)
    })
})