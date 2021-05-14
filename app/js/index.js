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
        {name:"FEATS",                       class:"header_feats",            dropdown:"header_dropdown_feats"},
        {name:"HIT DICE",                       class:"header_hit_dice",            dropdown:"header_dropdown_hit_dice"},
        {name:"CHARACTER",                       class:"header_character",            dropdown:"header_dropdown_CHARACTER"}
    ];
    const abName = 
    [
        {STA: "STR", Des: "STRENGHT"},
        {STA: "DEX", Des: "DEXTERY"},
        {STA: "CON", Des: "CONSTITUTION"},
        {STA: "INTE", Des: "INTELLIGENCE"},
        {STA: "WIS", Des: "WISDOM"},
        {STA: "CHA", Des: "CHARISMA"}
    ];
    const skill = 
    [
        {name: "Appraise",                    modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Appraise"                },
        {name: "Balance",                     modifier: "DEX",      class:"DEX_TOTAL-MODIFIER", id: "Balance"                 },
        {name: "Bluff",                       modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Bluff"                   },
        {name: "Climb",                       modifier: "STR*",     class:"STR_TOTAL-MODIFIER", id: "Climb"                   },
        {name: "Concentration",               modifier: "CON",      class:"CON_TOTAL-MODIFIER", id: "Concentration"           },
        {name: "Craft(_______________)",      modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Craft1"                  },
        {name: "Craft(_______________)",      modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Craft2"                  },
        {name: "Craft(_______________)",      modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Craft3"                   },
        {name: "Decipher Script",             modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Decipher_Script"          },
        {name: "Diplomacy",                   modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Diplomacy"                },
        {name: "Disable Device",              modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Disable_Device"           },
        {name: "Disguise",                    modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Disguise"                 },
        {name: "Escape Artist",               modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Escape_Artist"            },
        {name: "Forgery",                     modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Forgery"                  },
        {name: "Gather Information",          modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Gather_Information"       },
        {name: "Handle Animal",               modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Handle_Animal"            },
        {name: "Heal",                        modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Heal"                     },
        {name: "Hide",                        modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Hide"                     },
        {name: "Intimidate",                  modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Intimidate"               },
        {name: "Jump",                        modifier: "STR*",     class:"STR_TOTAL-MODIFIER", id: "Jump"                     },
        {name: "Knowledge (Arcana)",          modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Knowledge1"               },
        {name: "Knowledge (Natural)",         modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Knowledge2"               },
        {name: "Knowledge (Dungeon)",         modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Knowledge3"               },
        {name: "Knowledge (Religion)",        modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Knowledge4"               },
        {name: "Knowledge (Nobleza)",         modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Knowledge5"               },
        {name: "Listen",                      modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Listen"                   },
        {name: "Move Silently",               modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Move_Silently"            },
        {name: "Open Lock",                   modifier: "DEX",      class:"DEX_TOTAL-MODIFIER", id: "Open_Lock"                },
        {name: "Perform (____________)",      modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Perform1"                 },
        {name: "Perform (____________)",      modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Perform2"                 },
        {name: "Perform (____________)",      modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Perform3"                 },
        {name: "Profession (___________)",    modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Profession1"              },
        {name: "Profession (___________)",    modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Profession2"              },
        {name: "Ride",                        modifier: "DEX",      class:"DEX_TOTAL-MODIFIER", id: "Ride"                     },
        {name: "Search",                      modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Search"                   },
        {name: "Sense Motive",                modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Sense_Motive"             },
        {name: "Sleight of Hand ",            modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Sleight_of_Hand"          },
        {name: "Spellcraft ",                 modifier: "INT",      class:"INT_TOTAL-MODIFIER", id: "Spellcraft"               },
        {name: "Spot",                        modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Spot"                     },
        {name: "Survival",                    modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Survival"                 },
        {name: "Swim",                        modifier: "STR",      class:"STR_TOTAL-MODIFIER", id: "Swim"                     },
        {name: "Tumble ",                     modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Tumble"                   },
        {name: "Use Magic Device",            modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Use_Magic_Device"         },
        {name: "Use Rope",                    modifier: "DEX",      class:"DEX_TOTAL-MODIFIER", id: "Use_Rope"                 },
    ];
    
    const hpbar = [
        {name: "TOTAL", class:"hp__value", type:"value"},
        {name: "HP EXTRA", class:"hp__extra",type:"input"},
        {name: "WOUNDS/CURRENT HP", class:"hp__wounds",type:"input"},
        {name: "NONLETHAL DAMAGE", class:"hp__nonlethaldamage",type:"input"},
        {name: "SPEED", class:"hp__speed",type:"input"}
    ];
    const acbar = [
        {name: "TOTAL",                         id:"AC_total",                    class:"ac__value", type:"value"},
        {name: "BASE",                          id:"AC_base",                     class:"AC AC ac__base ac__input",type:"base"},
        {name: "ARMOR <br> BONUS",              id:"AC_armor",                    class:"AC ac__bonus ac__input",type:"input"},
        {name: "SHIELD <br> BONUS",             id:"AC_shield",                   class:"AC ac__shield",type:"input"},
        {name: "DEX <br> MODIFIER",             id:"AC_dex",                      class:"AC ac__dex DEX_TOTAL-MODIFIER",type:"input"},
        {name: "SIZE <br> MODIFIER",            id:"AC_size",                     class:"AC ac__size",type:"input"},
        {name: "NATURAL <br> ARMOR",            id:"AC_natural",                  class:"AC ac__natural",type:"input"},
        {name: "DEFLECTION <br> MODIFIER",      id:"AC_deflection",               class:"AC ac__deflection",type:"input"},
        {name: "MISC <br> MODIFIER",            id:"AC_misc",                     class:"AC ac__misc",type:"input"},
        {name: "DAMAGE REDUCTION",              id:"AC_reduction",                class:"AC ac__reduction",type:"dmg"},
    ];
    const acInit = [
        {name: "<h1>TOUCH</h1><p>ARMOR CLASS</p>",             id:"",                     class:"",type:"name"},
        {name: "",                                             id:"",                     class:"ac__touch",type:"input"},
        {name: "<h1>FLAT-FOOTED</h1><p>ARMOR CLASS</p>",       id:"",                     class:"ac__flatName",type:"name"},
        {name: "",                                             id:"",                     class:"ac__flat",type:"input"},
        {name: "<h1>INICIATIVE</h1><p>MODIFIER</p>",           id:"",                     class:" init init__inicitiveName",type:["name","init"]},
        {name: "TOTAL",                                        id:"",                     class:" init init__inicitiveValue", type:["value","init"]},
        {name: "DEX <br> MODIFIER",                            id:"",                     class:" init init__dex DEX_TOTAL-MODIFIER",type:["input","init"]},
        {name: "MISC <br> MODIFIER",                           id:"",                     class:" init init__misc",type:["lastinput","init"]},

    ];
    const saveData = [
    {SaveName:"FORTITUDE",             id:"FORTITUDE_name",class:"Box_black", type:"name", data: [
                {name:"TOTAL",                 id:"FORTITUDE_total",    class:"",            type:"value"},
                {name:"BASE <br> SAVE",        id:"FORTITUDE_base",     class:"FORTITUDE",             type:"input"},
                {name:"ABILITY <br> MODIFIER", id:"FORTITUDE_STA",      class:"FORTITUDE CON_TOTAL-MODIFIER",        type:"input"},
                {name:"MAGIC <br> MODIFIER",   id:"FORTITUDE_magic",    class:"FORTITUDE",            type:"input"},
                {name:"MISC <br> MODIFIER",    id:"FORTITUDE_misc",     class:"FORTITUDE",             type:"input"},
                {name:"TEMP <br> MODIFIER",    id:"FORTITUDE_temp",     class:"FORTITUDE",             type:"Lastinput"}]
    },

    {SaveName:"REFLEX",             id:"REFLEX_name",        class:"Box_black", type:"name", data: [
                {name:"TOTAL",                       id:"REFLEX_total",   class:"",           type:"value"},
                {name:"BASE <br> SAVE",              id:"REFLEX_base",    class:"REFLEX",            type:"input"},
                {name:"ABILITY <br> MODIFIER",       id:"REFLEX_STA",     class:"REFLEX DEX_TOTAL-MODIFIER",       type:"input"},
                {name:"MAGIC <br> MODIFIER",         id:"REFLEX_magic",   class:"REFLEX",           type:"input"},
                {name:"MISC <br> MODIFIER",          id:"REFLEX_misc",    class:"REFLEX",            type:"input"},
                {name:"TEMP <br> MODIFIER",          id:"REFLEX_temp",    class:"REFLEX",            type:"Lastinput"}]
    },

    {SaveName:"WILL", id:"WILL_name",       class:"Box_black", type:"name", data: [
        {name:"TOTAL",                  id:"WILL_total",     class: "",           type:"value"},
        {name:"BASE <br> SAVE",         id:"WILL_base",      class:"WILL",            type:"input"},
        {name:"ABILITY <br> MODIFIER",  id:"WILL_STA",       class:"WILL WILL_TOTAL-MODIFIER",        type:"input"},
        {name:"MAGIC <br> MODIFIER",    id:"WILL_magic",     class:"WILL",           type:"input"},
        {name:"MISC <br> MODIFIER",     id:"WILL_misc",      class:"WILL",            type:"input"},
        {name:"TEMP <br> MODIFIER",     id:"WILL_temp",      class:"WILL",            type:"Lastinput"}]
    }
    ];
    const baseAttack = [
        {name:"BASE ATTACK BONUS",           id:"AB_name",                       class: "ab_name", type:"name"},
        {name:"input",                       id:"AB_total",                      class: "", type:"input"},
    ];
    const grapple = [
        {name:"GRAPPLE",                     id:"GRAPPLE_name",                  class: "gp_name", type:"name"},
        {name:"TOTAL",                       id:"GRAPPLE_total",                 class: "", type:"value"},
        {name:"BASE ATTACK <br> BONUS",      id:"GRAPPLE_ab",                    class: "AB GRAPPLE", type:"value"},
        {name:"STRENGHT",                    id:"GRAPPLE_str",                   class: "GRAPPLE STR_TOTAL-MODIFIER", type:"value"},
        {name:"SIZE <br> MODIFIER",          id:"GRAPPLE_size",                  class: "GRAPPLE", type:"value"},
        {name:"MISC <br> MODIFIER",          id:"GRAPPLE_misc",                  class: "GRAPPLE", type:"input"}
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

    var lv1Int;
    // MAP PAGE
    headerMap(headerNames,headerMenu);
    
    hpAcMap(hpbar,acbar,acInit);
    skillsMap(skill);
    savesMap(saveData);
    AttackMap(baseAttack);
    grappleMap(grapple);
    weaponMap(weapon);
    armorMap(armor);
    shieldMap(shield);
    statsMap(abName);

    //FUNCTIONS
    totalrank(skill);




    
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
                    <input type="${element.type}" onchange="levels(this)" type="number" id="${element.class}" value="0"  class="header__input"></input>`
                }
                else
                {
                 query += `
                 <input type="${element.type}" id="${element.class}" value=""  class="header__input"></input>`
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
        <input type="number" onchange="totals('STA',this)" value="0" id="${element.STA}_value">
        </li>`
    });
    
    StatValuelist.innerHTML += query;
    query = ``;

    data.forEach(element => {
        query += 
        `
        <li class="flex flex-column flex-ai-c Box__input">
        <input type="number" onchange="totals('TOTAL-STA',this)" value="0" id="${element.STA}_modifier">
        </li>`
    });

    StatvModifierlist.innerHTML += query;
    query = ``;

    data.forEach(element => {
        query += `
        <li class="flex flex-column flex-ai-c">
        <input type="number" onchange="totals('STA',this)" value="0" id="${element.STA}T_value">
        </li>`
    });

    StatTempValue.innerHTML += query;
    query = ``;

    data.forEach(element => {
        query +=
      `
        <li class="flex flex-column flex-ai-c Box__input">
        <input type="number" style="border:none" onchange="totals('TOTAL-STA',this)" value="0" id="${element.STA}T_modifier">
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
            <div class="Box__input">
            <input id="${element.id}" class="${element.class}" value="0" type="number">
            </div>     
                </li>
            </ul>
        </div>`  
        } else{
            query += `
                    <div class="Box__input">
                        <input id="${element.id}" class="${element.class}" value="0" type="number">
                    </div>   
                </li>
            </ul>
        </div>` 
        } 
    });
    HpSection.innerHTML += query;
    //BARRA AC
    query = `
            <div id="AC_name">
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
        <div class="${element.id} ac__input">
        <ul class="flex flex-column">
            <li class="flex flex-column">
        `
        if(element.type == "value"){
            query += `
            
            <div class="Box__input">
            <input onchange="totals('AC',this)" id="${element.id}" class="${element.class}" value="0" type="number">
            </div> 
                    <p class="hp">${element.name}</p>     
                </li>
            </ul>
        </div>`  
        } else if(element.type == "input"){
            query += `
            <div class="Box__input">
            <input onchange="totals('AC',this)" id="${element.id}" class="${element.class}" value="0" type="number">
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
                        <input type="number">
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
                    <div class="Box__input">
                <input id="${element.class}" class="" type="number">
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
                                <input class="${element.class}" type="number">
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
                                <input class="${element.class}" type="number">
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
                            <p style="color:black;font-size:13px"  class="total_skillPoint">0</p>
                        </div>
                        <p>TOTAL<br> SKILLPOINTS</p>
                        <div class="Box__value" style="margin-left:5px;">
                            <p style="color:black;font-size:13px" class="total_skillpoint">0</p>
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
                        <input type="checkbox" class="classSkill" onchange="classSkillValidate(this)" id="${element.id}_check">
                        <p>${element.name}</p>
                    </div>
                    <div class="skill__modifier ${element.name}_skill">
                        <p>${element.modifier}</p>
                    </div>
                    <div class="skill__value ${element.name}_value">
                    <input type="number" onchange="" disabled  class="${element.class}" id="${element.id}_total_ranks" name="">
                    </div>
                        <p>=</p>
                        <input type="number" disabled class="${element.class}" id="${element.id}_${element.class}" name="">
                        <p>+</p>
                     <input type="number" onchange="rankMaths(this)" onkeydown="return false" step="0.5"  class="ranks" id="${element.id}_ranks" name="">
                        <p>+</p>
                    <input type="number" onchange="rankMaths(this)" id="${element.id}_misc_ranks" name="">
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
                            <div class="save">
                            <ul class="flex flex-column">
                                <li class="flex flex-column">
                            `
                                    if(subelement.type == "value"){
                                        if(element.SaveName == "FORTITUDE")
                                            {
                                            query += `<p>${subelement.name}</p> `
                                            }
                                        query += `  
                                        <div class="Box__input">
                                        <input id="${subelement.id}" onchange="totals('SAVES',this)" class="${subelement.class}" value="0" type="number">
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
                                                    <input class="${subelement.class}" onchange="totals('SAVE',this)" id="${subelement.id}" value="0" type="number">
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
                                                    <input class="${subelement.class}" onchange="totals('SAVE',this)" id="${subelement.id}" value="0" type="number">
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
                            <input onchange="totals('AB',this)" id="${element.id}" class="${element.class}" value="0" type="number">
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
                            <input onchange="totals('GRAPPLE',this)" value="0" id="${element.id}" class="${element.class}" type="number">
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
                    <div class="Box__input">
                    <input onchange="totals('GRAPPLE',this)"  type="number" value="0" id="${element.id}" class="${element.class}" name="">
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
    
};
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
};
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
};

//MATHS

function totals(type,object){
    switch (type) 
    {
        case 'STA':
            let modifier = document.querySelector(`#${object.id.split('_')[0]}_modifier`);
            let count = 0;

               while (count <= object.value)
                {
                    if (count == 0) 
                    {
                        if (object.id.includes('T_'))
                        {
                            modifier.value = 0;
                            modifier.dispatchEvent(new Event('change'));   
                        }
                        else
                        {
                            modifier.value = -5;
                            modifier.dispatchEvent(new Event('change'));
                        }  
                    }
                    else if (count%2 == 0)
                    {   
                        modifier.value++;
                        modifier.dispatchEvent(new Event('change'));
                    }
                     count++
                }
            
            break;
        case 'TOTAL-STA':
                let staObjects;
                let object2;
                !object.id.includes('T_') ?  staObjects = document.querySelectorAll(`.${object.id.split('_')[0]}_TOTAL-MODIFIER`)
                                            :staObjects = document.querySelectorAll(`.${object.id.split('T_')[0]}_TOTAL-MODIFIER`);
                
                object.id.includes('T_') ? object2 = document.querySelector(`#${object.id.replace('T_','_')}`)
                                          :object2 = document.querySelector(`#${object.id.replace('_','T_')}`);
                
                staObjects.forEach(element => 
                {
                    element.value = (parseInt(object.value) + parseInt(object2.value));
                    element.dispatchEvent(new Event('change'));
                });
            break;
        case 'AB':
                document.querySelectorAll(`.${object.id.split('_')[0]}`).forEach(element =>{
                element.value = object.value;
                element.dispatchEvent(new Event('change'));
                    });
            break;
        default:
                let total;
                type.includes('AC') ? total = 10 
                                     :total = 0;
                let saveValues = document.querySelectorAll(`.${object.id.split('_')[0]}`);

                saveValues.forEach(element =>{
                    total =  total + parseInt(element.value);
                });
                document.querySelector(`#${object.id.split('_')[0]}_total`).value = total;
            break;
    }
};
//function statMaths(staValue, value){
//    try
//    {
//        if (value.length > 1) {
//            value.forEach(element =>
//            {
//                let modifier = document.querySelector(`#${element.STA + "_modifier"}`);
//                let stamodifier;
//                let Tstamodifier;
//                let Tcount = 0;
//                let count = 0;
//               
//                while(Tcount <= Tvalue.value)
//                { 
//                    if(Tcount == 0)
//                    {
//                        Tstamodifier = 0;
//                    }  
//                    else if(Tcount%2 == 0)
//                    {
//                        Tstamodifier++    
//                    }
//                    Tcount++
//                }
//            
//                while(count <= value.value)
//                {
//                    if(count == 0)
//                    {
//                        stamodifier = -5;
//                    }  
//                    else if(count%2 == 0)
//                    {
//                        stamodifier++    
//                    }
//                    count++
//                }
//                    modifier.value = stamodifier;
//                    Tmodifier.value = Tstamodifier;
//                    let sta = value.id.split("_");
//                    let staV =  modifier.value;
//                    let staTV = Tmodifier.value;
//                    totalStatValues(sta[0],staV,staTV)
//            });
//            
//        }
//        else
//        {
//            let modifier = document.querySelector(`#${value.id.replace("value","modifier")}`);
//            let stamodifier;
//            let count = 0;
//            if((value.id).includes("Tvalue"))
//            {
//                while(count <= staValue)
//                { 
//                    if(count == 0)
//                    {
//                        stamodifier = 0;
//                    }  else if(count%2 == 0){
//                        stamodifier++    
//                    }
//                    count++
//                }
//            }
//            else
//            {
//                while(count <= staValue)
//                {
//                    if(count == 0)
//                    {
//                        stamodifier = -5;
//                    }  else if(count%2 == 0){
//                        stamodifier++    
//                    }
//                    count++
//                }
//            }
//           
//    
//         modifier.value = stamodifier;
//         let sta = value.id.split("_");
//         let staV =  document.querySelector(`#${value.id.split("_")[0] + "_modifier"}`).value;
//         let staTV = document.querySelector(`#${value.id.split("_")[0] + "_Tmodifier"}`).value;
//         totalStatValues(sta[0],staV,staTV);
//        }
//
//        
//    }
//    catch(e){
//        console.log(e);
//    }
//};
function classSkillValidate(checkbox)
{
    if (checkbox.checked == true) 
    {
        let input = document.querySelector(`#${checkbox.id.split('_')[0]}_ranks`);
        input.step = 1;
    }
    else
    {
        let input = document.querySelector(`#${checkbox.id.split('_')[0]}_ranks`);
        input.step = 0.5;
    }
};
function rankMaths(rank)
{
    let data = JSON.parse(localStorage["SKILLS"]);
    data = data.filter(element => element.id == rank.id.split('_')[0]);

    data.forEach(element =>
        {
            const totalrankskill = document.querySelector(`#${element.id}_total_ranks`);
            const totalrankskillM = document.querySelector(`#${element.id}_${element.class}`);
            const rankskill = document.querySelector(`#${element.id}_ranks`);
            const miscranks = document.querySelector(`#${element.id}_misc_ranks`);

            
            totalrankskill.value = (
                (totalrankskillM.value == "" ? totalrankskillM.value = 0 : parseInt(totalrankskillM.value)) + 
                (rankskill.value == "" ? rankskill.value = 0 : parseInt(rankskill.value)) + 
                (miscranks.value == "" ? miscranks.value = 0 : parseInt(miscranks.value)));
        }); 
};
//function totalStatValues(sta,staV,staTV)
// {
//     
//        const staTotalValue = document.querySelectorAll(`.${sta + "_TOTAL-MODIFIER"}`);
//
//        staTotalValue.forEach(element => 
//        {
//        element.value = (parseInt(staV) + parseInt(staTV));
//        });    
//    
//     
//     
//     
//};
function levels(level)
{
    if (level.value == 1) {
        localStorage["INT_modifier_lv1"] = document.querySelector('#INT_modifier');
    }
    totalskillPoint(level);
    feats();
    hitDice();
}
function totalskillPoint(level) 
{
    
const total_skillPoint = document.querySelector('.total_skillPoint');
    try 
    {
        let levels = level.value;
        total_skillPoint.innerText = (parseInt(levels) + 3) + '/' + ((parseInt(levels) + 3) / 2);    
        validateRanks(total_skillPoint);
        skillpoint();
    } 
    catch (error)
    {
        console.log(error)
    }

    


};
function skillpoint() {
    const levels = document.querySelector("#levels").value;
    const skillPoint = document.querySelector(".header_dropdown_skill");

    let query = ``;
    let index;
    
    query += `<p> HUMAN <input class="human_skill" type="checkbox"></p>`
    for ( index = 1 ; index <= levels; index++) {
        if (index == 1) {
            query += 
            `<p class="skill_input${index}">LV ${index} <input class="skillLV${index}" type="number"></p>`
        } else 
        {
            query += 
        `<p class="skill_input${index}">LV ${index} <input class="skillLV${index}" type="number"></p>`
        }
        
    }

    skillPoint.innerHTML = query;




};
function feats(){

    const levels = document.querySelector("#levels").value;
    const feats = document.querySelector(".header_dropdown_feats");

    let query = ``;
    let index;

    for ( index = 1 ; index <= levels; index++) {
        if (index%3 == 0) {
            query += 
            `<p class="feats_input${index}">FEAT LV ${index} <input class="feats${index}" type="text"></p>`;
        } else if(index == 1){
            query +=
            `<p class="feats_input${index}">FEAT LV ${index} <input class="feats${index}" type="text"></p>`;
        }
        
    }

    feats.innerHTML = query;

};
function hitDice() {
    const levels = document.querySelector("#levels").value;
    const hitDice = document.querySelector(".header_dropdown_hit_dice");

    let query = ``;
    let index;

    for ( index = 1 ; index <= levels; index++) {
        if (index == 1) {
            query += 
            `<p class="hit_input${index}">HIT DICE LV ${index} <input class="hitDice${index}" type="number"></p>`
        }
        else 
        {
            query += 
        `<p class="hit_input${index}">HIT DICE LV ${index} <input class="hitDice${index}" type="number"></p>`
        }
        
    }

    hitDice.innerHTML = query;




};
function validateRanks(totalskillPoint) {
    const rankValidate = document.querySelectorAll('.ranks');

    rankValidate.forEach(element => {

        if (parseInt(element.value) > parseInt(totalskillPoint.innerText.split('/')[0]) )
        {
            element.style.color = 'red';
            console.log('supera el rango maximo');
        }
        
    });

};
function validateRank(rank)
{
    const rankValidate = document.querySelector(`#${rank.id}`);
    const totalskillPoints = document.querySelector('.total_skillPoint');
    const levels = document.querySelector('#levels');
try {
    if (levels.value != 0) 
    {
        if (rankValidate.value > parseInt(totalskillPoints.innerText.split('/')[0])) {
            rankValidate.style.color = 'red';    
        }
    }
    else
    {
        rankValidate.value = 0;
        alert('No puedes subir rangos sin colocar lv de personaje');
    }
} catch (error) {
    console.log(error);
}
   
};
function totalrank(skill)
{
    skill.forEach(element =>
        {
            const totalrankskill = document.querySelector(`#${element.id}_total_ranks`);
            const totalrankskillM = document.querySelector(`#${element.id}_${element.class}`);
            const rankskill = document.querySelector(`#${element.id}_ranks`);
            const miscranks = document.querySelector(`#${element.id}_misc_ranks`);

            totalrankskill.value = (
                (totalrankskillM.value == "" ? totalrankskillM.value = 0 : parseInt(totalrankskillM.value)) + 
                (rankskill.value == "" ? rankskill.value = 0 : parseInt(rankskill.value)) + 
                (miscranks.value == "" ? miscranks.value = 0 : parseInt(miscranks.value)));
                
        });
};

