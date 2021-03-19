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
        {name: "Perform (______________)", modifier: "CHA"},
        {name: "Perform (______________)", modifier: "CHA"},
        {name: "Perform (______________)", modifier: "CHA"},
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
    ]

    const StatsModifier = 
    [
        {VALUE: "", Modifier: ""},
        {VALUE: "", Modifier: ""},
        {VALUE: "", Modifier: ""},
        {VALUE: "", Modifier: ""},
        {VALUE: "", Modifier: ""},
        {VALUE: "", Modifier: ""}
    ];
    
    headerMap(headerNames);
    statsMap(abName);
   // hpAcMap(abName);
   skillsMap(skill)


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
        <li class=" flex flex-column Box__value">
        <p class="${element.STA}-Modifier">30</p>
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
        <li class=" flex flex-column Box__value">
        <p class="${element.STA}-TModifier">30</p>
        </li>`
    });

    StatTempModifier.innerHTML += query;
    query = ``;
};
const hpAcMap = (data) =>{
    const HpAcSkillSection = document.querySelector('.HpAndArmor')
    let query = ``;
    query = `
    <div class="hpbar debug flex flex-row-l">
            
                <div class="hp__name ">
                    <div class="HpType flex flex-row" >
                        <input type="radio" name="hpType" id="" value="PROD">
                        <p>PROD</p>
                        <input type="radio" name="hpType" id="">
                        <p>FULL</p></div>
                    <ul class="flex flex-column">
                        <li class="Box__black">
                            <h1>HP</h1>
                            <p>HIT POINTS</p>
                        </li>
                    </ul>
                </div>

                <div class="hp__value">
                    <p class="hp">TOTAL</p>
                    <ul class="flex flex-column">
                        <li class="Box__value">
                            <p>30</p>
                        </li>
                    </ul>
                </div>

                <div class="hp__extra">
                    <p class="hp">HP EXTRA</p>
                    <ul class="flex flex-column">
                        <li class="Box__input">
                            <input type="text">
                        </li>
                    </ul>
                </div>

                <div class="hp__wounds">
                    <p class="hp">WOUNDS/CURRENT HP</p>
                    <ul class="flex flex-column flex-ai-c">
                        <li class="Box__input">
                            <input type="text">
                        </li>
                    </ul>
                </div>

                <div class="hp__nonlethaldamage">
                    <p class="hp">NONLETHAL DAMAGE</p>
                    <ul class="flex flex-column">
                        <li class="Box__input">
                            <input type="text">
                        </li>
                    </ul>
                </div>

                <div class="hp__speed">
                    <p class="hp">SPEED</p>
                    <ul class="flex flex-column flex-ai-c">
                        <li class="Box__input">
                            <input type="text">
                        </li>
                    </ul>
                </div>

        </div>

        <div class="acbar debug flex flex-row-l">
            <div class="ac__name ">
                <ul class="flex">
                    <li class="Box__black">
                        <h1>AC</h1>
                        <p>ARMOR CLASS</p>
                    </li>
                </ul>
            </div>
            <div class="ac__bonus flex flex-row-l">
                <ul class="flex flex-row">
                    <li class="Box__value flex flex-row">
                        <p>30</p>
                        <p>TOTAL</p>
                    </li>
                    <li class="Box__input flex flex-row">
                        <p>= 10 +</p>
                    </li>
                    <li class="Box__input flex flex-row">
                        <input type="text">
                        <p>ARMOR BONUS</p>
                    </li>
                    <li class="flex flex-ai-c">
                        <p>+</p>
                    </li>
                    <li class="Box__input flex flex-row">
                        <input type="text">
                        <p>SHIELD BONUS</p>
                    </li>
                    <li class="flex flex-ai-c">
                        <p>+</p>
                    </li>
                    <li class="Box__input flex flex-row">
                        <input type="text">
                        <p>DEX MODIFIER</p>
                    </li>
                    <li class="flex flex-ai-c">
                        <p>+</p>
                    </li>
                    <li class="Box__input flex flex-row">
                        <input type="text">
                        <p>SIZE MODIFIER</p>
                    </li>
                    <li class="flex flex-ai-c">
                        <p>+</p>
                    </li>
                    <li class="Box__input flex flex-row">
                        <input type="text">
                        <p>NATURAL ARMOR</p>
                    </li>
                    <li class="flex flex-ai-c">
                        <p>+</p>
                    </li>
                    <li class="Box__input flex flex-row">
                        <input type="text">
                        <p>DEFLECTION MODIFIER</p>
                    </li>
                    <li class="flex flex-ai-c">
                        <p>+</p>
                    </li>
                    <li class="Box__input flex flex-row">
                        <input type="text">
                        <p>MISC MODIFIER</p>
                    </li>
                    <li class="ac__DmgRed Box__input flex flex-row">
                        <input type="text">
                        <p>DAMAGE REDUCTION</p>
                    </li>
                </ul>
            </div>
                
        </div>
        <div class="flex flex-row">
            <div class="ArmorAndIniciative debug flex flex-column-l">
                <ul class="flex flex-row-l">
                    <li class="touch_name flex flex-column Box__black">
                        <h1>TOUCH</h1>
                        <p>ARMOR CLASS</p>
                    </li>
                    <li class=" flex flex-column Box__input">
                        <input type="text" name="" >
                    </li>
                    <li class="flatfooted_name flex flex-column Box__black">
                        <h1>FLAT FOOTED</h1>
                        <p>ARMOR CLASS</p>
                    </li>
                    <li class=" flex flex-column Box__input">
                        <input type="text" name="" >
                        
                    </li>
                    <li class="iniciative_name flex flex-column Box__black">
                        <h1>INICIATIVE</h1>
                        <p>MODIFIER</p>
                    </li>
                    <li class="Box__value flex flex-row">
                        <p>0</p>
                        <p>TOTAL</p>
                    </li>
                    <li class="flex flex-ai-c">
                        <p>=</p>
                        
                    </li>
                    <li class="Box__input flex flex-row">
                        <input type="text">
                        <p>DEX MODIFIER</p>
                    </li>
                    <li class="flex flex-ai-c">
                        <p>+</p>
                    </li>
                    <li class="Box__input flex flex-row">
                        <input type="text">
                        <p>MISC MODIFIER</p>
                    </li>
                </ul>
            </div>

            <div class="skill flex debug">
            <div class="skillcontainer">
                <ul class="flex flex-column-t">
                    <li class="flex flex-row Box__black">
                        <h1>SKILLS</h1>
                    </li>
                </ul>
            </div>

        </div>
    `
    HpAcSkillSection.innerHTML += query;
}

const skillsMap = (data) =>{
    const HpAcSkillSection = document.querySelector('.HpAndArmor')
    let query = `
    `;
    query = `
    
    `
    HpAcSkillSection.innerHTML += query;
}

