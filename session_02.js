// 2.Non-Primitive Operators:
    // types of Non-Primitive Opertors
        // 1.objects 2.array

        // 1.object
        let a={
            name:'pavan',
            age:23,
            city:'wsm'
        }
        console.log(a.name);
        console.log(a.age);
        console.log(a.city);
        console.log(a);

        // 2.array
        // types of array 
            // 1.singal Dymensional Array  2.Multi Dymensional Array

            // singal Dymensional Array
            let fruit=['apple','banana','jerry','chery'];
            console.log(fruit[3]);
            
            // Multi Dymensional Array:yat apan multiple column gheun tya madhe values divide karu tyana add karu shakto console.log madhil first array[] ha colum la select karto ani second array bracket[] he tya colum madhil value la show karto.
            // Exmaple, 
            let veg=[[1,2,3,4],[5,6,7,8,9]];
            console.log(veg[1][2]);//yat veg[1]ha konta clum select karacha to vicharto ani veg[2]ha konty colum cha data anaycha to vicharto like,console.log(veg[1],[2])mens second colum madhil second number chi value anun dya according to  index number
            


            // 1)Operators
             // Types of Operators
                // 1.Unery operator, 2.Binery Operator, 3.Ternery Operator
                
                // Unery Operator:++,--
                let an=9;
                //  an++
                an--
                console.log(an);
                
                // Binery Operator:+,-,*,/,%
                let i=5;
                let b=5;
                let y=i+b
                // let y=i-b
                // let y=i*b
                // let y=i%b
                console.log(y);

                // Ternery Operator:&&, ||, !

                let v=true;
                let u=true;
                // let w=v&&u;
                // let w=v||u;
                let w=v!=u;
                console.log(w);
                
                