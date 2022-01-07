let idNum = 1;
let tasks = {};

// Key CANNOT start with "ta" UNLESS it's an object.
tasks["darkmodeToggled"] = false;
tasks["navbarToggled"] = false;
tasks["listNameToggled"] = false;
tasks["listThemeToggled"] = false;
tasks["customThemeToggled"] = false;
tasks["background-blurred"] = false;
tasks["natureThemeToggled"] = false;
tasks["current-background"] = null;
tasks['current-blurr'] = null;
tasks['current-listItem-background'] = 'has-background-link-light';
tasks['current-listItem-color'] = 'has-text-info-dark';
tasks['currentAddColor'] = 'black';
tasks['currentClearColor'] = 'black';
tasks['currentListTitleColor'] = 'black';
tasks['has-theme'] = false;
tasks['colorlight'] = false;

function extractNum(str) {
    let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let filteredStr = '';
    for (let char of str){
      for (let num of nums){
        if (char === num){
          filteredStr += char;
        }
      }
    }
    return Number(filteredStr);
}

function print(...args){
    for(val of args){
        document.getElementById('debugger-text').innerHTML += ' ' + val;
    }
}

window.onload =  function(){
    let savedTasks = JSON.parse(localStorage.getItem('tasks'));
    
    if (savedTasks['darkmodeToggled']){
        document.getElementById('darkmode').click();
        // turnDark();
    }
    // tasks = savedTasks;

    // sets the previous theme
    document.getElementById('add').style.color = savedTasks['currentAddColor'];
    document.getElementById('clear').style.color = savedTasks['currentClearColor'];
    document.getElementById('list-title').style.color = savedTasks['currentListTitleColor'];

    document.getElementById('htm').classList.add(savedTasks['current-background']);
    document.getElementById('list-bg').classList.add(savedTasks['current-blurr']);

    tasks['current-background'] = savedTasks['current-background'];
    tasks['current-blurr'] = savedTasks['current-blurr'];

    tasks['currentAddColor'] = savedTasks['currentAddColor'];
    tasks['currentClearColor']= savedTasks['currentClearColor'];
    tasks['currentListTitleColor'] = savedTasks['currentListTitleColor'];

}


