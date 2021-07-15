    
    
    let corrects= {
    one: 'maggie',
    two: 'duff',
    three: 'cerveza',
    four: 'santa',
    five:  742,
    six: 'jesucristo',
    seven: 'encias',
    eight: 'mona',
    nine: 'pattyb',
    ten: 706,
    }

    document.getElementById('theSimpsons').addEventListener('submit', (event)=>{
        event.preventDefault(); //"cancela" envio de formulario

            let answer1= event.target.elements['quest1'].value;
            let answer2 = event.target.elements['quest2'].value;
            let answer3 = event.target.elements['quest3'].value;
            let answer4 = event.target.elements['quest4'].value;
            let answer5= event.target.elements['quest5'].value;
            let answer6 = event.target.elements['quest6'].value;
            let answer7 = event.target.elements['quest7'].value;
            let answer8 = event.target.elements['quest8'].value;
            let answer9 = event.target.elements['quest9'].value;
            let answer10 = event.target.elements['quest10'].value;
    
        
        let points= 0;
        let label = document.querySelectorAll('.container>div>label');
        
        // element.style.classlist.toggle()

       

        //Pregunta 1
        if(answer1 == corrects.one){
            label[1].style.background ="green";
            points++;
        }else if (answer1 =='moe'){
            label[0].style.background ="red";
        }else if (answer1 =='milhouse'){
            label[2].style.background="red";
        }else if (answer1 =='krusty'){
            label[3].style.background ="red";
        }
        

        //Pregunta 2
        if(answer2 == corrects.two){
            label[7].style.background ="green";
            points++;
        }else if (answer2 =='coronita'){
            label[4].style.background ="red";
        }else if (answer2 =='heineken'){
            label[6].style.background ="red";
        }else if (answer2 =='paff'){
            label[5].style.background ="red";
        }
        
        //Pregunta 3
        if(answer3 == corrects.three){
            label[11].style.background ="green";
            points++;
        }else if (answer3 == 'pescado'){
            label[9].style.background ="red";
            points++;
        }else if (answer3 == 'madrugar'){
            label[10].style.background ="red";
            points++;
        }else if (answer3 =='chuches'){
            label[8].style.background="red";
        }

        //Pregunta 4
        if(answer4 == corrects.four){
            label[14].style.background ="green";
            points++;
        }else if (answer4 =='bolanieve'){
            label[12].style.background ="red";
        }else if (answer4 =='bolanieve2'){
            label[13].style.background ="red";
        }else if (answer4 =='mojo'){
            label[15].style.background ="red";
        }

        //Pregunta 5
        if(answer5 == corrects.five){
            label[18].style.background="green";
            points++;
        }else if (answer5 =='247'){
            label[16].style.background ="red";
        }else if (answer5 =='274'){
            label[17].style.background ="red";
        }else if (answer5 =='1274'){
            label[19].style.background ="red";
        }

         //Pregunta 6
         if(answer6 == corrects.six){
            label[22].style.background="green";
            points++;
        }else if (answer6 =='Skinner'){
            label[22].style.background ="red";
            points++;
        }else if (answer6 =='budha'){
            label[21].style.background ="red";
        }else if (answer6 =='homer'){
            label[23].style.background ="red";
        }
       
         //Pregunta 7
         if(answer7 == corrects.seven){
            label[25].style.background ="green";
            console.log(label[25])
            points++;
        }else if (answer7 =='marge'){
            label[24].style.background ="red";
        }else if (answer7 =='steve'){
            label[26].style.background="red";
        }else if (answer7 =='ninguno'){
            label[27].style.background ="red";
        }

        
         //Pregunta 8
         if(answer8 == corrects.eight){
            label[30].style.background ="green";
            points++;
        }else if (answer8 =='lisa'){
            label[28].style.background ="red";
        }else if (answer8 =='notiene'){
            label[29].style.background ="red";
        }else if (answer8 =='mlisa'){
            label[31].style.background ="red";
        }

        //Pregunta 9   
        if(answer9 == corrects.nine){
            label[35].style.background ="green";
            points++;
        }else if (answer9 =='edna'){
            label[32].style.background="red";
        }else if (answer9 =='flanders'){
            label[34].style.background ="red";
        }else if (answer9=='shelmab'){
            label[33].style.background ="red";
        }


        //Pregunta 10
         if(answer10 == corrects.ten){
            label[39].style.background ="green";
            points++;
        }else if (answer10 =='760'){
            label[36].style.background ="red";
        }else if (answer10 =='736'){
            label[37].style.background ="red";
        }else if (answer10 =='726'){
            label[38].style.background ="red";
        }

    })
