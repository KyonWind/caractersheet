window.onload = function(e){
    console.log("hello grom js")
    const headerNames = ["CHARACTER NAME","PLAYER","CLASS AND LEVEL","RACE","ALIGNMENT","DEITY","SIZE","AGE","GENDER","HEIGHT","WEIGHT","EYES","HAIR","SKIN"]
    const header = document.querySelector(".header")
    var query = ``;
    
    headerNames.forEach(element => {
        query += `
        <div class="header__box">
            <input type="text"  class="header__input"></input>
            <div class="header__line"></div>
            <div class="header__text flex-jc-l">
                <p>${element}</p>
            </div>
        </div>`
    });
    header.innerHTML += query;
};