document.getElementById('add').addEventListener('click', function(){

    // Adds display control objects to the list item
    tasks[`task-${idNum}`] = {};
    tasks[`task-${idNum}`]["checked"] = false;
    tasks[`task-${idNum}`]["expanded"] = false;
    tasks[`task-${idNum}`]["is-set"] = false;
    tasks[`task-${idNum}`]['styles-open'] = false;

    tasks[`task-${idNum}`]['light-styles-open'] = false;
    tasks[`task-${idNum}`]['dark-styles-open'] = false;
    tasks[`task-${idNum}`]['custom-styles-open'] = false;

    tasks[`task-${idNum}`]['font-styles-open'] = false;

    tasks[`task-${idNum}`]["light-arrow-toggled"] = false;
    tasks[`task-${idNum}`]["dark-arrow-toggled"] = false;
    tasks[`task-${idNum}`]["gradient-arrow-toggled"] = false;
    tasks[`task-${idNum}`]["custom-arrow-toggled"] = false;



    tasks[`task-${idNum}`]['order-ratio'] = 0;

    tasks[`task-${idNum}`]["current-color"] = tasks['current-listItem-color'];
    tasks[`task-${idNum}`]["current-background"] = tasks['current-listItem-background'];
    tasks[`task-${idNum}`]["current-value"] = null;


    
    // Renders the HTML version of the list item in the page
    document.getElementById("main-content").insertAdjacentHTML("beforeend", `
    <div id="list-item-${idNum}" >
    <div class="${tasks['current-listItem-background']} ${tasks['current-listItem-color']} p-4 mt-4" id="${idNum}" name="list-item">

      <div class="checkbox space-between">

        <div style="width: 100%">
            <label class="checkbox">

                <input type="checkbox" id="check-${idNum}">
                <input id="input-${idNum}" class="input is-info ml-4 personalized-input text" type="text" placeholder="click here to enter text"
                 onfocus="this.style.color='#fffafac7'" style="background-color: #0000003b;">

                <p id="to-do-${idNum}" class="is-size-5 pl-4 mb-1 hidden"></p>

            </label>
        </div>
            <div class="checkbox" style="width: 50%; justify-content: flex-end;">
                <button id="set-${idNum}" class="button is-primary mr-4 ml-4">set</button>
                <!-- Edit button -->
                <img id="edit-${idNum}" src="Icons/icons8-edit-32.png" class="iconic mr-4 ml-4" alt="edit" style="opacity: 70%; display: none;">

                <!-- Style button -->
                <img id="style-${idNum}" src="Icons/icons8-paint-24.png" class="iconic mr-4" alt="edit" style="opacity: 70%; display: none;">

                <!-- Delete button -->
                <img id="bin-${idNum}" src="Icons/bin.png" class="iconic mr-4" alt="delete" style="opacity: 70%; display: none;">

                <!-- More options button -->
                <img id="more-${idNum}" src="Icons/more-options-icon-12.jpg" class="ml-4 iconic" style=" display:none;" alt="more">
            </div>
        </div>
        </div>

        <div class="${tasks['current-listItem-background']} ${tasks['current-listItem-color']} style noselect" id="styles-${idNum}" style="display: none;" name="list-style">
            <h2 class="is-size-4 ml-4 pt-3">Style</h2>
            <p id="tip" style="opacity: 60%;margin-left: 17px;margin-top: 10px;margin-bottom: 35px;font-size: 0.93rem;">
                Tip: press <b>shift + click</b> to apply the style to <b><i>all</i></b> list items 
            </p>

            <div class="block-${idNum}">
                <div class="flex pointer style-container" id="light-arrow-${idNum}">
                    <h2 class="is-size-5 link-text hover">Default colors</h2>
                    <i class="fas fa-chevron-up arrow-icon pointer rotate hover" id="light-arrow-q-${idNum}"></i>
                </div>
                <div class="styles-container noselect" style="display: none; " id="q-${idNum}">

                    <h3 unselectable="on" name="light" id="zzz-${idNum}" class="has-text-purple has-background-purple-light is-size-5 style-block darkblue-border pointer">Abc</h3>
                    <h3 unselectable="on" name="light" id="xxx-${idNum}" class="has-text-orange has-background-orange is-size-5 style-block primary-border pointer">Abc</h3>
                    <h3 unselectable="on" name="light" id="ccc-${idNum}" class="has-text-irish-green has-background-irish is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" name="light" id="vvv-${idNum}" class="has-text-pink has-background-pink is-size-5 style-block pointer">Abc</h3>

                    <h3 unselectable="on" name="light" id="red-${idNum}" class="has-text-danger has-background-danger-light is-size-5 style-block red-border pointer">Abc</h3>
                    <h3 unselectable="on" name="light" id="yel-${idNum}" class="has-text-warning-dark has-background-warning-light is-size-5 style-block yellow-border pointer">Abc</h3>
                    <h3 unselectable="on" name="light" id="gre-${idNum}" class="has-text-success has-background-success-light is-size-5 style-block green-border pointer">Abc</h3>
                    <h3 unselectable="on" name="light" id="blu-${idNum}" class="has-text-info has-background-info-light is-size-5 style-block blue-border pointer">Abc</h3>
     
                    <h3 unselectable="on" name="light" id="dar-${idNum}" class="has-text-link has-background-link-light is-size-5 style-block darkblue-border pointer">Abc</h3>
                    <h3 unselectable="on" name="light" id="pri-${idNum}" class="has-text-primary has-background-primary-light is-size-5 style-block primary-border pointer">Abc</h3>
                    <h3 unselectable="on" name="light" id="q1q-${idNum}" class="has-text-rouge has-background-rouge is-size-5 style-block darkblue-border pointer">Abc</h3>
                    <h3 unselectable="on" name="light" id="w2w-${idNum}" class="has-text-bluey has-background-bluey is-size-5 style-block primary-border pointer">Abc</h3>
                </div>
            </div>
            <div class="block-${idNum}">
                <div class="flex pointer style-container" id="dark-arrow-${idNum}">
                    <h2 class="is-size-5 link-text hover">Rainbow colors</h2>
                    <i class="fas fa-chevron-up arrow-icon pointer rotate hover" id="dark-arrow-q-${idNum}"></i>
                </div>
                <div class="styles-container noselect" style="display: none;" id="k-${idNum}">
                    <h3 unselectable="on" id="inf-${idNum}" class="has-text-white has-background-info-dark is-size-5 style-block darkblue-border pointer">Abc</h3>
                    <h3 unselectable="on" style="border-color: transparent;" id="suc-${idNum}" class="has-text-white has-background-success-dark is-size-5 style-block primary-border pointer">Abc</h3>
                    <h3 unselectable="on" id="war-${idNum}" class="has-text-white has-background-warning-dark is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="dan-${idNum}" class="has-text-white has-background-danger-dark is-size-5 style-block pointer">Abc</h3>

                    <h3 unselectable="on" id="aaa-${idNum}" class="has-text-white has-background-darker-gray is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="sss-${idNum}" class="has-text-white has-background-grey is-size-5 style-block darkblue-border pointer">Abc</h3>
                    <h3 unselectable="on" id="ddd-${idNum}" class="has-text-azure has-background-grey-light is-size-5 style-block primary-border pointer">Abc</h3>
                    <h3 unselectable="on" id="fff-${idNum}" class="has-text-black has-background-white is-size-5 style-block pointer">Abc</h3>

                    <h3 unselectable="on" id="pid-${idNum}" class="has-text-white has-background-primary-dark is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="noy-${idNum}" class="has-text-white has-background-link-dark is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="pur-${idNum}" class="has-text-white has-background-purple is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="pot-${idNum}" class="has-text-white has-background-green is-size-5 style-block pointer">Abc</h3>

                    <h3 unselectable="on" id="trt-${idNum}" class="a has-text-white  is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="rer-${idNum}" class="b has-text-white  is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="ewe-${idNum}" class="c has-text-white  is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="wqw-${idNum}" class="d has-text-white  is-size-5 style-block pointer">Abc</h3>
 
                    <h3 unselectable="on" id="hgh-${idNum}" class="e has-text-white  is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="gfg-${idNum}" style="border-color: transparent;" class="f has-text-white  is-size-5 style-block darkblue-border pointer">Abc</h3>
                    <h3 unselectable="on" id="fdf-${idNum}" style="border-color: transparent;" class="g has-text-white  is-size-5 style-block primary-border pointer">Abc</h3>
                    <h3 unselectable="on" id="dsd-${idNum}" class="h has-text-white  is-size-5 style-block pointer">Abc</h3>
 
                    <h3 unselectable="on" id="sas-${idNum}" class="i has-text-white  is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="mnm-${idNum}" class="j has-text-white  is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="nbn-${idNum}" class="k has-text-white  is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="bvb-${idNum}" class="l has-text-white  is-size-5 style-block pointer">Abc</h3>
 
                    <h3 unselectable="on" id="vcv-${idNum}" class="m has-text-grey  is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="cxc-${idNum}" style="border-color: transparent;" class="n has-text-white  is-size-5 style-block darkblue-border pointer">Abc</h3>
                    <h3 unselectable="on" id="xzx-${idNum}" style="border-color: transparent;" class="o has-text-white  is-size-5 style-block primary-border pointer">Abc</h3>
                    <h3 unselectable="on" id="aqa-${idNum}" class="p has-text-white  is-size-5 style-block pointer">Abc</h3>
 
                    <h3 unselectable="on" id="sws-${idNum}" class="q has-text-white  is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="ded-${idNum}" class="r has-text-white  is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="frf-${idNum}" class="s has-text-white  is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="lol-${idNum}" class="t has-text-white  is-size-5 style-block pointer">Abc</h3>
 
                </div>
            </div>
            <div class="block-${idNum}">
                  <div class="flex pointer style-container" id="gradient-arrow-${idNum}">
                      <h2 class="is-size-5 link-text hover">Gradient colors</h2>
                      <i class="fas fa-chevron-up arrow-icon pointer rotate hover" id="gradient-arrow-q-${idNum}"></i>
                  </div>
                <div class="styles-container noselect" style="display: none;" id="g-${idNum}">
                    <h3 unselectable="on" id="100-${idNum}" class="has-text-white gradient-1 is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="101-${idNum}" class="has-text-white gradient-2 is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="102-${idNum}" class="has-text-white gradient-3 is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="103-${idNum}" class="has-text-white gradient-4 is-size-5 style-block pointer">Abc</h3>

                    <h3 unselectable="on" id="104-${idNum}" class="has-text-white gradient-5 is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="105-${idNum}" class="has-text-white gradient-6 is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="106-${idNum}" class="has-text-white gradient-7 is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="107-${idNum}" class="has-text-white gradient-8 is-size-5 style-block pointer">Abc</h3>

                    <h3 unselectable="on" id="108-${idNum}" class="has-text-white gradient-9 is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="109-${idNum}" class="has-text-white gradient-10 is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="110-${idNum}" class="has-text-white gradient-11 is-size-5 style-block pointer">Abc</h3>
                    <h3 unselectable="on" id="111-${idNum}" class="has-text-white gradient-12 is-size-5 style-block pointer">Abc</h3>
                </div>
            </div>



            <div style="display: flex; flex-direction: column;"
            <hr>
                <div class="flex pointer style-container" id="custom-arrow-${idNum}">
                    <h2 class="is-size-5 link-text hover">Custom</h2>
                    <i class="fas fa-chevron-up arrow-icon pointer rotate hover" id="custom-arrow-q-${idNum}"></i>
                </div>
                
                <div style="display: flex; justify-content: flex-start; margin-left: 30px; margin-bottom: 30px">
                    <div style="display: none; flex-direction: column;" id="c-${idNum}"
                        <div class="flex">
                        <div class="flex custom-container">
                            <label for="txt" class="is-size-5 pb-1">Text Color: </label>
                            <input type="color" class="pointer" id="txt-${idNum}" name="txt" value="#424fff">
                        </div>
                        <div class="flex custom-container">
                            <label for="bg" class="is-size-5 pb-1">Background Color: </label>
                            <input type="color" class="pointer" id="bg-${idNum}" name="bg" value="#c4cae3">
                        </div>
                        <div class="flex custom-container" style="margin-top: 0;">
                            <button id="custom-${idNum}" class="button is-primary pointer" style="margin: 10px 10px;">Apply</button>
                            <button id="aply-to-all-${idNum}" class="button is-primary pointer" style="margin: 10px 10px;">Apply to all</button>
                        </div>
                    </div>
                </div>
            </div>
            


        </div>

    </div>
    </div>
    `);


    document.getElementById(`light-arrow-${idNum}`).addEventListener('click', function(){
        
        if (tasks[`task-${extractNum(this.id)}`]["light-arrow-toggled"] === false){

            document.getElementById(`q-${extractNum(this.id)}`).style.display = 'grid';
            document.getElementById(`light-arrow-q-${extractNum(this.id)}`).style.transform = 'rotate(0deg)';
            tasks[`task-${extractNum(this.id)}`]["light-arrow-toggled"] = true;
            
        } else {

            document.getElementById(`q-${extractNum(this.id)}`).style.display = 'none';
            document.getElementById(`light-arrow-q-${extractNum(this.id)}`).style.transform = 'rotate(-180deg)';
            tasks[`task-${extractNum(this.id)}`]["light-arrow-toggled"] = false;

        }
    });

    document.getElementById(`dark-arrow-${idNum}`).addEventListener('click', function(){

        if (tasks[`task-${extractNum(this.id)}`]["dark-arrow-toggled"] === false){

            document.getElementById(`k-${extractNum(this.id)}`).style.display = 'grid';
            document.getElementById(`dark-arrow-q-${extractNum(this.id)}`).style.transform = 'rotate(0deg)';
            tasks[`task-${extractNum(this.id)}`]["dark-arrow-toggled"] = true;

        } else {

            document.getElementById(`k-${extractNum(this.id)}`).style.display = 'none';
            document.getElementById(`dark-arrow-q-${extractNum(this.id)}`).style.transform = 'rotate(-180deg)';
            tasks[`task-${extractNum(this.id)}`]["dark-arrow-toggled"] = false;

        }
    });
    
    // Todo: add event listeners here
    document.getElementById(`gradient-arrow-${idNum}`).addEventListener('click', function(){

        if (tasks[`task-${extractNum(this.id)}`]["gradient-arrow-toggled"] === false){

            document.getElementById(`g-${extractNum(this.id)}`).style.display = 'grid';
            document.getElementById(`gradient-arrow-q-${extractNum(this.id)}`).style.transform = 'rotate(0deg)';
            tasks[`task-${extractNum(this.id)}`]["gradient-arrow-toggled"] = true;
            
        } else {

            document.getElementById(`g-${extractNum(this.id)}`).style.display = 'none';
            document.getElementById(`gradient-arrow-q-${extractNum(this.id)}`).style.transform = 'rotate(-180deg)';
            tasks[`task-${extractNum(this.id)}`]["gradient-arrow-toggled"] = false;

        }

    });

    document.getElementById(`custom-arrow-${idNum}`).addEventListener('click', function(){

        if (tasks[`task-${extractNum(this.id)}`]["custom-arrow-toggled"] === false){

            document.getElementById(`c-${extractNum(this.id)}`).style.display = 'block';
            document.getElementById(`custom-arrow-q-${extractNum(this.id)}`).style.transform = 'rotate(0deg)';
            tasks[`task-${extractNum(this.id)}`]["custom-arrow-toggled"] = true;

        } else {

            document.getElementById(`c-${extractNum(this.id)}`).style.display = 'none';
            document.getElementById(`custom-arrow-q-${extractNum(this.id)}`).style.transform = 'rotate(-180deg)';
            tasks[`task-${extractNum(this.id)}`]["custom-arrow-toggled"] = false;

        }

    });

    // Apply flexbox order number for ordering features
    document.getElementById(`list-item-${idNum}`).style.order = String(idNum);

    // function to help set styles
    function addStyles(evt){

        // Gets hold of styled classes, trim them, wash them with soap, make'em ready to be updated.
        let elementClassList = String(document.getElementById(`${evt.currentTarget.idNumber}`).classList).split(' ');
        let stylesClassList = String(document.getElementById(`${evt.currentTarget.idNumber}`).classList).split(' ');
        let currentTextColor = elementClassList[0];
        let currentBg = elementClassList[1];
        let currentStyleSectionTextColor = stylesClassList[0];
        let currentStyleSectionBg = stylesClassList[1];
        
        function applyColors() {
            // Try to re move classes, then add them
            try {
                // Removes trimmed classes
                document.getElementById(`${evt.currentTarget.idNumber}`).classList.remove(currentTextColor);
                document.getElementById(`${evt.currentTarget.idNumber}`).classList.remove(currentBg);
                document.getElementById(`styles-${evt.currentTarget.idNumber}`).classList.remove(currentStyleSectionTextColor);
                document.getElementById(`styles-${evt.currentTarget.idNumber}`).classList.remove(currentStyleSectionBg);

                // Applies new styles
                document.getElementById(`${evt.currentTarget.idNumber}`).classList.add(evt.currentTarget.textColor);
                document.getElementById(`${evt.currentTarget.idNumber}`).classList.add(evt.currentTarget.bgColor);
                document.getElementById(`styles-${evt.currentTarget.idNumber}`).classList.add(evt.currentTarget.textColor);
                document.getElementById(`styles-${evt.currentTarget.idNumber}`).classList.add(evt.currentTarget.bgColor);
            } catch(err){
                // if it doesn't work, just try to add them
                document.getElementById(`${evt.currentTarget.idNumber}`).classList.add(evt.currentTarget.textColor);
                document.getElementById(`${evt.currentTarget.idNumber}`).classList.add(evt.currentTarget.bgColor);
                document.getElementById(`styles-${evt.currentTarget.idNumber}`).classList.add(evt.currentTarget.textColor);
                document.getElementById(`styles-${evt.currentTarget.idNumber}`).classList.add(evt.currentTarget.bgColor);

            }
            tasks['current-listItem-background'] = evt.currentTarget.bgColor;
            tasks['current-listItem-color'] = evt.currentTarget.textColor;      
            
            // Removes custom styles if any
         
                document.getElementById(`${evt.currentTarget.idNumber}`).style.removeProperty('background-color');
                document.getElementById(`${evt.currentTarget.idNumber}`).style.removeProperty('color');
                document.getElementById(`styles-${evt.currentTarget.idNumber}`).style.removeProperty('background-color');
                document.getElementById(`styles-${evt.currentTarget.idNumber}`).style.removeProperty('color');
            
        }
        for(let i = 0; i < 10; i++){
            applyColors();
        }
        
        // Prevents padding and margins from disappearing (for whatever reason they do)
        document.getElementById(`${evt.currentTarget.idNumber}`).style.padding = '16px';
        document.getElementById(`${evt.currentTarget.idNumber}`).style.borderColor = 'transparent';
        document.getElementById(`styles-${evt.currentTarget.idNumber}`).style.borderColor = 'transparent';
        document.getElementById(`${evt.currentTarget.idNumber}`).style.marginTop = '16px';

        if (evt.shiftKey){
            
            for (let listItem of document.getElementsByName('list-item')){
             
                    listItem.style.removeProperty('background-color');
                    listItem.style.removeProperty('color');
             
                
                let elementClassList = String(listItem.classList).split(' ');
                let currentTextColor = elementClassList[0];
                let currentBg = elementClassList[1];
                try {
                    // Removes trimmed classes
                    listItem.classList.remove(currentTextColor);
                    listItem.classList.remove(currentBg);
    
                    // Applies new styles
                    listItem.classList.add(evt.currentTarget.textColor);
                    listItem.classList.add(evt.currentTarget.bgColor);
                } catch(err){
                    // if it doesn't work, just try to add them
                    listItem.classList.add(evt.currentTarget.textColor);
                    listItem.classList.add(evt.currentTarget.bgColor);
                }
                listItem.style.padding = '16px';
                listItem.style.borderColor = 'transparent';
                listItem.style.marginTop = '16px';
            }
            for (let listSyleItem of document.getElementsByName('list-style')){

                    listSyleItem.style.removeProperty('background-color');
                    listSyleItem.style.removeProperty('color');
                 
                let elementClassList = String(listSyleItem.classList).split(' ');
                let currentTextColor = elementClassList[0];
                let currentBg = elementClassList[1];
                try {
                    // Removes trimmed classes
                    listSyleItem.classList.remove(currentTextColor);
                    listSyleItem.classList.remove(currentBg);
    
                    // Applies new styles
                    listSyleItem.classList.add(evt.currentTarget.textColor);
                    listSyleItem.classList.add(evt.currentTarget.bgColor);
                } catch(err){
                    // if it doesn't work, just try to add them
                    listSyleItem.classList.add(evt.currentTarget.textColor);
                    listSyleItem.classList.add(evt.currentTarget.bgColor);
                }
            }
        }
    }
    // End of addStyles()

    document.getElementById(`${idNum}`).style.borderColor = 'transparent';
    document.getElementById(`styles-${idNum}`).style.borderColor = 'transparent';

    function addCustomStyle(){
        // Gets hold of styled classes, trim them, wash them with soap, make'em ready to be updated.
        let elementClassList = String(document.getElementById(`${extractNum(this.id)}`).classList).split(' ');
        let stylesClassList = String(document.getElementById(`${extractNum(this.id)}`).classList).split(' ');
        let currentTextColor = elementClassList[0];
        let currentBg = elementClassList[1];
        let currentStyleSectionTextColor = stylesClassList[0];
        let currentStyleSectionBg = stylesClassList[1];

        // Removes trimmed classes
        try {
            document.getElementById(`${extractNum(this.id)}`).classList.remove(currentTextColor);
            document.getElementById(`${extractNum(this.id)}`).classList.remove(currentBg);
            document.getElementById(`styles-${extractNum(this.id)}`).classList.remove(currentStyleSectionTextColor);
            document.getElementById(`styles-${extractNum(this.id)}`).classList.remove(currentStyleSectionBg);
        } catch(err){
            // do nothing
        }

        document.getElementById(`${extractNum(this.id)}`).style.color = document.getElementById(`txt-${extractNum(this.id)}`).value;
        document.getElementById(`${extractNum(this.id)}`).style.backgroundColor = document.getElementById(`bg-${extractNum(this.id)}`).value;
        document.getElementById(`styles-${extractNum(this.id)}`).style.color = document.getElementById(`txt-${extractNum(this.id)}`).value;
        document.getElementById(`styles-${extractNum(this.id)}`).style.backgroundColor = document.getElementById(`bg-${extractNum(this.id)}`).value;

        document.getElementById(`${extractNum(this.id)}`).style.padding = '16px';
        document.getElementById(`${extractNum(this.id)}`).style.border = 'none';
        document.getElementById(`styles-${extractNum(this.id)}`).style.border = 'none'; 
        document.getElementById(`${extractNum(this.id)}`).style.marginTop = '16px';
    }
    function addToAll(){
        for (let listItem of document.getElementsByName('list-item')){
            let elementClassList = String(listItem.classList).split(' ');
            let currentTextColor = elementClassList[0];
            let currentBg = elementClassList[1];
            try {
                // Removes trimmed classes
                listItem.classList.remove(currentTextColor);
                listItem.classList.remove(currentBg);

            } catch(err){
            }
            listItem.style.backgroundColor = document.getElementById(`bg-${extractNum(this.id)}`).value;
            listItem.style.color = document.getElementById(`txt-${extractNum(this.id)}`).value;

            listItem.style.padding = '16px';
            listItem.style.border = 'none';
            listItem.style.border = 'none';
            listItem.style.marginTop = '16px';

        }
        for (let listSyleItem of document.getElementsByName('list-style')){
            let elementClassList = String(listSyleItem.classList).split(' ');
            let currentTextColor = elementClassList[0];
            let currentBg = elementClassList[1];
            try {
                // Removes trimmed classes
                listSyleItem.classList.remove(currentTextColor);
                listSyleItem.classList.remove(currentBg);

            } catch(err){
            }
            listSyleItem.style.backgroundColor = document.getElementById(`bg-${extractNum(this.id)}`).value;
            listSyleItem.style.color = document.getElementById(`txt-${extractNum(this.id)}`).value;

            listSyleItem.style.padding = '8px';
            listSyleItem.style.border = 'none';
            listSyleItem.style.border = 'none';

        }
    }
    
   
    document.getElementById(`custom-${idNum}`).addEventListener('click', addCustomStyle);
    document.getElementById(`aply-to-all-${idNum}`).addEventListener('click', addToAll)
    
    function helperAdd(name, color, background){
        document.getElementById(`${name}-${idNum}`).addEventListener('click', addStyles);
        document.getElementById(`${name}-${idNum}`).idNumber = idNum;
        document.getElementById(`${name}-${idNum}`).textColor = color;
        document.getElementById(`${name}-${idNum}`).bgColor = background;
        if (document.getElementById(`${name}-${idNum}`).name !== 'light'){
            tasks['colorlight'] = true;
        } else{
            tasks['colorlight'] = false;
        }
    }
   

    // Styles
    helperAdd('red', 'has-text-danger', 'has-background-danger-light');
    helperAdd('yel', 'has-text-warning-dark', 'has-background-warning-light');
    helperAdd('gre', 'has-text-success', 'has-background-success-light');
    helperAdd('red', 'has-text-danger', 'has-background-danger-light');
    helperAdd('blu', 'has-text-info', 'has-background-info-light');
    helperAdd('dar', 'has-text-link', 'has-background-link-light');
    helperAdd('pri', 'has-text-primary', 'has-background-primary-light');
    helperAdd('pid', 'has-text-white', 'has-background-primary-dark');
    helperAdd('noy', 'has-text-white', 'has-background-link-dark');
    helperAdd('inf', 'has-text-white', 'has-background-info-dark');
    helperAdd('suc', 'has-text-white', 'has-background-success-dark');
    helperAdd('war', 'has-text-white', 'has-background-warning-dark');
    helperAdd('dan', 'has-text-white', 'has-background-danger-dark');
    helperAdd('zzz', 'has-text-purple', 'has-background-purple-light');
    helperAdd('xxx', 'has-text-orange', 'has-background-orange');
    helperAdd('ccc', 'has-text-irish-green', 'has-background-irish');
    helperAdd('vvv', 'has-text-pink', 'has-background-pink');
    helperAdd('aaa', 'has-text-white', 'has-background-darker-gray');
    helperAdd('sss', 'has-text-white', 'has-background-grey');
    helperAdd('ddd', 'has-text-azure', 'has-background-grey-light');
    helperAdd('fff', 'has-text-black', 'has-background-white');
    helperAdd('q1q', 'has-text-rouge', 'has-background-rouge');
    helperAdd('w2w', 'has-text-bluey', 'has-background-bluey');
    helperAdd('pur', 'has-text-white', 'has-background-purple');
    helperAdd('pot', 'has-text-white', 'has-background-green');
    helperAdd('trt', 'has-text-white', 'a');
    helperAdd('rer', 'has-text-white', 'b');
    helperAdd('ewe', 'has-text-white', 'c');
    helperAdd('wqw', 'has-text-white', 'd');
    helperAdd('hgh', 'has-text-white', 'e');
    helperAdd('gfg', 'has-text-white', 'f');
    helperAdd('fdf', 'has-text-white', 'g');
    helperAdd('dsd', 'has-text-white', 'h');
    helperAdd('sas', 'has-text-white', 'i');
    helperAdd('mnm', 'has-text-white', 'j');
    helperAdd('nbn', 'has-text-white', 'k');
    helperAdd('bvb', 'has-text-white', 'l');
    helperAdd('vcv', 'has-text-white', 'm');
    helperAdd('cxc', 'has-text-white', 'n');
    helperAdd('xzx', 'has-text-white', 'o');
    helperAdd('aqa', 'has-text-white', 'p');
    helperAdd('sws', 'has-text-white', 'q');
    helperAdd('ded', 'has-text-white', 'r');
    helperAdd('frf', 'has-text-white', 's');
    helperAdd('lol', 'has-text-white', 't');
    helperAdd('100', 'has-text-white', 'gradient-1');
    helperAdd('101', 'has-text-white', 'gradient-2');
    helperAdd('102', 'has-text-white', 'gradient-3');
    helperAdd('103', 'has-text-white', 'gradient-4');
    helperAdd('104', 'has-text-white', 'gradient-5');
    helperAdd('105', 'has-text-white', 'gradient-6');
    helperAdd('106', 'has-text-white', 'gradient-7');
    helperAdd('107', 'has-text-white', 'gradient-8');
    helperAdd('108', 'has-text-white', 'gradient-9');
    helperAdd('109', 'has-text-white', 'gradient-10');
    helperAdd('110', 'has-text-white', 'gradient-11');
    helperAdd('111', 'has-text-white', 'gradient-12');

    // Get the input field
    var input = document.getElementById(`input-${idNum}`);
    var btn = document.getElementById(`set-${idNum}`);

    // Sets into the list
    btn.addEventListener('click', function(){
        // Trigger the button element with a click
        const inputVal = document.getElementById(`input-${extractNum(this.id)}`).value;
        tasks[`task-${extractNum(this.id)}`]["current-value"] = inputVal;
        document.getElementById(`to-do-${extractNum(this.id)}`).innerHTML = String(inputVal);

        document.getElementById(`to-do-${extractNum(this.id)}`).style.display = 'block';
        document.getElementById(`input-${extractNum(this.id)}`).style.display = 'none';
        document.getElementById(`set-${extractNum(this.id)}`).style.display = 'none';

        document.getElementById(extractNum(this.id)).addEventListener('mouseover', function(){
            document.getElementById(`more-${extractNum(this.id)}`).style.display = 'block';
        });
        document.getElementById(extractNum(this.id)).addEventListener('mouseout', function(){
            document.getElementById(`more-${extractNum(this.id)}`).style.display = 'none';
        });
        document.getElementById(`styles-${extractNum(this.id)}`).addEventListener('mouseover', function(){
            document.getElementById(`more-${extractNum(this.id)}`).style.display = 'block';
        });
        document.getElementById(`styles-${extractNum(this.id)}`).addEventListener('mouseout', function(){
            document.getElementById(`more-${extractNum(this.id)}`).style.display = 'none';
        });

    });

    
    // Delete functionality
    function Delete(){
        document.getElementById(`${extractNum(this.id)}`).remove();
        document.getElementById(`styles-${extractNum(this.id)}`).remove();
    }
    document.getElementById(`bin-${idNum}`).addEventListener('click', Delete);
    
    // Edit functionality
    function edit(){
        document.getElementById(`to-do-${extractNum(this.id)}`).style.display = 'none';
        document.getElementById(`input-${extractNum(this.id)}`).style.display = 'block';
        document.getElementById(`set-${extractNum(this.id)}`).style.display = 'block';

        document.getElementById(`edit-${extractNum(this.id)}`).style.display = 'none';
        document.getElementById(`style-${extractNum(this.id)}`).style.display = 'none';
        document.getElementById(`bin-${extractNum(this.id)}`).style.display = 'none';
        document.getElementById(`more-${extractNum(this.id)}`).style.display = 'none';
        document.getElementById(`styles-${extractNum(this.id)}`).style.display = 'none';

        tasks[`task-${extractNum(this.id)}`]["expanded"] = false;
        tasks[`task-${extractNum(this.id)}`]["styles-open"] = false;
    }
    document.getElementById(`edit-${idNum}`).addEventListener('click', edit);

    // Open styles
    function openStyles(){
        if (tasks[`task-${extractNum(this.id)}`]['styles-open'] === false){
            document.getElementById(`styles-${extractNum(this.id)}`).style.display = 'block';

            tasks[`task-${extractNum(this.id)}`]['styles-open'] = true;
        } else {
            document.getElementById(`styles-${extractNum(this.id)}`).style.display = 'none';

            tasks[`task-${extractNum(this.id)}`]['styles-open'] = false;
        }
    }
    document.getElementById(`style-${idNum}`).addEventListener('click', openStyles);

    // Show More functionality
    function showMore(){
        if (tasks[`task-${extractNum(this.id)}`]["expanded"] === false){
            document.getElementById(`edit-${extractNum(this.id)}`).style.display = 'block';
            document.getElementById(`style-${extractNum(this.id)}`).style.display = 'block';
            document.getElementById(`bin-${extractNum(this.id)}`).style.display = 'block';
            if (screen.width < 600){
                document.getElementById(`to-do-${extractNum(this.id)}`).style.display = 'none';
            }
            // document.getElementById(`up-${extractNum(this.id)}`).style.display = 'block';
            // document.getElementById(`down-${extractNum(this.id)}`).style.display = 'block';


            tasks[`task-${extractNum(this.id)}`]["expanded"] = true;
        } else {
            document.getElementById(`edit-${extractNum(this.id)}`).style.display = 'none';
            document.getElementById(`style-${extractNum(this.id)}`).style.display = 'none';
            document.getElementById(`bin-${extractNum(this.id)}`).style.display = 'none';
            document.getElementById(`styles-${extractNum(this.id)}`).style.display = 'none';
            // document.getElementById(`up-${extractNum(this.id)}`).style.display = 'none';
            // document.getElementById(`down-${extractNum(this.id)}`).style.display = 'none';

            if (screen.width < 600){
                document.getElementById(`to-do-${extractNum(this.id)}`).style.display = 'block';
            }
 
            tasks[`task-${extractNum(this.id)}`]["styles-open"] = false;
            tasks[`task-${extractNum(this.id)}`]["expanded"] = false;
        }
    }
    document.getElementById(`more-${idNum}`).addEventListener('click', showMore);

    // Adds item to the list when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();

            const inputVal = document.getElementById(`input-${extractNum(this.id)}`).value;
            tasks[`task-${extractNum(this.id)}`]["current-value"] = inputVal;
            document.getElementById(`to-do-${extractNum(this.id)}`).innerHTML = String(inputVal);

            document.getElementById(`to-do-${extractNum(this.id)}`).style.display = 'block';
            document.getElementById(`input-${extractNum(this.id)}`).style.display = 'none';
            document.getElementById(`set-${extractNum(this.id)}`).style.display = 'none';

            document.getElementById(extractNum(this.id)).addEventListener('mouseover', function(){
                document.getElementById(`more-${extractNum(this.id)}`).style.display = 'block';
            });
            document.getElementById(extractNum(this.id)).addEventListener('mouseout', function(){
                document.getElementById(`more-${extractNum(this.id)}`).style.display = 'none';
            })
            
        }
    });

    // Crosses or uncrosses text when task is done
    document.getElementById(`check-${idNum}`).addEventListener('click', function(){
        if (tasks[`task-${extractNum(this.id)}`]["checked"] === false){
            document.getElementById(`to-do-${extractNum(this.id)}`).style.textDecoration = 'line-through';
            tasks[`task-${extractNum(this.id)}`]["checked"] = true;
        } else {
            document.getElementById(`to-do-${extractNum(this.id)}`).style.textDecoration = 'none';
            tasks[`task-${extractNum(this.id)}`]["checked"] = false;
        }
    });

    idNum++;
});
// End of add function

