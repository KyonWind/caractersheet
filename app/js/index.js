window.onload = function(e){
    //MOCK UP DATA
    const headerNames = 
    ["CHARACTER NAME",
    "PLAYER",
    "CLASS AND LEVEL",
    "RACE",
    "ALIGNMENT",
    "DEITY",
    "SIZE",
    "AGE",
    "GENDER",
    "HEIGHT",
    "WEIGHT",
    "EYES",
    "HAIR",
    "SKIN"
    ];
    const abName = 
    [
        {STA: "STR", Des: "STRENGHT"},
        {STA: "DEX", Des: "DEXTERY"},
        {STA: "CON", Des: "CONSTITUTION"},
        {STA: "INT", Des: "INTELLIGENCE"},
        {STA: "WIS", Des: "WISDOM"},
        {STA: "CAR", Des: "CHARISMA"}
    ];
    const skill = 
    [
        {name: "Appraise", modifier: "INT"},
        {name: "Balance", modifier: "DEX"},
        {name: "Bluff", modifier: "CHA"},
        {name: "Climb", modifier: "STR*"},
        {name: "Concentration", modifier: "CON"},
        {name: "Craft( _______________)", modifier: "INT"},
        {name: "Craft( _______________)", modifier: "INT"},
        {name: "Craft( _______________)", modifier: "INT"},
        {name: "Decipher Script", modifier: "INT"},
        {name: "Diplomacy", modifier: "CHA"},
        {name: "Disable Device", modifier: "INT"},
        {name: "Disguise", modifier: "CHA"},
        {name: "Escape Artist", modifier: "DEX*"},
        {name: "Forgery", modifier: "INT"},
        {name: "Gather Information", modifier: "CHA"},
        {name: "Handle Animal", modifier: "CHA"},
        {name: "Heal", modifier: "WIS"},
        {name: "Hide", modifier: "DEX*"},
        {name: "Intimidate", modifier: "CHA"},
        {name: "Jump", modifier: "STR*"},
        {name: "Knowledge (Arcana)", modifier: "INT"},
        {name: "Knowledge (Natural)", modifier: "INT"},
        {name: "Knowledge (Dungeon)", modifier: "INT"},
        {name: "Knowledge (Religion)", modifier: "INT"},
        {name: "Knowledge (Nobleza)", modifier: "INT"},
        {name: "Listen", modifier: "WIS"},
        {name: "Move Silently", modifier: "DEX*"},
        {name: "Open Lock", modifier: "DEX"},
        {name: "Perform (____________)", modifier: "CHA"},
        {name: "Perform (____________)", modifier: "CHA"},
        {name: "Perform (____________)", modifier: "CHA"},
        {name: "Profession (___________)", modifier: "WIS"},
        {name: "Profession (___________)", modifier: "WIS"},
        {name: "Ride", modifier: "DEX"},
        {name: "Search", modifier: "INT"},
        {name: "Sense Motive", modifier: "WIS"},
        {name: "Sleight of Hand ", modifier: "DEX*"},
        {name: "Spellcraft ", modifier: "INT"},
        {name: "Spot", modifier: "WIS"},
        {name: "Survival", modifier: "WIS"},
        {name: "Swim", modifier: "STR"},
        {name: "Tumble ", modifier: "DEX*"},
        {name: "Use Magic Device", modifier: "CHA"},
        {name: "Use Rope", modifier: "DEX"},
    ];
    const StatsModifier = 
    [
        {VALUE: "", Modifier: ""},
        {VALUE: "", Modifier: ""},
        {VALUE: "", Modifier: ""},
        {VALUE: "", Modifier: ""},
        {VALUE: "", Modifier: ""},
        {VALUE: "", Modifier: ""}
    ];
    const hpbar = [
        {name: "TOTAL", class:"hp__value", type:"value"},
        {name: "HP EXTRA", class:"hp__extra",type:"input"},
        {name: "WOUNDS/CURRENT HP", class:"hp__wounds",type:"input"},
        {name: "NONLETHAL DAMAGE", class:"hp__nonlethaldamage",type:"input"},
        {name: "SPEED", class:"hp__speed",type:"input"}
    ];
    const acbar = [
        {name: "TOTAL", class:"ac__value ", type:"value"},
        {name: "BASE", class:"ac__base ac__input",type:"base"},
        {name: "ARMOR <br> BONUS", class:"ac__bonus ac__input",type:"input"},
        {name: "SHIELD <br> BONUS", class:"ac__shield",type:"input"},
        {name: "DEX <br> MODIFIER", class:"ac__dex",type:"input"},
        {name: "SIZE <br> MODIFIER", class:"ac__size",type:"input"},
        {name: "NATURAL <br> ARMOR", class:"ac__natural",type:"input"},
        {name: "DEFLECTION <br> MODIFIER", class:"ac__deflection",type:"input"},
        {name: "MISC <br> MODIFIER", class:"ac__misc",type:"input"},
        {name: "DAMAGE REDUCTION", class:"ac__reduction",type:"dmg"},
    ];
    const acInit = [
        {name: "<h1>TOUCH</h1><p>ARMOR CLASS</p>", class:"",type:"name"},
        {name: "", class:"ac__touch",type:"input"},
        {name: "<h1>FLAT-FOOTED</h1><p>ARMOR CLASS</p>", class:"ac__flatName",type:"name"},
        {name: "", class:"ac__flat",type:"input"},
        {name: "<h1>INICIATIVE</h1><p>MODIFIER</p>", class:" init init__inicitiveName",type:["name","init"]},
        {name: "TOTAL", class:" init init__inicitiveValue", type:["value","init"]},
        {name: "DEX <br> MODIFIER", class:" init init__dex",type:["input","init"]},
        {name: "MISC <br> MODIFIER", class:" init init__misc",type:["lastinput","init"]},

    ];
    const saveData = [
    {SaveName:"FORTITUDE",class:"Box_black", type:"name", data: [
        {name:"TOTAL", class:"save_for_total", type:"value"},
        {name:"BASE <br> SAVE", class:"save_for_base", type:"input"},
        {name:"ABILITY <br> MODIFIER", class:"save_for_modif", type:"input"},
        {name:"MAGIC <br> MODIFIER", class:"save_for_magic", type:"input"},
        {name:"MISC <br> MODIFIER", class:"save_for_misc", type:"input"},
        {name:"TEMP <br> MODIFIER", class:"save_for_temp", type:"Lastinput"}]
    },

    {SaveName:"REFLEX",class:"Box_black", type:"name", data: [
        {name:"TOTAL", class:"save_reflex_total", type:"value"},
        {name:"BASE <br> SAVE", class:"save_reflex_base", type:"input"},
        {name:"ABILITY <br> MODIFIER", class:"save_reflex_modif", type:"input"},
        {name:"MAGIC <br> MODIFIER", class:"save_reflex_magic", type:"input"},
        {name:"MISC <br> MODIFIER", class:"save_reflex_misc", type:"input"},
        {name:"TEMP <br> MODIFIER", class:"save_reflex_temp", type:"Lastinput"}]
    },

    {SaveName:"WILL",class:"Box_black", type:"name", data: [
        {name:"TOTAL", class:"save_will_total", type:"value"},
        {name:"BASE <br> SAVE", class:"save_will_base", type:"input"},
        {name:"ABILITY <br> MODIFIER", class:"save_will_modif", type:"input"},
        {name:"MAGIC <br> MODIFIER", class:"save_will_magic", type:"input"},
        {name:"MISC <br> MODIFIER", class:"save_will_misc", type:"input"},
        {name:"TEMP <br> MODIFIER", class:"save_will_temp", type:"Lastinput"}]
    }
    ];
    const baseAttack = [
        {name:"BASE ATTACK BONUS", class: "ab_name", type:"name"},
        {name:"input", class: "ab_value", type:"input"},
        {name:"EXTRA ATTACK BONUSES", class: "ab_extra", type:"input"}
    ];
    const grapple = [
        {name:"GRAPPLE", class: "gp_name", type:"name"},
        {name:"TOTAL", class: "gp__total", type:"value"},
        {name:"BASE ATTACK <br> BONUS", class: "ab_value", type:"value"},
        {name:"STRENGHT", class: "str_value", type:"value"},
        {name:"SIZE <br> MODIFIER", class: "size_value", type:"value"},
        {name:"MISC <br> MODIFIER", class: "gp_misc_value", type:"input"}
    ];
    
    headerMap(headerNames);
    statsMap(abName);
    hpAcMap(hpbar,acbar,acInit);
    skillsMap(skill);
    savesMap(saveData);
    AttackMap(baseAttack);
    grappleMap(grapple);

    const openDB = indexedDB.open("mapping",1);
    openDB.onerror = function(){
        console.log(openDB.error);
    };
    openDB.onsuccess = function(){
        var db = openDB.result;
        db.onversionchange = function() {
            db.close();
            alert("Database is outdated, please reload the page.")
          };
        db.createObjectStore("books",{keyPath:'id'});
    };

    
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
    const StatValuelist = document.querySelector(".StatValuelist")
    const StatvModifierlist = document.querySelector(".StatvModifierlist")
    const StatTempValue = document.querySelector(".StatTempValue")
    const StatTempModifier = document.querySelector(".StatTempModifier")
    let query = ``;
    
    data.forEach(element => {
        query += `<li class=" flex flex-column Box__black">
        <h1>${element.STA}</h1>
        <p>${element.Des}</p>
    </li>`
    });

    StaNamelist.innerHTML += query;
    query = ``;

    data.forEach(element => {
        query += `
        <li class="flex flex-column flex-ai-c">
        <input type="number" value="0" class="${element.STA}-Value">
        </li>`
    });
    
    StatValuelist.innerHTML += query;
    query = ``;

    data.forEach(element => {
        query += `
        <li class=" flex flex-column">
        <div  class="Box__value">
        <p class="${element.STA}-Modifier">30</p>
        </div>
        </li>`
    });

    StatvModifierlist.innerHTML += query;
    query = ``;

    data.forEach(element => {
        query += `
        <li class="flex flex-column flex-ai-c">
        <input type="number" value="0" class="${element.STA}-TValue">
        </li>`
    });

    StatTempValue.innerHTML += query;
    query = ``;

    data.forEach(element => {
        query += `
        <li class=" flex flex-column">
        <div  class="Box__value">
        <p class="${element.STA}-TModifier">30</p>
        </div>
        </li>`
    });

    StatTempModifier.innerHTML += query;
    query = ``;
};
const hpAcMap = (hpbar,acbar,acInit) =>{
    const HpSection = document.querySelector('.hpbar');
    const AcSection = document.querySelector('.acbar');
    const InicSection = document.querySelector('.ArmorAndIniciative');
    let query = ``;
    //BARRA HP
    query = `
    <div class="hp__name">
         <div class="HpType flex flex-row">
             <input type="radio" name="hpType">
             <p>PROD</p>
                 <input type="radio" name="hpType">
             <p>FULL</p>
         </div>
         <ul class="flex flex-column">
             <li class="Box__black">
                 <h1>HP</h1>
                 <p>HIT POINTS</p>
             </li>
         </ul>
    </div>
    `
    hpbar.forEach(element => {
        query += 
        `
        <div class="${element.class}">
        <p class="hp">${element.name}</p>
        <ul class="flex flex-column">
            <li class="flex flex-row">
        `
        if(element.type == "value"){
            query += `
                    <div class="Box__value">
                        <p></p>
                    </div>     
                </li>
            </ul>
        </div>`  
        } else{
            query += `
                    <div class="Box__input">
                        <input type="text">
                    </div>   
                </li>
            </ul>
        </div>` 
        } 
    });
    HpSection.innerHTML += query;
    //BARRA AC
    query = `
            <div class="ac__name">
                <ul class="flex">
                    <li class="Box__black">
                        <h1>AC</h1>
                        <p>ARMOR CLASS</p>
                    </li>
                </ul>
            </div>
    `
    acbar.forEach(element => {
        query += 
        `
        <div class="${element.class } ac__input">
        <ul class="flex flex-column">
            <li class="flex flex-column">
        `
        if(element.type == "value"){
            query += `
            
                    <div class="Box__value">
                        <p></p>
                    </div>
                    <p class="hp">${element.name}</p>     
                </li>
            </ul>
        </div>`  
        } else if(element.type == "input"){
            query += `
                    <div class="Box__input">
                        <input type="text">
                    </div>
                    <p class="hp">${element.name}</p>   
                </li>
            </ul>
        </div>
        <div class="ac__plus">
            <p>+</p>
        </div>`
        } else if(element.type == "dmg"){
            query += `
                    <div class="Box__input">
                        <input type="text">
                    </div>
                    <p class="hp">${element.name}</p>   
                </li>
            </ul>
        </div>`
            } 
        else {
            query += `
                    <div class="Box__input">
                        <p>= 10 +</p>
                    </div>   
                </li>
            </ul>
        </div>`
        }
    });
    AcSection.innerHTML += query;

    //BARRA INICIATIVA
    query = ``;
    acInit.forEach(element => {
        if(element.type == "name")
        {
            query +=  `
        <div class="${element.class}">
            <ul class="flex flex-column">
                <li class="Box__black">
                    ${element.name}
                </li>
            </ul>
        </div>
        `
        }
        else if(element.type == "input")
        {
            query += `
        <div class="${element.class}">
            <ul class="flex flex-column">
                <li class="flex flex-row">
                    <div class="Box__input">
                        <input type="text">
                    </div>
                </li>
            </ul>
        </div>
        `
        }
        else if(element.type[1] == "init")
        {
            
            if(element.type[0] == "name")
            {
                query +=  `
            <div class="${element.class}">
                <ul class="flex flex-column">
                    <li class="Box__black">
                        ${element.name}
                    </li>
                </ul>
            </div>
            `
            }
            else if(element.type[0] == "value")
            {
                query += `
            <div class="${element.class}">
                <ul class="flex flex-column">
                    <li class="flex flex-column">
                    <div class="Box__value">
                    <p></p>
                </div>
                <p class="hp">${element.name}</p>     
            </li>
        </ul>
    </div>
    <div class="ac__plus">
                <p>=</p>
            </div>
            `  
            
            }
            else if(element.type[0] == "input")
            {
                query += `
                <div class="${element.class}">
                    
                    <ul class="flex flex-column">
                        <li class="flex flex-column">
                            <div class="Box__input">
                                <input type="text">
                            </div>
                            <p class="hp">${element.name}</p>
                        </li>
                    </ul>
                </div>
                <div class="ac__plus">
                <p>+</p>
            </div>
                `    
            }
            else{
                query += `
                <div class="${element.class}">
                    
                    <ul class="flex flex-column">
                        <li class="flex flex-column">
                            <div class="Box__input">
                                <input type="text">
                            </div>
                            <p class="hp">${element.name}</p>
                        </li>
                    </ul>
                </div>
                `   
            }
        }
        
    });
    InicSection.innerHTML += query;
};
const skillsMap = (data) =>{
    const skill_container = document.querySelector('.skill__container');
    let query = `
    <div class="skill flex debug">
        <div class="skillcontainer">
            <ul class="flex flex-column-t">
                <li class="flex flex-row-l Box__black">
                    <h1>SKILLS</h1>
                    <div class="flex flex-row">
                        <p>MAX RANKS <br> (CLASS/CROSS-CLASS)</p>
                        <div class="Box__value">
                            <p>0</p>
                        </div>
                    </div>
                </li>
                <li class="flex flex-row">
                    <div>
                        <p>SKILL NAME</p>
                    </div>
                    <div>
                        <p>KEY <br> ABILITY</p>
                    </div>
                    <div>
                        <p>SKILL <br> MODIFIER</p>
                    </div>
                    <div>
                        <p>ABILITY <br> MODIFIER</p>
                    </div>
                    <div>
                        <p>RANKS</p>
                    </div>
                    <div>
                        <p>MISC <br> MODIFIER</p>
                    </div>
                </li>
                
    `;

    data.forEach(element => {
        query += `
                <li class="skill__skills flex flex-row-l">
                    <div class="skill__name ${element.name}_c flex flex-row-l">
                        <input type="checkbox">
                        <p>${element.name}</p>
                    </div>
                    <div class="skill__modifier ${element.name}_skill">
                        <p>${element.modifier}</p>
                    </div>
                    <div class="skill__value ${element.name}_value">
                        <p>0</p>
                    </div>
                        <p>=</p>
                        <input type="number" class="${element.modifier}_value" name="" id="">
                        <p>+</p>
                     <input type="number" class="${element.name}_ranks" name="" id="">
                        <p>+</p>
                    <input type="number" class="${element.name}_misc_ranks" name="" id="">
                </li>
        `;
    });

    query += `
    </ul>
        </div>
        
    </div>
    `
    skill_container.innerHTML += query;
};
const savesMap = (data) =>{
    console.log('carga de saves');
    const FORTITUDE = document.querySelector('.fortitude__bar');
    const REFLEX = document.querySelector('.reflex__bar');
    const WILL = document.querySelector('.will__bar');
    let query = ``;
    data.forEach(element =>{
        //if(element.SaveName == "FORTITUDE"){
          
            if(element.type == "name"){
                query = `
                <ul>
                <li class="Box__black">
                <h1>${element.SaveName}</h1>
                </li>
                </ul>
                `  
                element.data.forEach(subelement => {
                    query += 
                            `
                            <div class="save ${subelement.class}">
                            <ul class="flex flex-column">
                                <li class="flex flex-column">
                            `
                                    if(subelement.type == "value"){
                                        if(element.SaveName == "FORTITUDE")
                                            {
                                            query += `<p>${subelement.name}</p> `
                                            }
                                        query += `  
                                                <div class="Box__value">
                                                    <p></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="plus">
                                        <p>=</p>
                                    </div>`  
                                    } else if(subelement.type == "input"){
                                        if(element.SaveName == "FORTITUDE")
                                            {
                                            query += `<p>${subelement.name}</p> `
                                            }
                                        query += `
                                                <div class="Box__input">
                                                    <input type="text">
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="plus">
                                        <p>+</p>
                                    </div>`
                                    } else {
                                        if(element.SaveName == "FORTITUDE")
                                            {
                                            query += `<p>${subelement.name}</p> `
                                            }
                                        query += `
                                                <div class="Box__input">
                                                    <input type="text">
                                                </div>
                                            </li>
                                        </ul>
                                    </div>`
                                    }
                 });
            }
            if(element.SaveName == "FORTITUDE")
            {
                FORTITUDE.innerHTML = query;
            }
            else if(element.SaveName == "REFLEX")
            {
                REFLEX.innerHTML = query;
            }
            else
            {
                WILL.innerHTML = query;
            }
            
       // }
          
    });

};
const AttackMap = (data) =>{
    const attack = document.querySelector('.baseAttack');
    let query = ``;

    data.forEach(element => {
        if(element.type == "name")
        {
            query = `
            <ul>
            <li class="Box__black">
            <h1>${element.name}</h1>
            </li>
            </ul>
            `
        }    
        else if(element.type == 'input') 
        {
            query += `
            <div class="attack">
                <ul class="flex flex-column">
                    <li class="flex flex-column">
                        <div class="Box__input">
                            <input class="${element.class}" type="text">
                        </div>
                    </li>
                </ul>
            </div>`
        }

    });

    attack.innerHTML = (query);
};
const grappleMap = (data) =>{
    const grappleHTML = document.querySelector(".grapple");
    let query = '';

    data.forEach(element =>{

        if(element.type == "name")
        {
            query = `
            <ul>
            <li class="Box__black">
            <h1>${element.name}</h1>
            </li>
            </ul>
            `
        }    
        else if(element.type == 'input') 
        {
            query += `
            <div class="gp_div">
                <ul class="flex flex-column">
                    <li class="flex flex-column">
                        <div class="Box__input">
                            <input class="${element.class}" type="text">
                        </div>
                        <p class="hp">${element.name}</p>  
                    </li>
                </ul>
            </div>`
        }
        if(element.type == "value"){
            query += `
            <div class="gp_div">
                <ul class="flex flex-column">
                    <li class="flex flex-column">
                    <div class="Box__value">
                        <p></p>
                    </div>
                    <p class="hp">${element.name}</p>     
                </li>
            </ul>
        </div>`  
        } 
        
    });

    grappleHTML.innerHTML = query; 
};


