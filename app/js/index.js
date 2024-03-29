window.onload = ()=>{
    let body = new Body();
    let character = new Characters();
    window.jsPDF = window.jspdf.jsPDF
    feats(1);
    hitDice(1);
    skillpoint(1);
};

var lv1Int;
var characterData;
var characters = [];


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
        case 'SAVE':
            let save = document.querySelectorAll(`.${object.id.split(`_`)[0]}`);
            let total_save = 0;
            
            save.forEach(element =>{

                total_save += parseInt(element.value);

            })
            document.querySelector(`#${object.id.split(`_`)[0]}_total`).value = total_save;

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

function classSkillsValidate()
{

    let checks = document.querySelectorAll(`.classSkill`)
    checks.forEach(checkbox => {
        
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

    });
    
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
    let hpArray = [];
    if (level.value > 1) {
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
                let lvHP = {
                    lv:level.value,
                    hp:0
                }

                intArray.push(lvInt);
                hpArray.push(lvHP);
                localStorage["INT_for_skill"] = JSON.stringify(intArray);
                localStorage["HP_lv"] = JSON.stringify(hpArray);
            }else{
                alert('Coloca Primero los Status antes de subir de Nivel');
                document.querySelector(`#levels`).value = 1;
            }
    } 
    else
    {
        let lvInt = {
            lv:level.value,
            Int:document.querySelector('#INTE_modifier').value,
            Sp: 0
        }
        let lvHP = {
            lv:level.value,
            hp:0
        }

        intArray = JSON.parse(localStorage["INT_for_skill"]);
        hpArray = JSON.parse(localStorage["HP_lv"]);
        let intCount = 0
        let hpCount = 0
        intArray.forEach(element => {
            if(element.lv == lvInt.lv)
            {
                element.Int = lvInt.Int;
                intCount++
            }
        })
        if(intCount == 0)
        {
            intArray.push(lvInt)
            localStorage["INT_for_skill"] = JSON.stringify(intArray)
        }
        else
        {
            localStorage["INT_for_skill"] = JSON.stringify(intArray)
        }

        hpArray.forEach(element => {
            if(element.lv == lvHP.lv)
            {
                element.hp = lvHP.hp;
                hpCount++
            }
        })
        if(hpCount == 0)
        {
            hpArray.push(lvHP)
            localStorage["HP_lv"] = JSON.stringify(hpArray)
        }
        else
        {
            localStorage["HP_lv"] = JSON.stringify(hpArray)
        }
    }    
    maxSkillPoint();
    feats(level.value);
    hitDice(level.value);
}