// clear all items functionality
document.getElementById('clear').addEventListener('click', function(){
    function clear(){
        while (document.getElementById('main-content').children.length !== 0){
            let list = document.getElementById('main-content').children;
            for (let item of list){
               item.remove();
            }
        }
    }
    if (document.getElementById('main-content').children.length !== 0){
        document.getElementsByClassName('popup')[0].style.display = 'block';
        document.getElementById('yes').addEventListener('click', function(){
            clear();
            document.getElementsByClassName('popup')[0].style.display = 'none';
        });
        document.getElementById('no').addEventListener('click', function(){
            document.getElementsByClassName('popup')[0].style.display = 'none';
        });
    }
});

// darkmode feature
function turnDark(){
    if (tasks["darkmodeToggled"] === false){
        document.getElementById('htm').style.backgroundColor = 'rgb(26, 26, 26)';
        document.getElementsByClassName('navbar')[0].style.backgroundColor = 'rgb(13 13 13)';
        for (let listItem of document.getElementsByClassName('nav-item')){
            listItem.style.backgroundColor = 'rgb(42 45 48 / 90%)';
        }
        document.getElementsByTagName('body')[0].style.color = '#e2e2e2';
        document.getElementsByClassName('container')[0].style.backgroundColor = 'rgb(246 242 255 / 1%)';
        
        if (!tasks['has-theme']){
            document.getElementById('add').style.color = 'white';
            document.getElementById('clear').style.color = 'white';
            document.getElementsByClassName('title')[0].style.color = '#e2e2e2';
        }

        tasks["darkmodeToggled"] = true;
        
        tasks['currentAddColor'] = 'white';
        tasks['currentClearColor'] = 'white';
        tasks['currentListTitleColor'] = 'white';

    } else {
        document.getElementById('htm').style.backgroundColor = '#fff';
        document.getElementsByClassName('navbar')[0].style.backgroundColor = 'rgb(242 242 242)';

        for (let listItem of document.getElementsByClassName('nav-item')){
            listItem.style.backgroundColor = 'rgb(210 220 235 / 90%)';
        }

        document.getElementsByTagName('body')[0].style.color = '#4a4a4a';
        document.getElementsByClassName('container')[0].style.backgroundColor = 'rgb(246 242 255 / 34%)';

        if (!tasks['has-theme']){
            document.getElementById('add').style.color = 'black';
            document.getElementById('clear').style.color = 'black';
            document.getElementsByClassName('title')[0].style.color = '#4a4a4a';
        }

        tasks["darkmodeToggled"] = false;

        tasks['currentAddColor'] = 'black';
        tasks['currentClearColor'] = 'black';
        tasks['currentListTitleColor'] = 'black';

    }
    
}

