
// leaarn call back function
// check if forEach returns a value 
// difference between methods and properties  
//event listener bubbling up
// look at event listeners
//arrey methods especially sort
//learn html forms better
//learn html i tags better


 
//let score = [30, 40, 10, 11, 31, 17, 60, 42]

// let outside = document.querySelector('#outer')

// outside.addEventListener('click', function hello (e){
  
//     e.stopPropagation()
  
//     outside.querySelector('.content').innerHTML += '<p> hello there </p>'
//     outside.removeEventListener( 'click', hello)
// })

// outside.querySelector('.content').addEventListener('click', function hello(e) {
//        //console.log(e.target)
//         e.stopPropagation()
     
//         if (e.target === outside.querySelector('.content') ){
//             e.target.innerHTML += '<p> hello there </p>'
//             outside.querySelector('.content').removeEventListener('click', hello)
         
//         } if (e.target !== outside.querySelector('.content') ){
//             console.log(e.target)
//             outside.querySelector('.content').removeEventListener('click', hello)
            
            
//         }
// })

// const products = [
//     {name: 'gold start', price: 20},
//     {name: 'butterman', price: 50},
//     {name: 'skrt', price: 30},
//     {name: 'err', price: 40},
//     {name: 'blood', price: 10}
// ]
// let changing = 0
// let tester = products.map( e => {

//     if (e.price > 30){
//         return {name: e.name,price:  e.price / 2}
//     } else{
//         return e
//     }
// })
// console.log(tester)

// let score = [30, 40, 10, 11, 31, 17, 60, 42]

// let hello = score.reduce((acc, itter)=>{
//     if (itter > 30){
//         acc++
//     } return acc
// } , 0)

// score.reduce((acc, itter)=>{
//     if (itter > 30){
//         acc++
//     } return acc
// }    , 0)

const addForm = document.querySelector('.add')
const todoEL = document.querySelector('.todos')
const search = document.querySelector('.search input')

const createTodo = todo =>{
  const  html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
    `;
    todoEL.innerHTML += html;
}

    addForm.addEventListener('submit', e => {
        e.preventDefault()
        let todo = addForm.add.value.trim(); 
       if (todo.length){
            createTodo(todo) 
            addForm.reset()
    };
 })



todoEL.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
    
})
 
const  filterTodos = (term) =>{
    Array.from(todoEL.children)
    .filter((itter) => !itter.textContent.toLowerCase().includes(term))
    .forEach((e)=>{e.classList.add('filtered')
    })
     
    Array.from(todoEL.children)
    .filter((itter) => itter.textContent.includes(term))
    .forEach((e)=>{e.classList.remove('filtered')
    })
     
}
search.addEventListener('keyup', (e) =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term)

});











