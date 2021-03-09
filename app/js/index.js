window.onload = function(e){
    console.log("hello grom js")
    const headerNames = ["CHARACTER NAME","PLAYER","CLASS AND LEVEL","RACE","ALIGNMENT","DEITY","SIZE","AGE","GENDER","HEIGHT","WEIGHT","EYES","HAIR","SKIN"]
    const abName = 
    [
        {STA: "STR", Des: "STRENGHT"},
        {STA: "DEX", Des: "DEXTERY"},
        {STA: "CON", Des: "CONSTITUTION"},
        {STA: "INT", Des: "INTELLIGENCE"},
        {STA: "WIS", Des: "WISDOM"},
        {STA: "CAR", Des: "CHARISMA"}
    ];
    
    headerMap(headerNames);
    statsMap(abName);
};

const headerMap = (data) =>  {
        const header = document.querySelector(".header")
        let query = ``
        data.forEach(element => {
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

const statsMap = (data) =>{
    const StaNamelist = document.querySelector(".StaNamelist")
    let query = ``;
    data.forEach(element => {
        query += `<li class=" flex flex-jc-c">
        <h1>${element.STA}</h1>
        <p>${element.Des}</p>
    </li>`
    });
    StaNamelist.innerHTML += query;
};


   