document.getElementById('darkmode').addEventListener('click', turnDark);

// Navbar expand feature
document.getElementById('settings').addEventListener('click', function(){
    if (tasks["navbarToggled"] === false){
        document.getElementsByClassName('features-container')[0].style.display = 'block';
        
        // Responsiveness for mobile
        if (screen.width < 500){
            if (screen.width < 350){
                document.getElementsByClassName('navbar')[0].style.width = '20rem';
            } else {
                document.getElementsByClassName('navbar')[0].style.width = '22rem';
            }
            document.getElementsByClassName('container')[0].style.display ='none';
            document.getElementById('footer').style.display ='none';

        } else {
            document.getElementsByClassName('navbar')[0].style.width = '25rem';
        }


        tasks["navbarToggled"] = true;
    } else {
        let rotateButtonsList = document.getElementsByClassName('rotate');

        document.getElementsByClassName('features-container')[0].style.display = 'none';
        document.getElementsByClassName('navbar')[0].style.width = '3.6rem';
        document.getElementsByClassName('container')[0].style.display ='block';
        document.getElementById('footer').style.display ='block';

        tasks["navbarToggled"] = false;
    }
});

// show more list name func
function toggle0(){
    
    if (tasks["listNameToggled"] === false){
        document.getElementById('list-name').style.display = 'block';
        document.getElementById('arr-1').style.transform = 'rotate(0deg)';
        tasks["listNameToggled"] = true;
    } else {
        document.getElementById('list-name').style.display = 'none';
        document.getElementById('arr-1').style.transform = 'rotate(-180deg)';
        tasks["listNameToggled"] = false;
    }
    
}
// show list theme func
function toggle1(){
    
    if (tasks["listThemeToggled"] === false){
        document.getElementById('no-theme').style.display = 'block';
        document.getElementById('canada-theme').style.display = 'block';
        document.getElementById('moon-theme').style.display = 'block';
        document.getElementById('mountain-theme').style.display = 'block';
        document.getElementById('beach-theme').style.display = 'block';
        document.getElementById('norway-theme').style.display = 'block';
        document.getElementById('boat-theme').style.display = 'block';
        document.getElementById('sunset-theme').style.display = 'block';
        document.getElementById('shrek-theme').style.display = 'block';
        document.getElementById('forest-theme').style.display = 'block';

        document.getElementById('nature-themes').style.display = 'flex';

        document.getElementById('arr-2').style.transform = 'rotate(0deg)';
        tasks["listThemeToggled"] = true;
    } else {
        document.getElementById('no-theme').style.display = 'none';
        document.getElementById('canada-theme').style.display = 'none';
        document.getElementById('moon-theme').style.display = 'none';
        document.getElementById('mountain-theme').style.display = 'none';
        document.getElementById('beach-theme').style.display = 'none';
        document.getElementById('norway-theme').style.display = 'none';
        document.getElementById('shrek-theme').style.display = 'none';
        document.getElementById('forest-theme').style.display = 'none';
        document.getElementById('sunset-theme').style.display = 'none';
        document.getElementById('boat-theme').style.display = 'none';

        document.getElementById('nature-themes').style.display = 'none';

        document.getElementById('arr-2').style.transform = 'rotate(-180deg)';

        tasks["listThemeToggled"] = false;
    }
}

