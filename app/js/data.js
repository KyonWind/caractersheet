//MOCK UP DATA|
const data = {
    headerNames: [
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
        {name:"SKIN", type: "text", class:"skin"}
    ],
    headerMenu : 
    [
    {name:"SKILL",                       class:"header_skill",            dropdown:"header_dropdown_skill"},
    {name:"HIT DICE",                       class:"header_hit_dice",            dropdown:"header_dropdown_hit_dice"},
    {name:"FEATS",                       class:"header_feats",            dropdown:"header_dropdown_feats"},
    {name:"SPECIAL ABILITIES",                       class:"header_special_abilities",            dropdown:"header_dropdown_special_abilities"},
    {name:"CHARACTER",                       class:"header_character",            dropdown:"header_dropdown_characters"}
    
    ],

    abName :[
    {STA: "STR", Des: "STRENGHT"},
    {STA: "DEX", Des: "DEXTERY"},
    {STA: "CON", Des: "CONSTITUTION"},
    {STA: "INTE", Des: "INTELLIGENCE"},
    {STA: "WIS", Des: "WISDOM"},
    {STA: "CHA", Des: "CHARISMA"}
    ],
    skill : [
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
    ],

    hpbar :[
        {name: "TOTAL", class:"hp__value", type:"value"},
        {name: "HP EXTRA", class:"hp__extra",type:"input"},
        {name: "WOUNDS/CURRENT HP", class:"hp__wounds",type:"input"},
        {name: "NONLETHAL DAMAGE", class:"hp__nonlethaldamage",type:"input"},
        {name: "SPEED", class:"hp__speed",type:"input"}
    ],

    acbar: [
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
    ],

    acInit: [
        {name: "<h1>TOUCH</h1><p>ARMOR CLASS</p>",             id:"",                     class:"",type:"name"},
        {name: "",                                             id:"ac__touch",                     class:"ac__touch",type:"input"},
        {name: "<h1>FLAT-FOOTED</h1><p>ARMOR CLASS</p>",       id:"ac__flatName",                     class:"ac__flatName",type:"name"},
        {name: "",                                             id:"ac__flat",                     class:"ac__flat",type:"input"},
        {name: "<h1>INICIATIVE</h1><p>MODIFIER</p>",           id:"init__inicitiveName",                     class:"init__inicitiveName",type:["name","init"]},
        {name: "TOTAL",                                        id:"init__total",                     class:"init__total", type:["value","init"]},
        {name: "DEX <br> MODIFIER",                            id:"init__dex",                     class:"init init__dex DEX_TOTAL-MODIFIER",type:["input","init"]},
        {name: "MISC <br> MODIFIER",                           id:"init__misc",                     class:"init init__misc",type:["lastinput","init"]},
    
    ],

    saveData: [
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
            {name:"ABILITY <br> MODIFIER",  id:"WILL_STA",       class:"WILL WIS_TOTAL-MODIFIER",        type:"input"},
            {name:"MAGIC <br> MODIFIER",    id:"WILL_magic",     class:"WILL",           type:"input"},
            {name:"MISC <br> MODIFIER",     id:"WILL_misc",      class:"WILL",            type:"input"},
            {name:"TEMP <br> MODIFIER",     id:"WILL_temp",      class:"WILL",            type:"Lastinput"}]
        }
    ],

    baseAttack: [
        {name:"BASE ATTACK BONUS",           id:"AB_name",                       class: "ab_name", type:"name"},
        {name:"input",                       id:"AB_total",                      class: "", type:"input"},
    ],

    
    grapple: [
    {name:"GRAPPLE",                     id:"GRAPPLE_name",                  class: "gp_name", type:"name"},
    {name:"TOTAL",                       id:"GRAPPLE_total",                 class: "", type:"value"},
    {name:"BASE ATTACK <br> BONUS",      id:"GRAPPLE_ab",                    class: "AB GRAPPLE", type:"value"},
    {name:"STRENGHT",                    id:"GRAPPLE_str",                   class: "GRAPPLE STR_TOTAL-MODIFIER", type:"value"},
    {name:"SIZE <br> MODIFIER",          id:"GRAPPLE_size",                  class: "GRAPPLE", type:"value"},
    {name:"MISC <br> MODIFIER",          id:"GRAPPLE_misc",                  class: "GRAPPLE", type:"input"}
    ],

    armor: [
        {name:"AMOR", class: "ar_name", type:"input"},
        {name:"TYPE", class: "ar_type", type:"input"},
        {name:"ARMOR BONUS", class: "ar_bonus", type:"input"},
        {name:"MAX DEX BONUS", class: "ar_max_dex", type:"input"},
        {name:"CHECK PENALTY", class: "ar_check_penalty", type:"input"},
        {name:"SPELL FAILURE", class: "ar_spell_failure", type:"input"},
        {name:"SPEED", class: "ar_speed", type:"input"},
        {name:"WEIGHT", class: "ar_weight", type:"input"},
        {name:"SPECIAL PROPERTIES", class: "ar_special_properties", type:"input"}
    ],

    weapon: [
        {name:"WEAPON", class: "wp_name", type:"input"},
        {name:"TOTAL ATTACK BONUS", class: "wp_bonus", type:"input"},
        {name:"DAMAGE", class: "wp_damage", type:"input"},
        {name:"CRITICAL", class: "wp_critical_chance", type:"input"},
        {name:"RANGE", class: "wp_range", type:"input"},
        {name:"WEIGHT", class: "wp_weight", type:"input"},
        {name:"TYPE", class: "wp_type", type:"input"},
        {name:"SIZE", class: "wp_size", type:"input"},
        {name:"SPECIAL PROPERTIES", class: "wp_special_properties", type:"input"}
    ],

    shield: [
        {name:"SHIELD", class: "wp_name", type:"input"},
        {name:"ARMOR BONUS", class: "wp_bonus", type:"input"},
        {name:"CHECK PENALTY", class: "wp_damage", type:"input"},
        {name:"SPELL FAILURE", class: "wp_critical_chance", type:"input"},
        {name:"WEIGHT", class: "wp_weight", type:"input"},
        {name:"SPECIAL PROPERTIES", class: "wp_special_properties", type:"input"}
    ]
}

localStorage["data"] = JSON.stringify(data);









