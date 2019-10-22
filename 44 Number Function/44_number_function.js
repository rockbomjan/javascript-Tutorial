// const num_conv = () =>{
//     let x1 = true;
//     let x2 = false;
//     let x3 = "999";
//     let x4 = 8888;
//     let x5 = new Date();
//     let x6 = "Rose";
//     let result = Number(x1);//built Number function i.e. Number()
//     console.log(result);
// }

const num_conv = () =>{
    var x = [true, false, '999', 8888, new Date(), 'Rose']
    var i = 0;
    
    for (i; i<= x.length; i++){
        let result = Number(x[i])
        console.log(result);
    }
    
}