window.onload = function(e){
    //MOCK UP DATA
    const headerNames = 
    [
    {name:"CHARACTER NAME", type: "text", class:"character_name"},
    {name:"PLAYER", type: "text", class:"player"},
    {name:"CLASS", type: "text", class:"class"},
    {name:"LEVELS", type: "number", class:"levels"},
    {name:"RACE", type: "text", class:"race"},
    {name:"ALIGNMENT", type: "text", class:"alignment"},
    {name:"DEITY", type: "text", class:"deity"},
    {name:"SIZE", type: "text", class:"size"},
    {name:"AGE", type: "number", class:"age"},
    {name:"GENDER", type: "text", class:"gender"},
    {name:"HEIGHT", type: "text", class:"height"},
    {name:"WEIGHT", type: "text", class:"weight"},
    {name:"EYES", type: "text", class:"eyes"},
    {name:"HAIR", type: "text", class:"hair"},
    {name:"SKIN", type: "text", class:"skin"},
    ];
    const headerMenu = 
    [
        {name:"SKILL",                       class:"header_skill",            dropdown:"header_dropdown_skill"},
        {name:"FEATS",                       class:"header_feats",            dropdown:"header_dropdown_feats"}
    ];
    const abName = 
    [
        {STA: "STR", Des: "STRENGHT"},
        {STA: "DEX", Des: "DEXTERY"},
        {STA: "CON", Des: "CONSTITUTION"},
        {STA: "INT", Des: "INTELLIGENCE"},
        {STA: "WIS", Des: "WISDOM"},
        {STA: "CHA", Des: "CHARISMA"}
    ];
    const skill = 
    [
        {name: "Appraise",                    modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Appraise",                },
        {name: "Balance",                     modifier: "DEX",      class:"DEX_TOTAL-MODIFIER", id: "Balance",                 },
        {name: "Bluff",                       modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Bluff",                   },
        {name: "Climb",                       modifier: "STR*",     class:"STR_TOTAL-MODIFIER", id: "Climb",                   },
        {name: "Concentration",               modifier: "CON",      class:"CON_TOTAL-MODIFIER", id: "Concentration",           },
        {name: "Craft(_______________)",      modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Craft1",                  },
        {name: "Craft(_______________)",      modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Craft2",                  },
        {name: "Craft(_______________)",      modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Craft3"                   },
        {name: "Decipher Script",             modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Decipher Script"          },
        {name: "Diplomacy",                   modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Diplomacy"                },
        {name: "Disable Device",              modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Disable Device"           },
        {name: "Disguise",                    modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Disguise"                 },
        {name: "Escape Artist",               modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Escape Artist"            },
        {name: "Forgery",                     modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Forgery"                  },
        {name: "Gather Information",          modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Gather Information"       },
        {name: "Handle Animal",               modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Handle Animal"            },
        {name: "Heal",                        modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Heal"                     },
        {name: "Hide",                        modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Hide"                     },
        {name: "Intimidate",                  modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Intimidate"               },
        {name: "Jump",                        modifier: "STR*",     class:"STR_TOTAL-MODIFIER", id: "Jump"                     },
        {name: "Knowledge (Arcana)",          modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Knowledge(Arcana)"        },
        {name: "Knowledge (Natural)",         modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Knowledge(Natural)"       },
        {name: "Knowledge (Dungeon)",         modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Knowledge(Dungeon)"       },
        {name: "Knowledge (Religion)",        modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Knowledge(Religion)"      },
        {name: "Knowledge (Nobleza)",         modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Knowledge(Nobleza)"       },
        {name: "Listen",                      modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Listen"                   },
        {name: "Move Silently",               modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Move Silently"            },
        {name: "Open Lock",                   modifier: "DEX",      class:"DEX_TOTAL-MODIFIER", id: "Open Lock"                },
        {name: "Perform (____________)",      modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Perform1"                 },
        {name: "Perform (____________)",      modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Perform2"                 },
        {name: "Perform (____________)",      modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Perform3"                 },
        {name: "Profession (___________)",    modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Profession1"              },
        {name: "Profession (___________)",    modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Profession2"              },
        {name: "Ride",                        modifier: "DEX",      class:"DEX_TOTAL-MODIFIER", id: "Ride"                     },
        {name: "Search",                      modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Search"                   },
        {name: "Sense Motive",                modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Sense Motive"             },
        {name: "Sleight of Hand ",            modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Sleight of Hand "         },
        {name: "Spellcraft ",                 modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Spellcraft "              },
        {name: "Spot",                        modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Spot"                     },
        {name: "Survival",                    modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Survival"                 },
        {name: "Swim",                        modifier: "STR",      class:"STR_TOTAL-MODIFIER", id: "Swim"                     },
        {name: "Tumble ",                     modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Tumble "                  },
        {name: "Use Magic Device",            modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Use Magic Device"         },
        {name: "Use Rope",                    modifier: "DEX",      class:"DEX_TOTAL-MODIFIER", id: "Use Rope"                 },
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
        {name:"STRENGHT", class: "STR_TOTAL-MODIFIER", type:"value"},
        {name:"SIZE <br> MODIFIER", class: "size_value", type:"value"},
        {name:"MISC <br> MODIFIER", class: "gp_misc_value", type:"input"}
    ];
    const armor = [
        {name:"AMOR", class: "ar_name", type:"input"},
        {name:"TYPE", class: "ar_type", type:"input"},
        {name:"ARMOR BONUS", class: "ar_bonus", type:"input"},
        {name:"MAX DEX BONUS", class: "ar_max_dex", type:"input"},
        {name:"CHECK PENALTY", class: "ar_check_penalty", type:"input"},
        {name:"SPELL FAILURE", class: "ar_spell_failure", type:"input"},
        {name:"SPEED", class: "ar_speed", type:"input"},
        {name:"WEIGHT", class: "ar_weight", type:"input"},
        {name:"SPECIAL PROPERTIES", class: "ar_special_properties", type:"input"}
    ];
    const weapon = [
        {name:"WEAPON", class: "wp_name", type:"input"},
        {name:"TOTAL ATTACK BONUS", class: "wp_bonus", type:"input"},
        {name:"DAMAGE", class: "wp_damage", type:"input"},
        {name:"CRITICAL", class: "wp_critical_chance", type:"input"},
        {name:"RANGE", class: "wp_range", type:"input"},
        {name:"WEIGHT", class: "wp_weight", type:"input"},
        {name:"TYPE", class: "wp_type", type:"input"},
        {name:"SIZE", class: "wp_size", type:"input"},
        {name:"SPECIAL PROPERTIES", class: "wp_special_properties", type:"input"}
    ];
    const shield = [
        {name:"SHIELD", class: "wp_name", type:"input"},
        {name:"ARMOR BONUS", class: "wp_bonus", type:"input"},
        {name:"CHECK PENALTY", class: "wp_damage", type:"input"},
        {name:"SPELL FAILURE", class: "wp_critical_chance", type:"input"},
        {name:"WEIGHT", class: "wp_weight", type:"input"},
        {name:"SPECIAL PROPERTIES", class: "wp_special_properties", type:"input"}
    ];
    
    
    headerMap(headerNames,headerMenu);
    statsMap(abName);
    hpAcMap(hpbar,acbar,acInit);
    skillsMap(skill);
    savesMap(saveData);
    AttackMap(baseAttack);
    grappleMap(grapple);
    weaponMap(weapon);
    armorMap(armor);
    shieldMap(shield);


    
};

const headerMap = (headerNames,headerMenu) =>  {
        const header = document.querySelector(".header");
        const skillheader = document.querySelector(".headerMenu");

        let query = ``
        headerNames.forEach(element => {
            query += `
            <div class="header__box">`
                if(element.type == "number")
                {
                    query += `
                    <input type="${element.type}" onchange="totalrank(this)"  class="${element.class} header__input"></input>`      
                }
                else
                {
                    query += `
                    <input type="${element.type}"  class="${element.class} header__input"></input>`   
                }
                query += `<div class="header__line"></div>
                <div class="header__text flex-jc-l">
                    <p>${element.name}</p>
                </div>
            </div>`
        });
        header.innerHTML += query;

        query = `<ul class="debug">`
        headerMenu.forEach(element => {
            query += `
            <li class="debug ${element.class}">
            ${element.name}
            <div class="${element.dropdown}">
            </div>  
            </li>
            `
        });
        query += `</ul>`

        skillheader.innerHTML = query;

        
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
        <input type="number" onchange="statMaths(value,this)" value="0" id="${element.STA}_value">
        </li>`
    });
    
    StatValuelist.innerHTML += query;
    query = ``;

    data.forEach(element => {
        query += `
        <li class=" flex flex-column">
        <div  class="Box__value">
        <p id="${element.STA}_modifier">0</p>
        </div>
        </li>`
    });

    StatvModifierlist.innerHTML += query;
    query = ``;

    data.forEach(element => {
        query += `
        <li class="flex flex-column flex-ai-c">
        <input type="number" onchange="statMaths(value,this)" value="0" id="${element.STA}_Tvalue">
        </li>`
    });

    StatTempValue.innerHTML += query;
    query = ``;

    data.forEach(element => {
        query += `
        <li class=" flex flex-column">
        <div  class="Box__value">
        <p id="${element.STA}_Tmodifier">0</p>
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
                        <div class="Box__value" style="margin-left:5px;">
                            <p style="color:black;font-size:13px" onchange="rankValidate(this)" class="total_ranks">0</p>
                        </div>
                        <p>TOTAL<br> SKILLPOINTS</p>
                        <div class="Box__value" style="margin-left:5px;">
                            <p style="color:black;font-size:13px" onchange="skillPointValidate(this)" class="total_skillpoint">0</p>
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
                    <div class="skill__name flex flex-row-l">
                        <input type="checkbox" class="${element.name}_check">
                        <p>${element.name}</p>
                    </div>
                    <div class="skill__modifier ${element.name}_skill">
                        <p>${element.modifier}</p>
                    </div>
                    <div class="skill__value ${element.name}_value">
                        <p>0</p>
                    </div>
                        <p>=</p>
                        <p class="${element.class}">0</p>
                        <p>+</p>
                     <input type="number" onchange="validateRank(this)"  class="ranks" id="${element.name}_ranks" name="">
                        <p>+</p>
                    <input type="number" class="${element.name}_misc_ranks" name="">
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
                        <p class="${element.class}"></p>
                    </div>
                    <p>${element.name}</p>     
                </li>
            </ul>
        </div>`  
        } 
        
    });

    grappleHTML.innerHTML = query; 
};
const weaponMap = (data) =>{
    
    let count = 1;
    while (count <= 3) {
        let query = ``;
        const weapon = document.querySelector(`.weapon__${count}`)
        query = `<ul class="flex flex-row">`;
        data.forEach(element => {
            query += 
            `
            <li class="flex flex-column weapon__box">
                    <p>${element.name}</p>
                    <input class=${element.class}__${count} type="text">
                </li>
            `;
        });
        query += `</ul>`;

        weapon.innerHTML = (query);
        count++;
    }
    
}
const armorMap = (data) =>
{
    let query = ``;
    const armor = document.querySelector(`.armor`)
    query = `<ul class="flex flex-row">`;
    data.forEach(element => {
        query += 
        `
        <li class="flex flex-column armor__box">
                <p>${element.name}</p>
                <input class=${element.class} type="text">
            </li>
        `;
    });
    query += `</ul>`;

    armor.innerHTML = (query);
}
const shieldMap = (data) =>
{
    let query = ``;
    const shield = document.querySelector(`.shield`)
    query = `<ul class="flex flex-row">`;
    data.forEach(element => {
        query += 
        `
        <li class="flex flex-column shield__box">
                <p>${element.name}</p>
                <input class=${element.class} type="text">
            </li>
        `;
    });
    query += `</ul>`;

    shield.innerHTML = (query);
}

//MATHS

function statMaths(staValue, value){
    try
    {
        let modifier = document.querySelector(`#${value.id.replace("value","modifier")}`);
        let stamodifier;
        let count = 0;
        if((value.id).includes("Tvalue"))
        {
            while(count <= staValue)
            { 
                if(count == 0)
                {
                    stamodifier = 0;
                }  else if(count%2 == 0){
                    stamodifier++    
                }
                count++
            }
        }
        else
        {
            while(count <= staValue)
            {
                if(count == 0)
                {
                    stamodifier = -5;
                }  else if(count%2 == 0){
                    stamodifier++    
                }
                count++
            }
        }
       

    modifier.innerText = stamodifier;
    let sta = value.id.split("_");
    let staV =  document.querySelector(`#${value.id.split("_")[0] + "_modifier"}`).innerText;
    let staTV = document.querySelector(`#${value.id.split("_")[0] + "_Tmodifier"}`).innerText;
    totalStatValues(sta[0],staV,staTV)
    }
    catch(e){
        console.log(e);
    }
 }
 function totalStatValues(sta,staV,staTV)
 {
     const staTotalValue = document.querySelectorAll(`.${sta + "_TOTAL-MODIFIER"}`);

     staTotalValue.forEach(element => {
        element.innerText = (parseInt(staV) + parseInt(staTV));    
     });
     
}
function skillvalues(ranks) {
    
}
function totalrank(level) {
    
const total_ranks = document.querySelector('.total_ranks');
    try 
    {
        let levels = level.value;
        total_ranks.innerText = (parseInt(levels) + 3) + '/' + ((parseInt(levels) + 3) / 2);    
        validateRanks(total_ranks);
        skillpoint();
    } 
    catch (error)
    {
        console.log(error)
    }

    


}
function  skillpoint() {
    const levels = document.querySelector(".levels").value;
    const skillPoint = document.querySelector(".header_dropdown_skill");

    let query = ``;
    let index;
    for ( index = 0; index < levels; index++) {
        if (condition) {
            
        }
        query += 
        `<p class="skill_input${index}">LV ${index} <input class="skillLV${index}"  type="number" value="0"></p>`
    }

    skillPoint.innerHTML = query;




}
function validateRanks(totalrank) {
    const rankValidate = document.querySelectorAll('.ranks');

    rankValidate.forEach(element => {

        if (parseInt(element.value) > parseInt(totalrank.innerText.split('/')[0]) )
        {
            element.style.color = 'red';
            console.log('supera el rango maximo');
        }
        
    });

}
function validateRank(rank)
{
    const rankValidate = document.querySelector(`#${rank.id}`);
    const totalranks = document.querySelector('.total_ranks');
    const levels = document.querySelector('.levels');
try {
    if (levels.value != 0) 
    {
        if (rankValidate.value > parseInt(totalranks.innerText.split('/')[0])) {
            rankValidate.style.color = 'red';    
        }
    }
    else
    {
        rankValidate.value = 0;
        alert('No puedes subir rangos sin colocar lv de personaje');
    }
    
    
    console.log(rankValidate);
} catch (error) {
    console.log(error);
}
   
}
function skillPointValidate(totalskillpoint)
{
 console.log(totalskillpoint);
}