function toggleCustonTheme(){
    if (tasks["customThemeToggled"] === false){
        document.querySelector('.upload-content').style.display = 'block';
        document.getElementById('arr-4').style.transform = 'rotate(0deg)';
        tasks["customThemeToggled"] = true;
    } else {
        document.querySelector('.upload-content').style.display = 'none';
        document.getElementById('arr-4').style.transform = 'rotate(-180deg)';
        tasks["customThemeToggled"] = false;
    }
}

document.getElementsByClassName('rotate')[1].addEventListener('click', toggle1);
document.getElementsByClassName('rotate')[0].addEventListener('click', toggle0);
document.getElementById('arr-4').addEventListener('click', toggleCustonTheme);
document.getElementsByClassName('rotate')[2].addEventListener('click', function(){
    if (tasks["natureThemeToggled"] === false){
        document.getElementById('nature-pictures').style.display = 'block';
        document.getElementById('arr-3').style.transform = 'rotate(0deg)';
        tasks["natureThemeToggled"] = true;
    }
    else {
        document.getElementById('nature-pictures').style.display = 'none';
        document.getElementById('arr-3').style.transform = 'rotate(-180deg)';
        tasks["natureThemeToggled"] = false;
    }
})

// Add-theme function
function addTheme(e){
    // adds a class to html that contains the image
    document.getElementById(`htm`).classList.remove(tasks['current-background']);
    document.getElementById(`list-bg`).classList.remove(tasks['current-blurr']);

    document.getElementById('add').style.color = e.target.addColor;
    document.getElementById('clear').style.color = e.target.clearColor;
    document.getElementById('list-title').style.color = e.target.listTitleColor;

    document.getElementById('htm').classList.add(e.target.newBg);
    document.getElementById('list-bg').classList.add(e.target.newBlurr);

    tasks['current-background'] = e.target.newBg;
    tasks['current-blurr'] = e.target.newBlurr;

    tasks['currentAddColor'] = e.target.addColor;
    tasks['currentClearColor'] = e.target.clearColor;
    tasks['currentListTitleColor'] = e.target.listTitleColor;

    tasks['has-theme'] = true;
}

