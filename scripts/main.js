let idNum = 1;
let tasks = {};

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

document.getElementById('add').addEventListener('click', function(){

    // Adds display control objects to the list item
    tasks[`task-${idNum}`] = {};
    tasks[`task-${idNum}`]["checked"] = false;
    tasks[`task-${idNum}`]["expanded"] = false;
    tasks[`task-${idNum}`]["is-set"] = false;
    tasks[`task-${idNum}`]['styles-open'] = false;
    tasks[`task-${idNum}`]['order-ratio'] = 0;
    
    // Renders the HTML version of the list item in the page
    document.getElementById("main-content").insertAdjacentHTML("beforeend", `
    <div id="list-item-${idNum}">
    <div class="has-background-link-light has-text-info-dark p-4 mt-4" id="${idNum}">

      <div class="checkbox space-between">

        <div style="width: 100%">
            <label class="checkbox">

                <input type="checkbox" id="check-${idNum}">
                <input id="input-${idNum}" class="input is-info ml-4 personalized-input" type="text" placeholder="click here to enter text">

                <p id="to-do-${idNum}" class="is-size-5 pl-4 mb-1 hidden">todo stuff</p>

            </label>
        </div>
            <div class="checkbox" style="width: 50%;justify-content: flex-end;">
                <button id="set-${idNum}" class="button is-primary mr-4 ml-4">set</button>
                <!-- Edit button -->
                <img id="edit-${idNum}" src="Icons/icons8-edit-32.png" class="icon mr-4 ml-4" alt="edit" style="opacity: 70%; display: none;">

                <!-- Style button -->
                <img id="style-${idNum}" src="Icons/icons8-paint-24.png" class="icon mr-4" alt="edit" style="opacity: 70%; display: none;">

                <!-- Delete button -->
                <img id="bin-${idNum}" src="Icons/bin.png" class="icon mr-4" alt="delete" style="opacity: 70%; display: none;">

                <!-- More options button -->
                <img id="more-${idNum}" src="Icons/more.png" class="ml-4 icon" style="opacity: 54%; display:none;" alt="more">
            </div>
        </div>
        </div>

        <div class="has-background-link-light has-text-info-dark style" id="styles-${idNum}" style="display: none;">
            <h2 class="is-size-4 ml-4 pt-3">Style</h2>
            <div class="styles-container">

                <h3 id="zzz-${idNum}" class="has-text-purple has-background-purple-light is-size-5 style-block darkblue-border pointer">Abc</h3>
                <h3 id="xxx-${idNum}" class="has-text-orange has-background-orange is-size-5 style-block primary-border pointer">Abc</h3>
                <h3 id="ccc-${idNum}" class="has-text-irish-green has-background-irish is-size-5 style-block pointer">Abc</h3>
                <h3 id="vvv-${idNum}" class="has-text-pink has-background-pink is-size-5 style-block pointer">Abc</h3>

                <h3 id="red-${idNum}" class="has-text-danger has-background-danger-light is-size-5 style-block red-border pointer">Abc</h3>
                <h3 id="yel-${idNum}" class="has-text-warning-dark has-background-warning-light is-size-5 style-block yellow-border pointer">Abc</h3>
                <h3 id="gre-${idNum}" class="has-text-success has-background-success-light is-size-5 style-block green-border pointer">Abc</h3>
                <h3 id="blu-${idNum}" class="has-text-info has-background-info-light is-size-5 style-block blue-border pointer">Abc</h3>

                <h3 id="dar-${idNum}" class="has-text-link has-background-link-light is-size-5 style-block darkblue-border pointer">Abc</h3>
                <h3 id="pri-${idNum}" class="has-text-primary has-background-primary-light is-size-5 style-block primary-border pointer">Abc</h3>
                <h3 id="pid-${idNum}" class="has-text-white has-background-primary-dark is-size-5 style-block pointer">Abc</h3>
                <h3 id="noy-${idNum}" class="has-text-white has-background-link-dark is-size-5 style-block pointer">Abc</h3>

                <h3 id="inf-${idNum}" class="has-text-white has-background-info-dark is-size-5 style-block darkblue-border pointer">Abc</h3>
                <h3 id="suc-${idNum}" class="has-text-white has-background-success-dark is-size-5 style-block primary-border pointer">Abc</h3>
                <h3 id="war-${idNum}" class="has-text-white has-background-warning-dark is-size-5 style-block pointer">Abc</h3>
                <h3 id="dan-${idNum}" class="has-text-white has-background-danger-dark is-size-5 style-block pointer">Abc</h3>

                <h3 id="aaa-${idNum}" class="has-text-white has-background-darker-gray is-size-5 style-block pointer">Abc</h3>
                <h3 id="sss-${idNum}" class="has-text-white has-background-grey is-size-5 style-block darkblue-border pointer">Abc</h3>
                <h3 id="ddd-${idNum}" class="has-text-azure has-background-grey-light is-size-5 style-block primary-border pointer">Abc</h3>
                <h3 id="fff-${idNum}" class="has-text-black has-background-white is-size-5 style-block pointer">Abc</h3>

  
            </div>

        </div>

    </div>
    </div>
    `);

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
        
        // Prevents padding and margins from disappearing (for whatever reason they do)
        document.getElementById(`${evt.currentTarget.idNumber}`).style.padding = '16px';
        document.getElementById(`${evt.currentTarget.idNumber}`).style.border = 'none';
        document.getElementById(`styles-${evt.currentTarget.idNumber}`).style.border = 'none';
        document.getElementById(`${evt.currentTarget.idNumber}`).style.marginTop = '16px';
    }
    
    // Style 1
    document.getElementById(`red-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`red-${idNum}`).idNumber = idNum;
    document.getElementById(`red-${idNum}`).textColor = 'has-text-danger';
    document.getElementById(`red-${idNum}`).bgColor = 'has-background-danger-light';

    // Style 2
    document.getElementById(`yel-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`yel-${idNum}`).idNumber = idNum;
    document.getElementById(`yel-${idNum}`).textColor = 'has-text-warning-dark';
    document.getElementById(`yel-${idNum}`).bgColor = 'has-background-warning-light';

    // Style 3
    document.getElementById(`gre-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`gre-${idNum}`).idNumber = idNum;
    document.getElementById(`gre-${idNum}`).textColor = 'has-text-success';
    document.getElementById(`gre-${idNum}`).bgColor = 'has-background-success-light';

    // Style 4
    document.getElementById(`blu-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`blu-${idNum}`).idNumber = idNum;
    document.getElementById(`blu-${idNum}`).textColor = 'has-text-info';
    document.getElementById(`blu-${idNum}`).bgColor = 'has-background-info-light';

    // Style 5
    document.getElementById(`dar-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`dar-${idNum}`).idNumber = idNum;
    document.getElementById(`dar-${idNum}`).textColor = 'has-text-link';
    document.getElementById(`dar-${idNum}`).bgColor = 'has-background-link-light';

    // Style 6
    document.getElementById(`pri-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`pri-${idNum}`).idNumber = idNum;
    document.getElementById(`pri-${idNum}`).textColor = 'has-text-primary';
    document.getElementById(`pri-${idNum}`).bgColor = 'has-background-primary-light';

    // Style 7
    document.getElementById(`pid-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`pid-${idNum}`).idNumber = idNum;
    document.getElementById(`pid-${idNum}`).textColor = 'has-text-white';
    document.getElementById(`pid-${idNum}`).bgColor = 'has-background-primary-dark';

    // Style 8
    document.getElementById(`noy-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`noy-${idNum}`).idNumber = idNum;
    document.getElementById(`noy-${idNum}`).textColor = 'has-text-white';
    document.getElementById(`noy-${idNum}`).bgColor = 'has-background-link-dark';

    // Style 9
    document.getElementById(`inf-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`inf-${idNum}`).idNumber = idNum;
    document.getElementById(`inf-${idNum}`).textColor = 'has-text-white';
    document.getElementById(`inf-${idNum}`).bgColor = 'has-background-info-dark';

    // Style 10
    document.getElementById(`suc-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`suc-${idNum}`).idNumber = idNum;
    document.getElementById(`suc-${idNum}`).textColor = 'has-text-white';
    document.getElementById(`suc-${idNum}`).bgColor = 'has-background-success-dark';

    // Style 11
    document.getElementById(`war-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`war-${idNum}`).idNumber = idNum;
    document.getElementById(`war-${idNum}`).textColor = 'has-text-white';
    document.getElementById(`war-${idNum}`).bgColor = 'has-background-warning-dark';

    // Style 12
    document.getElementById(`dan-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`dan-${idNum}`).idNumber = idNum;
    document.getElementById(`dan-${idNum}`).textColor = 'has-text-white';
    document.getElementById(`dan-${idNum}`).bgColor = 'has-background-danger-dark';

    // Style 13
    document.getElementById(`zzz-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`zzz-${idNum}`).idNumber = idNum;
    document.getElementById(`zzz-${idNum}`).textColor = 'has-text-purple';
    document.getElementById(`zzz-${idNum}`).bgColor = 'has-background-purple-light';

    // Style 14
    document.getElementById(`xxx-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`xxx-${idNum}`).idNumber = idNum;
    document.getElementById(`xxx-${idNum}`).textColor = 'has-text-orange';
    document.getElementById(`xxx-${idNum}`).bgColor = 'has-background-orange';

    // Style 15
    document.getElementById(`ccc-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`ccc-${idNum}`).idNumber = idNum;
    document.getElementById(`ccc-${idNum}`).textColor = 'has-text-irish-green';
    document.getElementById(`ccc-${idNum}`).bgColor = 'has-background-irish';

    // Style 16
    document.getElementById(`vvv-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`vvv-${idNum}`).idNumber = idNum;
    document.getElementById(`vvv-${idNum}`).textColor = 'has-text-pink';
    document.getElementById(`vvv-${idNum}`).bgColor = 'has-background-pink';

    // Style 17
    document.getElementById(`aaa-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`aaa-${idNum}`).idNumber = idNum;
    document.getElementById(`aaa-${idNum}`).textColor = 'has-text-white';
    document.getElementById(`aaa-${idNum}`).bgColor = 'has-background-darker-gray';

    // Style 18
    document.getElementById(`sss-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`sss-${idNum}`).idNumber = idNum;
    document.getElementById(`sss-${idNum}`).textColor = 'has-text-white';
    document.getElementById(`sss-${idNum}`).bgColor = 'has-background-grey';

    // Style 19
    document.getElementById(`ddd-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`ddd-${idNum}`).idNumber = idNum;
    document.getElementById(`ddd-${idNum}`).textColor = 'has-text-azure';
    document.getElementById(`ddd-${idNum}`).bgColor = 'has-background-grey-light';

    // Style 20
    document.getElementById(`fff-${idNum}`).addEventListener('click', addStyles);
    document.getElementById(`fff-${idNum}`).idNumber = idNum;
    document.getElementById(`fff-${idNum}`).textColor = 'has-text-black';
    document.getElementById(`fff-${idNum}`).bgColor = 'has-background-white';
    

    // Get the input field
    var input = document.getElementById(`input-${idNum}`);
    var btn = document.getElementById(`set-${idNum}`);

    // Sets into the list
    btn.addEventListener('click', function(){
        // Trigger the button element with a click
        const inputVal = document.getElementById(`input-${extractNum(this.id)}`).value;
        document.getElementById(`to-do-${extractNum(this.id)}`).innerHTML = String(inputVal);

        document.getElementById(`to-do-${extractNum(this.id)}`).style.display = 'block';
        document.getElementById(`input-${extractNum(this.id)}`).style.display = 'none';
        document.getElementById(`set-${extractNum(this.id)}`).style.display = 'none';

        if (tasks[`task-${extractNum(this.id)}`]["is-set"] === false){
            document.getElementById(`more-${extractNum(this.id)}`).style.display = 'block';

            tasks[`task-${extractNum(this.id)}`]["is-set"] === true;
        } else {
            document.getElementById(`more-${extractNum(this.id)}`).style.display = 'none';

            tasks[`task-${extractNum(this.id)}`]["is-set"] === false;
        }
    });

    
    // Delete functionality
    document.getElementById(`bin-${idNum}`).addEventListener('click', function(){
        document.getElementById(`${extractNum(this.id)}`).remove();
        document.getElementById(`styles-${extractNum(this.id)}`).remove();
    });
    
    // Edit functionality
    document.getElementById(`edit-${idNum}`).addEventListener('click', function(){
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
    });

    // Open styles
    document.getElementById(`style-${idNum}`).addEventListener('click', function(){
        if (tasks[`task-${extractNum(this.id)}`]['styles-open'] === false){
            document.getElementById(`styles-${extractNum(this.id)}`).style.display = 'block';

            tasks[`task-${extractNum(this.id)}`]['styles-open'] = true;
        } else {
            document.getElementById(`styles-${extractNum(this.id)}`).style.display = 'none';

            tasks[`task-${extractNum(this.id)}`]['styles-open'] = false;
        }
    });

    // Show More functionality
    document.getElementById(`more-${idNum}`).addEventListener('click', function(){
        if (tasks[`task-${extractNum(this.id)}`]["expanded"] === false){
            document.getElementById(`edit-${extractNum(this.id)}`).style.display = 'block';
            document.getElementById(`style-${extractNum(this.id)}`).style.display = 'block';
            document.getElementById(`bin-${extractNum(this.id)}`).style.display = 'block';
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
 
            tasks[`task-${extractNum(this.id)}`]["styles-open"] = false;
            tasks[`task-${extractNum(this.id)}`]["expanded"] = false;
        }
    })

    // Adds item to the list when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();

            const inputVal = document.getElementById(`input-${extractNum(this.id)}`).value;
            document.getElementById(`to-do-${extractNum(this.id)}`).innerHTML = String(inputVal);

            document.getElementById(`to-do-${extractNum(this.id)}`).style.display = 'block';
            document.getElementById(`input-${extractNum(this.id)}`).style.display = 'none';
            document.getElementById(`set-${extractNum(this.id)}`).style.display = 'none';
            if (tasks[`task-${extractNum(this.id)}`]["is-set"] === false){
                document.getElementById(`more-${extractNum(this.id)}`).style.display = 'block';
    
                tasks[`task-${extractNum(this.id)}`]["is-set"] === true;
            } else {
                document.getElementById(`more-${extractNum(this.id)}`).style.display = 'none';
    
                tasks[`task-${extractNum(this.id)}`]["is-set"] === false;
            }
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
})

// clear all items functionality
document.getElementById('clear').addEventListener('click', function(){
    while (document.getElementById('main-content').children.length !== 0){
        let list = document.getElementById('main-content').children;
        for (let item of list){
           item.remove()
        }
    }
});