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
    
    headerMap(headerNames);
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