// Function to help set background
function addThemeHelper(theme, colorAdd, colorClear, colorTitle, background, blurr){
    document.getElementById(theme).addEventListener('click', addTheme);
    document.getElementById(theme).addColor = colorAdd;
    document.getElementById(theme).clearColor = colorClear;
    document.getElementById(theme).listTitleColor = colorTitle;
    document.getElementById(theme).newBg = background;
    document.getElementById(theme).newBlurr = blurr;
}

addThemeHelper('beach', 'black', 'black', 'black', 'has-background-beach', 'has-blurred-background');

addThemeHelper('canada', 'black', 'black', 'black', 'has-background-canada', 'has-blurred-background');

addThemeHelper('moon', 'white', 'white', 'white', 'has-background-moon', 'has-blurred-background');

addThemeHelper('mountain', 'white', 'white', 'black', 'has-background-mountain', 'has-blurred-background');

addThemeHelper('norway', 'white', 'white', 'white', 'has-background-norway', 'has-blurred-background');

addThemeHelper('boat', 'white', 'white', 'white', 'has-background-boat', 'has-blurred-background');

addThemeHelper('sunset', 'white', 'white', 'white', 'has-background-sunset', 'has-blurred-background');

addThemeHelper('shrek', 'white', 'white', 'white', 'has-background-shrek', 'has-blurred-background');

