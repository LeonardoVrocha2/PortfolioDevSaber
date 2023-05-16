function writeTitle(){
    function activeWorld(element){
        const arrText = element.innerHTML.split('');
        element.innerHTML = '';
        arrText.forEach((letra, i) =>{
            setTimeout(()=>{
                element.innerHTML += letra;
            }, 75 * i);
        })
    }
    const title = document.querySelector('.digitando');
    activeWorld(title);
}
writeTitle();




function menuMobile(){
    const activeMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');
    
    
    activeMenu.addEventListener('click',()=>{
        activeMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });

}
menuMobile();

function aboutMe(){
    const divExperience = document.querySelectorAll('.experience_content div'); 
    const liExperience = document.querySelectorAll('.experience_content ul li'); 
    const divEducation = document.querySelectorAll('.education_content div'); 
    const liEducation = document.querySelectorAll('.education_content ul li'); 

    divEducation[0].classList.add('active');
    liEducation[0].classList.add('active');
    divExperience[0].classList.add('active');
    liExperience[0].classList.add('active');
    
    function slideShow(index){
        divExperience.forEach((div)=>{
            div.classList.remove('active')
        });
        liExperience.forEach((buttom)=>{
            buttom.classList.remove('active');
        })
        divExperience[index].classList.add('active');
        liExperience[index].classList.add('active');
    }
    
    function slideShow2(index){
        divEducation.forEach((div)=>{
            div.classList.remove('active')
        });
        liEducation.forEach((buttom)=>{
            buttom.classList.remove('active');
        })
        divEducation[index].classList.add('active');
        liEducation[index].classList.add('active');
    }
    
    liExperience.forEach((event, index) => {
        event.addEventListener('click', () =>{
            slideShow(index);
        })
    });
    
    liEducation.forEach((event, index) => {
        event.addEventListener('click', () =>{
            slideShow2(index);
        })
    });
}

aboutMe();

const listAll = document.querySelectorAll('.projects_storage ul li');
const buttomGeral = document.querySelectorAll('.projects_models ul li');
const buttomAll = document.querySelectorAll('.projects_models .all');


function removeClick(index){
    buttomGeral.forEach((item)=>{
        item.classList.remove('.active');
    });
    buttomGeral[index].classList.add('.active')
}

buttomGeral.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        removeClick(index);
    })
    
})

function showList(list, buttom = "all"){
    list.forEach((item) =>{
        item.classList.remove('active')
    });
    if(buttom == 'design'){
        list[0].classList.add('active');
        list[1].classList.add('active');
    }
    if(buttom == 'graphic'){
        list[2].classList.add('active');
        list[3].classList.add('active');
    }
    if(buttom == 'webSite'){
        list[4].classList.add('active');
        list[5].classList.add('active');
        list[6].classList.add('active');
        list[7].classList.add('active');
    }
    if(buttom == 'all'){
        list[0].classList.add('active');
        list[1].classList.add('active');
        list[2].classList.add('active');
        list[3].classList.add('active');
        list[4].classList.add('active');
        list[5].classList.add('active');
        list[6].classList.add('active');
        list[7].classList.add('active');
    }
}

buttomGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButtom = e.target
        if(currentButtom.classList.contains('all')){
            showList(listAll)
        }
        if(currentButtom.classList.contains('design')){
            showList(listAll, "design")
        }
        if(currentButtom.classList.contains('graphic')){
            showList(listAll, "graphic")
        }
        if(currentButtom.classList.contains('webSite')){
            showList(listAll, "webSite")
        }
        if(currentButtom.classList.contains('all')){
            showList(listAll, "all")
        }
    })
})