function maxSkillPoint() 
{
const maxSkillPoint = document.querySelector('.max_skillPoint');
    let level = parseInt(document.querySelector('#levels').value);
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
    let hitDice = document.querySelector(".header_dropdown_hit_dice");
    let skillPoint = document.querySelector(".header_dropdown_skill");
    let prevLV = hitDice.childElementCount;
    let index = 0;

    if(prevLV <= level)
    {
        for (index = 1; index <= level; index++) {
            if(!document.querySelector(`#skillLV${index}`))
            {
               
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
        }
        
    } else
    {
        for ( index = (prevLV); index > level; index--) {
          
            skillPoint.children[index].remove();
            
        }
    }
};
function feats(level){

    
    let hitDice = document.querySelector(".header_dropdown_hit_dice");
    let feats = document.querySelector(".header_dropdown_feats");
    let prevLV = hitDice.childElementCount;
    let index = 0;

    if(prevLV < level)
    {
        if(level == 1){
            if(!document.querySelector(`#feats1`))
            {
                let p = document.createElement('p');
                let input = document.createElement('input');
                input.setAttribute(`class`,`feats_input${level}`);
                input.setAttribute(`id`,`feats${level}`);
                input.setAttribute(`type`,`text`);
                input.setAttribute(`value`,"");
                
                p.innerHTML = `LV ${level}  `;
                p.appendChild(input);
                feats.appendChild(p);
            }
        }else{
            for ( index = 1; index <= level; index++) {
                if (index%3 == 0) {
                    if(!document.querySelector(`#feats${index}`))
                    {    
                        let p = document.createElement('p');
                        let input = document.createElement('input');
                        input.setAttribute(`class`,`feats_input${index}`);
                        input.setAttribute(`id`,`feats${index}`);
                        input.setAttribute(`type`,`text`);
                        p.innerHTML = `LV ${index}  `;
                        p.appendChild(input);
                        feats.appendChild(p);
                    }
                }
                
            }    
        }
    }
    else 
    {
        for (index = (prevLV); index >= level; index--) {
            if(index%3 == 0)
            {
                if(feats.children[feats.children.length-1].children[0].id.slice(5) > level){
                    
                    feats.children[feats.children.length-1].remove();
                     
                } 
            }

        }

           
        
    }

};
function hitDice(level) {
    let hitDice = document.querySelector(".header_dropdown_hit_dice");
    let prevLV = hitDice.childElementCount;
    let index = 0;

    if(prevLV < level)
    {
        for ( index = 1; index <= level; index++) {
            if(!document.querySelector(`#hitDice${index}`))
            {
                let p = document.createElement('p');
                let input = document.createElement('input');
                input.setAttribute(`class`,`hitDice${index}`);
                input.setAttribute(`id`,`hitDice${index}`);
                input.setAttribute(`type`,`number`);
                input.setAttribute(`value`,0);
                input.setAttribute(`onchange`,`totalHP(this)`);
                p.setAttribute(`class`,`hit_input${index}`);
                p.innerHTML = `LV ${index}  `;
                p.appendChild(input);
                hitDice.appendChild(p);
            }
        }
    }
    else 
    {
        for ( index = (prevLV); index > level; index--) {
      
            hitDice.children[index-1].remove();
            
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
    

};
function addSpecialAbility(){

    let ability = document.querySelector(".header_dropdown_special_abilities");
    let container = document.createElement('div');
    let input = document.createElement('input');
    input.setAttribute(`id`,`special_abilities_${ability.children.length+1}`);
    input.setAttribute(`type`,`text`);
    input.setAttribute(`value`,"");
    container.appendChild(input);
    ability.appendChild(container);
    

}
function totalHP(hpLV){
    let hp = document.querySelector(`#hp__value`);
    let con = document.querySelector(".CON_TOTAL-MODIFIER");
    let extra_hp = document.querySelector(`#hp__extra`)
    let hp_point = 0;
    
    level = document.querySelector("#levels").value;
    let HP_lv = JSON.parse(localStorage["HP_lv"]);
    if(hpLV)
    {
        HP_lv.forEach(element =>{ 
        if(element.lv == hpLV.classList[0].slice(hpLV.classList[0].length -1)){
        element.hp = parseInt(hpLV.value);
        localStorage["HP_lv"] = JSON.stringify(HP_lv);
            }
        });
    }
    

    

    for (let index = 1; index <= level; index++ ){

        hp_point += (parseInt(HP_lv[index-1].hp) + parseInt(con.value))    
        
    }


    hp.value = hp_point + (parseInt(extra_hp.value));
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
                            :CharacterProp.id.includes("special_abilities")
                            ?loadSpecialAbility(CharacterProp)
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
        }
    });
    totalSkillPoint(false);
    classSkillsValidate();
    rankMaths();
    maxSkillPoint();
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
        newDataCharacter.push({
            "HP_lv": localStorage["HP_lv"]
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
function loadSpecialAbility(spValue){
    let feats = document.querySelector(".header_dropdown_special_abilities");

    let container = document.createElement('div');
    let input = document.createElement('input');
    input.setAttribute(`id`,spValue.id);
    input.setAttribute(`type`,`text`);
    input.setAttribute(`value`,spValue.value);
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

 function convertToPDF(){

    document.querySelector('.headerMenu').style.display = "none"; 
    document.querySelector('.header__logo').style.display = "none"; 
    document.querySelector('body').style.margin = 0;
    html2canvas(document.querySelector('body'),{
        scale: 3,
        allowTaint:true
    }).then(canvas=>{
        canvas = canvas.toDataURL('image/png')
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(canvas, 'PNG', 0, 0, 262 , 297)
        pdf.save();
    })

    document.querySelector('.headerMenu').style.display = "block"; 
    document.querySelector('.header__logo').style.display = "block"; 
    document.querySelector('body').style.margin = "auto";

}



//CLASES MODE

class Body{
    constructor(){
        this.data = JSON.parse(localStorage["data"]);
        this.mapBody();
    }
    
    mapBody(){
        
    this.headerMap(this.data.headerNames,this.data.headerMenu);
    this.hpAcMap(data.hpbar,data.acbar,data.acInit);
    this.skillsMap(data.skill);
    this.savesMap(data.saveData);
    this.AttackMap(data.baseAttack);
    this.grappleMap(data.grapple);
    this.weaponMap(data.weapon);
    this.armorMap(data.armor);
    this.shieldMap(data.shield);
    this.statsMap(data.abName);
    }

    headerMap = (headerNames,headerMenu) =>  {
        const header = document.querySelector(".header");
        const skillheader = document.querySelector(".headerMenu");

        let query = ``
        headerNames.forEach(element => {
            query += `
            <div class="header__box">`
                if(element.type == "number")
                {
                    query += `
                    <input type="${element.type}" onchange="levels(this)" type="number" min="1" id="${element.class}" value="1"  class="header__input"></input>`
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
                <div class="${element.dropdown}_aditional">
                <button onClick="addNewFeat()">Add Feat</button>
                <p class="feats_input_human">HUMAN <input id="feat_human" disabled type="text"></p>
                </div>
                </div>
                
                </li>
                `
            }
            else if(element.dropdown == "header_dropdown_special_abilities"){
                query += `<div class="${element.dropdown}">
                <button onClick="addSpecialAbility()">Add special abilities</button>

                </div>
                
                </li>
                `
            }
            else{
                query += `<div class="${element.dropdown}">
                </div>  
                </li>
                `
            }
            
        });
        query += `
            <li class="debug save_button">
            <button onclick="openModal()">Save</button>
            <button onclick="convertToPDF()">Convertir a PDF</button>
            </div>  
            </li>
            `
        query += `</ul>`

        skillheader.innerHTML = query;

        
    };
    statsMap = (data) =>{
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
    hpAcMap = (hpbar,acbar,acInit) =>{
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
                <input id="${element.class}" class="${element.class}" value="0" type="number" min="0">
                </div>     
                    </li>
                </ul>
            </div>`  
            } else{
                query += `
                        <div class="Box__input">
                            <input id="${element.class}" class="${element.class}" value="0" type="number" min="0">
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
    skillsMap = (data) =>{ 
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
    savesMap = (data) =>{
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
    AttackMap = (data) =>{
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
    grappleMap = (data) =>{
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
    weaponMap = (data) =>{
        
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
    armorMap = (data) =>
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
    shieldMap = (data) =>
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

}

class Characters{
    constructor(){
        this.character()
    }

    character(){
        try {
             characters = JSON.parse( localStorage["characters"]);
             const character = document.querySelector(".header_dropdown_characters");
             let query  = ``;
             characters.forEach(element => {

                  let p = document.createElement('p');
                    let Savebutton = document.createElement('button');
                    let Loadbutton = document.createElement('button');
                    Savebutton.setAttribute(`onclick`,`saveCharacter('${element.CharacterName}')`);
                    Savebutton.textContent = "save";
                    Loadbutton.setAttribute(`onclick`,`loadCharacter('${element.CharacterName}')`);
                    Loadbutton.setAttribute(`class`,`ml-5 mr-5`);
                    Loadbutton.textContent = "load";
                    
                    p.setAttribute(`class`,`flex flex-jc-s flex-ai-sb character_${element.CharacterName}`);
                    p.innerHTML = `${element.CharacterName}`;
                    p.appendChild(Loadbutton);
                    p.appendChild(Savebutton);
                    character.appendChild(p);
    
                /* query += 
                `<p class="flex flex-jc-s flex-ai-sb character_${element.CharacterName}">
                ${element.CharacterName} <button onclick="loadCharacter('${element.CharacterName}')">load
                </button><button onclick="saveCharacter('${element.CharacterName}')"">save</button></p>`; */
                 
             });
             
             character.innerHTML += query;
    
    
    
        }
        catch(err){
            console.log(err);
        }
    }

    loadCharacter(character){

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
                            :CharacterProp.id.includes("special_abilities")
                            ?loadSpecialAbility(CharacterProp)
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
        }
    });
    totalSkillPoint(false);
    classSkillsValidate();
    rankMaths();
    maxSkillPoint();
    }


}


/* const headerMap = (headerNames,headerMenu) =>  {
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
            <input id="${element.class}" class="${element.class}" value="0" type="number" min="0">
            </div>     
                </li>
            </ul>
        </div>`  
        } else{
            query += `
                    <div class="Box__input">
                        <input id="${element.class}" class="${element.class}" value="0" type="number" min="0">
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
}; */