addThemeHelper('forest', 'black', 'black', 'black', 'has-background-forest', 'has-blurred-background');

document.getElementById('default').addEventListener('click', function(){
    document.getElementById(`htm`).classList.remove(tasks['current-background']);
    document.getElementById(`htm`).style.removeProperty('background');

    document.getElementById(`list-bg`).classList.remove(tasks['current-blurr']);
    
    if (tasks['darkmodeToggled']){
        document.getElementById('add').style.color = 'white';
        document.getElementById('clear').style.color = 'white';
        document.getElementById('list-title').style.color = 'white';
        tasks['currentAddColor'] = 'white';
        tasks['currentClearColor'] = 'white';
        tasks['currentListTitleColor'] = 'white';
    } else {
        document.getElementById('add').style.color = 'black';
        document.getElementById('clear').style.color = 'black';
        document.getElementById('list-title').style.color = 'black';
        tasks['currentAddColor'] = 'black';
        tasks['currentClearColor'] = 'black';
        tasks['currentListTitleColor'] = 'black';
    }
    tasks['has-theme'] = false;
    tasks["current-background"] = null;
    tasks['current-blurr'] = null;
});

// changes list title
document.getElementById('update-title').addEventListener('click', function(){
    let newTitle = document.getElementById('change-name').value;
    document.getElementById('list-title').innerHTML = newTitle;
});

