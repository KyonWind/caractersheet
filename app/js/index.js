window.onload = function(e){
    //MOCK UP DATA BEGIN
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
        {name:"CHARACTER",                       class:"header_character",            dropdown:"header_dropdown_characters"}
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
        {name: "Appraise",                    modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Appraise"                 },
        {name: "Balance",                     modifier: "DEX",      class:"DEX_TOTAL-MODIFIER", id: "Balance"                  },
        {name: "Bluff",                       modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Bluff"                    },
        {name: "Climb",                       modifier: "STR*",     class:"STR_TOTAL-MODIFIER", id: "Climb"                    },
        {name: "Concentration",               modifier: "CON",      class:"CON_TOTAL-MODIFIER", id: "Concentration"            },
        {name: "Craft(_______________)",      modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Craft1"                   },
        {name: "Craft(_______________)",      modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Craft2"                   },
        {name: "Craft(_______________)",      modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Craft3"                   },
        {name: "Decipher Script",             modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Decipher_Script"          },
        {name: "Diplomacy",                   modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Diplomacy"                },
        {name: "Disable Device",              modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Disable_Device"           },
        {name: "Disguise",                    modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Disguise"                 },
        {name: "Escape Artist",               modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Escape_Artist"            },
        {name: "Forgery",                     modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Forgery"                  },
        {name: "Gather Information",          modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Gather_Information"       },
        {name: "Handle Animal",               modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Handle_Animal"            },
        {name: "Heal",                        modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Heal"                     },
        {name: "Hide",                        modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Hide"                     },
        {name: "Intimidate",                  modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Intimidate"               },
        {name: "Jump",                        modifier: "STR*",     class:"STR_TOTAL-MODIFIER", id: "Jump"                     },
        {name: "Knowledge (Arcana)",          modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Knowledge1"               },
        {name: "Knowledge (Natural)",         modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Knowledge2"               },
        {name: "Knowledge (Dungeon)",         modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Knowledge3"               },
        {name: "Knowledge (Religion)",        modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Knowledge4"               },
        {name: "Knowledge (Nobleza)",         modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Knowledge5"               },
        {name: "Listen",                      modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Listen"                   },
        {name: "Move Silently",               modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Move_Silently"            },
        {name: "Open Lock",                   modifier: "DEX",      class:"DEX_TOTAL-MODIFIER", id: "Open_Lock"                },
        {name: "Perform (____________)",      modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Perform1"                 },
        {name: "Perform (____________)",      modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Perform2"                 },
        {name: "Perform (____________)",      modifier: "CHA",      class:"CHA_TOTAL-MODIFIER", id: "Perform3"                 },
        {name: "Profession (___________)",    modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Profession1"              },
        {name: "Profession (___________)",    modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Profession2"              },
        {name: "Ride",                        modifier: "DEX",      class:"DEX_TOTAL-MODIFIER", id: "Ride"                     },
        {name: "Search",                      modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Search"                   },
        {name: "Sense Motive",                modifier: "WIS",      class:"WIS_TOTAL-MODIFIER", id: "Sense_Motive"             },
        {name: "Sleight of Hand ",            modifier: "DEX*",     class:"DEX_TOTAL-MODIFIER", id: "Sleight_of_Hand"          },
        {name: "Spellcraft ",                 modifier: "INT",      class:"INTE_TOTAL-MODIFIER", id: "Spellcraft"               },
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
        {name: "",                                             id:"ac__touch",                     class:"ac__touch",type:"input"},
        {name: "<h1>FLAT-FOOTED</h1><p>ARMOR CLASS</p>",       id:"ac__flatName",                     class:"ac__flatName",type:"name"},
        {name: "",                                             id:"ac__flat",                     class:"ac__flat",type:"input"},
        {name: "<h1>INICIATIVE</h1><p>MODIFIER</p>",           id:"init__inicitiveName",                     class:"init__inicitiveName",type:["name","init"]},
        {name: "TOTAL",                                        id:"init__total",                     class:"init__total", type:["value","init"]},
        {name: "DEX <br> MODIFIER",                            id:"init__dex",                     class:"init init__dex DEX_TOTAL-MODIFIER",type:["input","init"]},
        {name: "MISC <br> MODIFIER",                           id:"init__misc",                     class:"init init__misc",type:["lastinput","init"]},

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

    //MOCK UP DATA END

    
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
    character();

    //FUNCTIONS
    totalrank(skill);

    
};

var lv1Int;
var characterData;
var characters = [];

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
                    <input type="${element.type}" onchange="levels(this)" type="number" min="0" id="${element.class}" value="0"  class="header__input"></input>`
                }
                else
                {
                 query += `
                 <input type="${element.type}" id="${element.class}" class="header__input"></input>`
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
            ${element.name}`
            if(element.dropdown == "header_dropdown_skill" ){
                query += `<div class="${element.dropdown}">
                <p> HUMAN <input class="human_skill" id="HumanSkillPoint" onchange="enabledHuman(this)" type="checkbox"></p>
                </div>  
                </li>
                `
            }else if(element.dropdown == "header_dropdown_feats"){
                query += `<div class="${element.dropdown}">
                <button onClick="addNewFeat()">Add Feat</button>
                <p class="feats_input_human">HUMAN <input id="feat_human" disabled type="text"></p>
                <div class="${element.dropdown}_aditional">
                </div>
                </div>
                
                </li>
                `
            }else{
                query += `<div class="${element.dropdown}">
                </div>  
                </li>
                `
            }
            
        });
        query += `
            <li class="debug save_button">
            <button onclick="openModal()">Save</button>
            </div>  
            </li>
            `
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
        <input type="number" min="0" onchange="totals('STA',this)" value="0" id="${element.STA}_value">
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
        <input type="number"  onchange="totals('STA',this)" value="0" id="${element.STA}T_value">
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
             <input type="radio" name="hpType" id="hpType_prod">
             <p>PROD</p>
                 <input type="radio" name="hpType" id="hpType_full">
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
            <input id="${element.id}" class="${element.class}" value="0" type="number" min="0">
            </div>     
                </li>
            </ul>
        </div>`  
        } else{
            query += `
                    <div class="Box__input">
                        <input id="${element.id}" class="${element.class}" value="0" type="number" min="0">
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
            <input onchange="totals('AC',this)" id="${element.id}" class="${element.class}" value="0" type="number" min="0">
            </div> 
                    <p class="hp">${element.name}</p>     
                </li>
            </ul>
        </div>`  
        } else if(element.type == "input"){
            query += `
            <div class="Box__input">
            <input onchange="totals('AC',this)" id="${element.id}" class="${element.class}" value="0" type="number" min="0">
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
                        <input type="text" id="dmg_reduction">
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
                        <input disabled id="${element.id}" type="number" min="0">
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
                <input id="${element.id}" disabled type="number" min="0">
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
                <div>
                    
                    <ul class="flex flex-column">
                        <li class="flex flex-column">
                            <div class="Box__input">
                                <input id="${element.id}" onchange="totals('INIT',this)" class="${element.class}" type="number" min="0">
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
                <div>
                    
                    <ul class="flex flex-column">
                        <li class="flex flex-column">
                            <div class="Box__input">
                                <input id="${element.id}" onchange="totals('INIT',this)" class="${element.class}" type="number" value="0" min="0">
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
                    <p>SKILL TRICKS <br> POINTS</p>
                        <div style="margin-left:5px;">
                            <input type="number" onchange="totalSkillPoint()" style="width:35px" value=0  id="skillTrick_skillPoint"/>
                        </div>
                    <p>EXTRA SP</p>
                        <div style="margin-left:5px;">
                            <input type="number" onchange="totalSkillPoint()" style="width:40px" value=0  id="extra_skillPoint"/>
                        </div>
                        <p>MAX RANKS <br> (CLASS/CROSS-CLASS)</p>
                        <div style="margin-left:5px;">
                            <input disabled value="0" style="width:40px"   class="max_skillPoint"/>
                        </div>
                        <p>TOTAL<br> SKILLPOINTS</p>
                        <div style="margin-left:5px;">
                            <input disabled style="width:40px"  class="total_skillpoint"/>
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
                     <input type="number" min="0" onchange="addRank(this)" onkeydown="return false" step="0.5"  class="ranks" id="${element.id}_ranks" name="">
                        <p>+</p>
                    <input type="number" id="${element.id}_misc" name="">
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
                                        <input id="${subelement.id}" onchange="totals('SAVES',this)" class="${subelement.class}" value="0" type="number" min="0">
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
                                                    <input class="${subelement.class}" onchange="totals('SAVE',this)" id="${subelement.id}" value="0" type="number" min="0">
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
                                                    <input class="${subelement.class}" onchange="totals('SAVE',this)" id="${subelement.id}" value="0" type="number" min="0">
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
                            <input onchange="totals('AB',this)" id="${element.id}" class="${element.class}" value="0" type="number" min="0">
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
                            <input onchange="totals('GRAPPLE',this)" value="0" id="${element.id}" class="${element.class}" type="number" min="0">
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
                    <input onchange="totals('GRAPPLE',this)"  type="number" min="0" value="0" id="${element.id}" class="${element.class}" name="">
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
                    <input class=${element.class}__${count} id="${element.class}" type="text">
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
                <input class=${element.class} id=${element.class} type="text">
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
                <input class=${element.class} id=${element.class} type="text">
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
        case 'AC':
                let ac;
                let t_ac = 10;
                let f_ac = 10;
                type.includes('AC') ? ac = 10 
                                     :ac = 0;
                let saveValues = document.querySelectorAll(`.${object.id.split('_')[0]}`);

                saveValues.forEach(element =>{
                    if(element.id !== 'ac__touch' &&
                       element.id !== 'ac__flat'){
                    ac =  ac + parseInt(element.value);
                    }
                    if(element.id == 'AC_dex' ||
                       element.id == 'AC_size'||
                       element.id == 'AC_deflection'||
                       element.id == 'AC_misc') 
                    {
                        t_ac = t_ac + parseInt(element.value);
                    }
                    if(element.id == 'AC_armor' ||
                       element.id == 'AC_size'||
                       element.id == 'AC_shield'||
                       element.id == 'AC_natural'||
                       element.id == 'AC_deflection'||
                       element.id == 'AC_misc')
                    {
                        f_ac = f_ac + parseInt(element.value);
                    }




                });
                document.querySelector(`#AC_total`).value = ac;
                document.querySelector(`#ac__touch`).value = t_ac;
                document.querySelector(`#ac__flat`).value = f_ac;
            break;
        case 'INIT':
            let init = 0;
            let inits = document.querySelectorAll(`.init`);

            inits.forEach(element => {

                init += parseInt(element.value);

            });

            document.querySelector(`#init__total`).value = init;

            break;
            default:
            break;    
    }
};

function classSkillValidate(checkbox)
{
    if (checkbox.checked == true) 
    {
        let input = document.querySelector(`#${checkbox.id.replace('check','ranks')}`);
        input.step = 1;
    }
    else
    {
        let input = document.querySelector(`#${checkbox.id.replace('check','ranks')}`);
        input.step = 0.5;
    }
};
function addRank(rank)
{
    let lv = parseInt(document.querySelector('#levels').value)

    if (lv != 0) {
        
        let dataRank = [{
            lv: parseInt(document.querySelector('#levels').value),
            rank:[{
                id:rank.id,
                crossClass: rank.id.includes('ranks')
                ?!document.querySelector(`#${rank.id.replace('ranks','check')}`).checked
                :!document.querySelector(`#${rank.id.replace('misc','check')}`).checked,
                value: rank.value
            }]
        }];
    
        try {
            let skillRanks = JSON.parse(localStorage["skillRanks"]);
            let newLv = true;
            skillRanks.forEach(element =>{
    
                if(element.lv == dataRank[0].lv)
                {
                    let newrank = true;
                    element.rank.forEach(rank =>{
                        if (rank.id == dataRank[0].rank[0].id) {
                            rank.crossClass = dataRank[0].rank[0].crossClass;
                            rank.value = dataRank[0].rank[0].value;
                            newrank = false;
                        }
                    })
                    newrank ? element.rank.push(dataRank[0].rank[0]) :false
                    newLv = false
                }
    
            });
            newLv ? skillRanks.push(dataRank[0]):false
            localStorage["skillRanks"] = JSON.stringify(skillRanks);
          
            
        } catch (error) {
            localStorage["skillRanks"] = JSON.stringify(dataRank);
        }
        rankMaths();

    } else {
        alert("no puedes agregar rango siendo lv 0");
        rank.value = 0;
    }
    
   


};

function rankMaths(){

    try {
        let skillRanks = JSON.parse(localStorage["skillRanks"]);
        totalSkillPoint();
        let displayPoint = document.querySelector(".total_skillpoint");
        let points = parseInt(document.querySelector(".total_skillpoint").value);

            //Resta de total
        skillRanks.forEach(level =>{
            level.rank.forEach(rank => {
                if(rank.crossClass){
                    points = points - (rank.value * 2 )
                } else {
                    points = points - rank.value
                }
            });

            displayPoint.value = points;

        });
    } catch (error) {
        console.log(error)
    }
    
    
}

  

function levels(level)
{
    let intArray = [];
    if (level.value == 1) {
            if(document.querySelector('#INTE_value').value != 0 &&
            document.querySelector('#STR_value').value != 0 &&
            document.querySelector('#DEX_value').value != 0 &&
            document.querySelector('#CON_value').value != 0 &&
            document.querySelector('#WIS_value').value != 0 &&
            document.querySelector('#CHA_value').value != 0 
            ){
                
                let lvInt = {
                    lv:level.value,
                    Int:document.querySelector('#INTE_modifier').value,
                    Sp:0
                }
                intArray.push(lvInt);
                localStorage["INT_for_skill"] = JSON.stringify(intArray);
            }else{
                alert('Coloca Primero los Status antes de subir de Nivel');
                document.querySelector(`#levels`).value = 0;
            }
    } 
    else
    {
        let lvInt = {
            lv:level.value,
            Int:document.querySelector('#INTE_modifier').value,
            Sp: 0
        }
    
        intArray = JSON.parse(localStorage["INT_for_skill"]);
        let count = 0
        intArray.forEach(element => {
            if(element.lv == lvInt.lv)
            {
                element.Int = lvInt.Int;
                count++
            }
        })
        if(count == 0)
        {
            intArray.push(lvInt)
            localStorage["INT_for_skill"] = JSON.stringify(intArray)
        }
        else
        {
            localStorage["INT_for_skill"] = JSON.stringify(intArray)
        }
    }    
    maxSkillPoint(level.value);
    feats(level.value);
    hitDice(level.value);
}
function maxSkillPoint(level) 
{
const maxSkillPoint = document.querySelector('.max_skillPoint');
    try 
    {
        let levels = level
        maxSkillPoint.value = (parseInt(levels) + 3) + '/' + ((parseInt(levels) + 3) / 2);    
        validateRanks(maxSkillPoint);
        skillpoint(levels);
    } 
    catch (error)
    {
        console.log(error)
    }

    


};
function totalSkillPoint(skillLV){
    totalPoints = document.querySelector(".total_skillpoint");
    let ExtraPoint = document.querySelector("#extra_skillPoint").value;
    let skilltrick = document.querySelector("#skillTrick_skillPoint").value;
    let point = 0;
    level = document.querySelector("#levels").value;
    let human = document.querySelector("#HumanSkillPoint").checked;

   // LVpoint = LVpoint.slice(LVpoint.length-1);
    let int_per_lv = JSON.parse(localStorage["INT_for_skill"]);
    if(skillLV)
    {
        //let LVpoint = skillLV.classList[0];
        int_per_lv.forEach(element =>{ 
        if(element.lv == skillLV.classList[0].slice(skillLV.classList[0].length -1)){
        element.Sp = parseInt(skillLV.value);
        localStorage["INT_for_skill"] = JSON.stringify(int_per_lv);
            }
        });
        //skillLV.dispatchEvent(new Event('change'));
    }
    

    

    for (let index = 1; index <= level; index++ ){

        if(index == 1)
        {
            human
            ?point += ((parseInt(int_per_lv[index-1].Int) + int_per_lv[index-1].Sp)* 4) + 4   
            :point += ((parseInt(int_per_lv[index-1].Int) + int_per_lv[index-1].Sp)* 4)
        }
        else{
            human
            ?point += ((parseInt(int_per_lv[index-1].Int) + int_per_lv[index-1].Sp) + 1)   
            :point += (parseInt(int_per_lv[index-1].Int) + int_per_lv[index-1].Sp)
        }
        
    }


    totalPoints.value = point + (ExtraPoint - skilltrick);

};
function skillpoint(level) {
    let skillPoint = document.querySelector(".header_dropdown_skill");
    let prevLV = skillPoint.childElementCount;
    let index = 0;

    if(prevLV == level)
    {
        for ( index = prevLV; index == level; index++) {
               
               let p = document.createElement('p');
               let input = document.createElement('input');
               input.setAttribute(`class`,`skillLV${level}`);
               input.setAttribute(`id`,`skillLV${level}`);
               input.setAttribute(`type`,`number`);
               input.setAttribute(`value`,0);
               input.setAttribute(`onchange`,`totalSkillPoint(this)`);
               p.setAttribute(`class`,`skill_input${level}`);
               p.innerHTML = `LV ${level}  `;
               p.appendChild(input);
               skillPoint.appendChild(p);
        }
        
    } else
    {
        for ( index = (prevLV-1); index > level; index--) {
          
            skillPoint.children[prevLV-1].remove();
            
        }
    }
};

function addNewFeat(){

    let feats = document.querySelector(".header_dropdown_feats_aditional");
    
    

        let container = document.createElement('div');
        let input = document.createElement('input');
        input.setAttribute(`id`,`feats_aditional_${feats.children.length+1}`);
        input.setAttribute(`type`,`text`);
        input.setAttribute(`value`,"");
        container.appendChild(input);
        feats.appendChild(container);
    

}

function feats(level){

    
    let hitDice = document.querySelector(".header_dropdown_hit_dice");
    let feats = document.querySelector(".header_dropdown_feats");
    let prevLV = hitDice.childElementCount;
    let query = feats.innerHTML;
    let index = 0;

    if(prevLV < level)
    {
        if(level == 1){
            let p = document.createElement('p');
            let input = document.createElement('input');
            input.setAttribute(`class`,`feats_input${level}`);
            input.setAttribute(`id`,`feats${level}`);
            input.setAttribute(`type`,`text`);
            input.setAttribute(`value`,"");
            
            p.innerHTML = `LV ${level}  `;
            p.appendChild(input);
            feats.appendChild(p);
        }else{
            for ( index = prevLV; index < level; index++) {
                if (level%3 == 0) {
                    let p = document.createElement('p');
                    let input = document.createElement('input');
                    input.setAttribute(`class`,`feats_input${level}`);
                    input.setAttribute(`id`,`feats${level}`);
                    input.setAttribute(`type`,`text`);
                    p.innerHTML = `LV ${level}  `;
                    p.appendChild(input);
                    feats.appendChild(p);
                }
                
            }    
        }
    }
    else 
    {
        for (index = 1 ; index <= level; index++) {
            if(feats.children[index] != undefined){
                if(feats.children[index].children[0].id.slice(feats.children[index].children[0].id.length-1) > level){
                 if (feats.children[index] != null) {
                        feats.children[index].remove();
                    }
            }
            } 
            

        }

           
        
    }

};
function hitDice(level) {
    let hitDice = document.querySelector(".header_dropdown_hit_dice");
    let prevLV = hitDice.childElementCount+1;
    let index = 0;

    if(prevLV == level)
    {
        for ( index = prevLV; index == level; index++) {
            let p = document.createElement('p');
            let input = document.createElement('input');
            input.setAttribute(`class`,`hitDice${level}`);
            input.setAttribute(`id`,`hitDice${level}`);
            input.setAttribute(`type`,`number`);
            input.setAttribute(`value`,0);
            p.setAttribute(`class`,`hit_input${level}`);
            p.innerHTML = `LV ${level}  `;
            p.appendChild(input);
            hitDice.appendChild(p);
        }
    }
    else 
    {
        for ( index = (prevLV-1); index > level; index--) {
      
            hitDice.children[prevLV-2].remove();
            
        }
    }
        
    

    




};
function character(){
    try {
         characters = JSON.parse( localStorage["characters"]);
         const character = document.querySelector(".header_dropdown_characters");
         let query  = ``;
         characters.forEach(element => {

            query += 
            `<p class="flex flex-jc-s flex-ai-sb character_${element.CharacterName}">${element.CharacterName} <button onclick="loadCharacter('${element.CharacterName}')">load</button><button onclick="saveCharacter('${element.CharacterName}')"">save</button></p>`;
             
         });
         
         character.innerHTML += query;



    }
    catch(err){
        console.log(err);
    }
}
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
            const miscranks = document.querySelector(`#${element.id}_misc`);

            totalrankskill.value = (
                (totalrankskillM.value == "" ? totalrankskillM.value = 0 : parseInt(totalrankskillM.value)) + 
                (rankskill.value == "" ? rankskill.value = 0 : parseInt(rankskill.value)) + 
                (miscranks.value == "" ? miscranks.value = 0 : parseInt(miscranks.value)));
                
        });
};
function saveNewCharacter(){
    
     characterData = document.querySelectorAll('input');
     let characterName = document.querySelector('#characterSavedName').value;
     let characterLV = document.querySelector('#levels').value;
     
    
    console.log(characterData);
    console.log('saved');
    let newCharacter = [];
    characterData.forEach(element =>{

        if(element.id != "")
        {
            if (element.value !== "on") {
                newCharacter.push({
                    "id": element.id,
                    "value": element.value
                });
            } else {
                newCharacter.push({
                    "id": element.id,
                    "checked": element.checked
                });
            }
            
        }
        

    });
    try {
        newCharacter.push({
            "INT_for_skill": localStorage["INT_for_skill"]
        });
    } catch (error) {
        console.log(error);
    }
    try {
        newCharacter.push({
            "skillRanks": localStorage["skillRanks"]
        })
    } catch (error) {
        console.log(error);
    }
    characters.push({"CharacterName":characterName,"data":newCharacter, "level":characterLV});
    console.log(characters);
    localStorage["characters"] = JSON.stringify(characters);
    character();
    closeModal();
    
    
    
    
}
function loadCharacter(character){

    let characterSaved = JSON.parse(localStorage['characters']);
    characterSaved.forEach(element =>{
        if(element.CharacterName == character){
            loadHitDice(element.level);
            loadFeats(element.level);
            loadSkillpoint(element.level);
            element.data.forEach(CharacterProp => {
                try {

                    if (CharacterProp.checked) {

                        document.querySelector(`#${CharacterProp.id}`).checked = CharacterProp.checked
                        
                    } else {

                        CharacterProp.id != undefined
                        ?CharacterProp.id.includes("feats_aditional")
                            ?loadAditionalFeat(CharacterProp)
                            :document.querySelector(`#${CharacterProp.id}`).value = CharacterProp.value
                        :CharacterProp.INT_for_skill != undefined
                        ? localStorage["INT_for_skill"] = CharacterProp.INT_for_skill
                        :CharacterProp.skillRanks != undefined
                        ? localStorage["skillRanks"] = CharacterProp.skillRanks
                        :false
                        
                    }
                       
                } catch (error) {
                        console.log(error + CharacterProp.id);
                }
            });
            
            totalSkillPoint(false);

            
        }
    })

}
function saveCharacter(character){

   let characterData = document.querySelectorAll('input');
    let characterSaved = JSON.parse(localStorage['characters']);
    let characterLV = document.querySelector('#levels').value;
    
    console.log(characterData);
    let newDataCharacter = [];
    characterData.forEach(element =>{

        if(element.id != "")
        {
            if (element.value !== "on") {
                newDataCharacter.push({
                    "id": element.id,
                    "value": element.value
                });
            } else {
                newDataCharacter.push({
                    "id": element.id,
                    "checked": element.checked
                });
            }
            
        }
    });
    try {
        newDataCharacter.push({
            "INT_for_skill": localStorage["INT_for_skill"]
        });
    } catch (error) {
        console.log(error);
    }
    try {
        newDataCharacter.push({
            "skillRanks": localStorage["skillRanks"]
        })
    } catch (error) {
        console.log(error);
    }
    
    characterSaved.forEach(element =>{
        if(element.CharacterName == character){
            element.data = newDataCharacter;
            element.level = characterLV;
        }
    })
    localStorage["characters"] = JSON.stringify(characterSaved);
}


//modal

function openModal(){
    let body = document.querySelector('.modal');
    body.classList.remove("modal_hidden");
}

function closeModal(){
    let body = document.querySelector('.modal');
    body.classList.add("modal_hidden");
}

//end modal

//load function

function loadFeats(level){

    let feats = document.querySelector(".header_dropdown_feats");
    let index = 0;

  
    for ( index = 1; index <= level; index++) {

        let p = document.createElement('p');
        let input = document.createElement('input');
        input.setAttribute(`class`,`feats_input${index}`);
        input.setAttribute(`id`,`feats${index}`);
        input.setAttribute(`type`,`text`);
        input.setAttribute(`value`,"");
        p.setAttribute(`class`,`skill_input${index}`);
        
        p.innerHTML = `LV ${index}  `;
        p.appendChild(input);
        feats.appendChild(p);
    }
    
    
    

};
function loadAditionalFeat(featValue){
    let feats = document.querySelector(".header_dropdown_feats_aditional");

    let container = document.createElement('div');
    let input = document.createElement('input');
    input.setAttribute(`id`,featValue.id);
    input.setAttribute(`type`,`text`);
    input.setAttribute(`value`,featValue.value);
    container.appendChild(input);
    feats.appendChild(container);
}
function loadHitDice(level) {
    let hitDice = document.querySelector(".header_dropdown_hit_dice");
    let index = 0;

        for ( index = 1; index <= level; index++) {
            let p = document.createElement('p');
            let input = document.createElement('input');
            input.setAttribute(`class`,`hitDice${index}`);
            input.setAttribute(`id`,`hitDice${index}`);
            input.setAttribute(`type`,`number`);
            input.setAttribute(`value`,0);
            p.setAttribute(`class`,`hit_input${index}`);
            p.innerHTML = `LV ${index}  `;
            p.appendChild(input);
            hitDice.appendChild(p);
        }
    
    

};
function loadSkillpoint(level) {
    let skillPoint = document.querySelector(".header_dropdown_skill");
    let index = 0;

   
        for ( index = 1; index <= level; index++) {
               
               let p = document.createElement('p');
               let input = document.createElement('input');
               input.setAttribute(`class`,`skillLV${index}`);
               input.setAttribute(`id`,`skillLV${index}`);
               input.setAttribute(`type`,`number`);
               input.setAttribute(`value`,0);
               input.setAttribute(`onchange`,`totalSkillPoint(this)`);
               p.setAttribute(`class`,`skill_input${index}`);
               p.innerHTML = `LV ${index}  `;
               p.appendChild(input);
               skillPoint.appendChild(p);
        }
        rankMaths();    
    
};

//Human

function enabledHuman(ishuman){
    if(ishuman.checked){
        document.querySelector("#feat_human").removeAttribute("disabled");
    } else{
        document.querySelector("#feat_human").addAttribute = "disabled";
    }
    totalSkillPoint();
}



