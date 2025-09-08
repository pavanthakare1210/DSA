// Statements
//  i)looping statements


// if statement
let a=90;
if (a>10) {
    console.log("a is greater than 10");
}



// if...else statement
let a1=90;
if (a1>95) {
    console.log('your eligible');
    
} else {
    console.log('your not eligible');
    
}

// if...else ladder statement
let age=50;
if (age>=60) {
    console.log('you are senior citizen');
    
} else if(age>=18){
    console.log('you are eligible for vote');
    
} else if(age==17){
console.log('please wait for 1 year');

}else{
    console.log('you are not eligible to vote');
}



// Looping statements

  // i)for loop
    // for(let i=1; i<=10;i++){
    //    console.log('result is :'+i);
        
    // }

    // for(let i=10; i>=1; i--){
    //     console.log('result is :'+i);
        
    // }


    // ii)while loop

    // let p=1;
    // while(p<=10){
    //     console.log('value is :'+p);
    //     p++
    // }


    // iii)DO while Loop

    let arr=5;
    do {
       console.log(arr);
       arr++;
        
    } while (arr<=10);



    // iv)For Each Loop

    let anny=['pavan','rohan','abhay','shonty'];
    for(let val of anny){
        console.log(val);
    
    }

    // v)Inhance Loop

    let fruits=['banana','jerry','mango','jelly']
    for(let i of fruits){
        console.log(i);
        
    }