// Saves progress
window.onbeforeunload = function(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('idNumber', idNum);

    let i = 0;
    for (let listItem of document.getElementById('main-content').children){
        localStorage.setItem(`list-item-${i}`, listItem.outerHTML);
        i++;
    }
    
};

// Custom theme file reading

function hideFilePopup(){
    document.getElementById('thePopup').style.display = 'none';
}
document.getElementById('deletronic').addEventListener('click', hideFilePopup, false)
const inputFile = document.querySelector('.file-input');

// image handler
inputFile.addEventListener('change', function(e){

    document.querySelector('.file-name').style.textDecoration = 'none';

    const fileList = inputFile.files;
    document.querySelector('.file-name').innerHTML = fileList[0]['name'];

    function imageOnlyFilter(){
        const acceptedTypes = ['image/png', 'image/jpeg']
        const fileType = fileList[0]['type'];
    
        for (let acceptedType of acceptedTypes){
            if(acceptedType === fileType){
                return true;
            };
        }
        return false;
    }
    if (!imageOnlyFilter()){
        // Means it's not a png or jpeg file
        document.getElementById('thePopup').style.display = 'flex';
        document.querySelector('.file-name').style.textDecoration = 'line-through';
    } else {
        document.getElementById('htm').classList.remove(document.getElementById('htm').classList[0]);
        document.getElementById('htm').classList.add('has-custom-background');
        
        const [file] = fileList;
        if (file) {
            document.getElementById('htm').style.background = `url(${URL.createObjectURL(file)}) no-repeat center center fixed` ;
        }
        console.log(fileList);
    }



}, false);
