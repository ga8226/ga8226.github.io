
window.onload = function(){
    var mainSkill = document.querySelector("#mainskill").offsetTop;
    const anibars = document.querySelectorAll(".ability-percent");

    window.addEventListener('resize', ()=>{

        mainSkill = document.querySelector("#mainskill").offsetTop;
    
    })
    
    
    window.addEventListener('scroll', () => {
    
        
    
        const scrollPosition = window.scrollY;
    
       
    
       
        if (scrollPosition > ( mainSkill - 500 ) ) {
            anibars.forEach((ele, idx)=>{
                ele.classList.add("action");
           })
        } 
    
        
        
    });
}



