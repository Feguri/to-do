document.getElementById("main-content").insertAdjacentHTML("beforeend", `
<div id="list-item-${previousId}">
<div class="${savedTasks[key]['current-background']} ${savedTasks[key]['current-color']} p-4 mt-4" id="${previousId}" name="list-item">

  <div class="checkbox space-between">

    <div style="width: 100%">
        <label class="checkbox">

            <input type="checkbox" id="check-${previousId}">
            <input id="input-${previousId}" class="input is-info ml-4 personalized-input" type="text" placeholder="click here to enter text">

            <p id="to-do-${previousId}" class="is-size-5 pl-4 mb-1 hidden">todo stuff</p>

        </label>
    </div>
        <div class="checkbox" style="width: 50%; justify-content: flex-end;">
            <button id="set-${previousId}" class="button is-primary mr-4 ml-4">set</button>
            <!-- Edit button -->
            <img id="edit-${previousId}" src="Icons/icons8-edit-32.png" class="iconic mr-4 ml-4" alt="edit" style="opacity: 70%; display: none;">

            <!-- Style button -->
            <img id="style-${previousId}" src="Icons/icons8-paint-24.png" class="iconic mr-4" alt="edit" style="opacity: 70%; display: none;">

            <!-- Delete button -->
            <img id="bin-${previousId}" src="Icons/bin.png" class="iconic mr-4" alt="delete" style="opacity: 70%; display: none;">

            <!-- More options button -->
            <img id="more-${previousId}" src="Icons/more.png" class="ml-4 iconic" style="opacity: 54%; display:none;" alt="more">
        </div>
    </div>
    </div>

    <div class="${savedTasks[key]['current-background']} ${savedTasks[key]['current-color']} style" id="styles-${previousId}" style="display: none;" name="list-style">
        <h2 class="is-size-4 ml-4 pt-3">Style</h2>
        <p id="tip" style="opacity: 60%;margin-left: 17px;margin-top: 10px;margin-bottom: 35px;font-size: 0.93rem;">
            Tip: press <b>shift + click</b> to apply the style to <b><i>all</i></b> list items 
        </p>

        <div class="block-${previousId}">
            <div class="styles-container">

                <h3 unselectable="on" id="zzz-${previousId}" class="has-text-purple has-background-purple-light is-size-5 style-block darkblue-border pointer">Abc</h3>
                <h3 unselectable="on" id="xxx-${previousId}" class="has-text-orange has-background-orange is-size-5 style-block primary-border pointer">Abc</h3>
                <h3 unselectable="on" id="ccc-${previousId}" class="has-text-irish-green has-background-irish is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="vvv-${previousId}" class="has-text-pink has-background-pink is-size-5 style-block pointer">Abc</h3>

                <h3 unselectable="on" id="red-${previousId}" class="has-text-danger has-background-danger-light is-size-5 style-block red-border pointer">Abc</h3>
                <h3 unselectable="on" id="yel-${previousId}" class="has-text-warning-dark has-background-warning-light is-size-5 style-block yellow-border pointer">Abc</h3>
                <h3 unselectable="on" id="gre-${previousId}" class="has-text-success has-background-success-light is-size-5 style-block green-border pointer">Abc</h3>
                <h3 unselectable="on" id="blu-${previousId}" class="has-text-info has-background-info-light is-size-5 style-block blue-border pointer">Abc</h3>

                <h3 unselectable="on" id="dar-${previousId}" class="has-text-link has-background-link-light is-size-5 style-block darkblue-border pointer">Abc</h3>
                <h3 unselectable="on" id="pri-${previousId}" class="has-text-primary has-background-primary-light is-size-5 style-block primary-border pointer">Abc</h3>
                <h3 unselectable="on" id="q1q-${previousId}" class="has-text-rouge has-background-rouge is-size-5 style-block darkblue-border pointer">Abc</h3>
                <h3 unselectable="on" id="w2w-${previousId}" class="has-text-bluey has-background-bluey is-size-5 style-block primary-border pointer">Abc</h3>
            </div>
        </div>
        <div class="block-${previousId}">
            <div class="styles-container">
                <h3 unselectable="on" id="inf-${previousId}" class="has-text-white has-background-info-dark is-size-5 style-block darkblue-border pointer">Abc</h3>
                <h3 unselectable="on" style="border-color: transparent;" id="suc-${previousId}" class="has-text-white has-background-success-dark is-size-5 style-block primary-border pointer">Abc</h3>
                <h3 unselectable="on" id="war-${previousId}" class="has-text-white has-background-warning-dark is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="dan-${previousId}" class="has-text-white has-background-danger-dark is-size-5 style-block pointer">Abc</h3>

                <h3 unselectable="on" id="aaa-${previousId}" class="has-text-white has-background-darker-gray is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="sss-${previousId}" class="has-text-white has-background-grey is-size-5 style-block darkblue-border pointer">Abc</h3>
                <h3 unselectable="on" id="ddd-${previousId}" class="has-text-azure has-background-grey-light is-size-5 style-block primary-border pointer">Abc</h3>
                <h3 unselectable="on" id="fff-${previousId}" class="has-text-black has-background-white is-size-5 style-block pointer">Abc</h3>

                <h3 unselectable="on" id="pid-${previousId}" class="has-text-white has-background-primary-dark is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="noy-${previousId}" class="has-text-white has-background-link-dark is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="pur-${previousId}" class="has-text-white has-background-purple is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="pot-${previousId}" class="has-text-white has-background-green is-size-5 style-block pointer">Abc</h3>

                <h3 unselectable="on" id="trt-${previousId}" class="a has-text-white  is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="rer-${previousId}" class="b has-text-white  is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="ewe-${previousId}" class="c has-text-white  is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="wqw-${previousId}" class="d has-text-white  is-size-5 style-block pointer">Abc</h3>

                <h3 unselectable="on" id="hgh-${previousId}" class="e has-text-white  is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="gfg-${previousId}" style="border-color: transparent;" class="f has-text-white  is-size-5 style-block darkblue-border pointer">Abc</h3>
                <h3 unselectable="on" id="fdf-${previousId}" style="border-color: transparent;" class="g has-text-white  is-size-5 style-block primary-border pointer">Abc</h3>
                <h3 unselectable="on" id="dsd-${previousId}" class="h has-text-white  is-size-5 style-block pointer">Abc</h3>

                <h3 unselectable="on" id="sas-${previousId}" class="i has-text-white  is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="mnm-${previousId}" class="j has-text-white  is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="nbn-${previousId}" class="k has-text-white  is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="bvb-${previousId}" class="l has-text-white  is-size-5 style-block pointer">Abc</h3>

                <h3 unselectable="on" id="vcv-${previousId}" class="m has-text-grey  is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="cxc-${previousId}" style="border-color: transparent;" class="n has-text-white  is-size-5 style-block darkblue-border pointer">Abc</h3>
                <h3 unselectable="on" id="xzx-${previousId}" style="border-color: transparent;" class="o has-text-white  is-size-5 style-block primary-border pointer">Abc</h3>
                <h3 unselectable="on" id="aqa-${previousId}" class="p has-text-white  is-size-5 style-block pointer">Abc</h3>

                <h3 unselectable="on" id="sws-${previousId}" class="q has-text-white  is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="ded-${previousId}" class="r has-text-white  is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="frf-${previousId}" class="s has-text-white  is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="lol-${previousId}" class="t has-text-white  is-size-5 style-block pointer">Abc</h3>

            </div>
        </div>
        <div class="block-${previousId}">
            <div class="styles-container">
                <h3 unselectable="on" id="inf-${previousId}" class="has-text-white has-background-info-dark is-size-5 style-block darkblue-border pointer">Abc</h3>
                <h3 unselectable="on" id="suc-${previousId}" class="has-text-white has-background-success-dark is-size-5 style-block primary-border pointer">Abc</h3>
                <h3 unselectable="on" id="war-${previousId}" class="has-text-white has-background-warning-dark is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="dan-${previousId}" class="has-text-white has-background-danger-dark is-size-5 style-block pointer">Abc</h3>

                <h3 unselectable="on" id="aaa-${previousId}" class="has-text-white has-background-darker-gray is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="sss-${previousId}" class="has-text-white has-background-grey is-size-5 style-block darkblue-border pointer">Abc</h3>
                <h3 unselectable="on" id="ddd-${previousId}" class="has-text-azure has-background-grey-light is-size-5 style-block primary-border pointer">Abc</h3>
                <h3 unselectable="on" id="fff-${previousId}" class="has-text-black has-background-white is-size-5 style-block pointer">Abc</h3>

                <h3 unselectable="on" id="pid-${previousId}" class="has-text-white has-background-primary-dark is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="noy-${previousId}" class="has-text-white has-background-link-dark is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="pid-${previousId}" class="has-text-white has-background-primary-dark is-size-5 style-block pointer">Abc</h3>
                <h3 unselectable="on" id="noy-${previousId}" class="has-text-white has-background-link-dark is-size-5 style-block pointer">Abc</h3>
            </div>
        </div>



        <div style="display: flex; flex-direction: column; padding: 15px;"
        <hr>
            <h2 class="is-size-4 ml-4 pt-3 pb-2">Custom</h2>
            <br>

            <div class="flex custom-container">
                <label for="txt" class="is-size-5 pb-1">Text Color: </label>
                <input type="color" class="pointer" id="txt-${previousId}" name="txt">
            </div>
            <div class="flex custom-container">
                <label for="bg" class="is-size-5 pb-1">Background Color: </label>
                <input type="color" class="pointer" id="bg-${previousId}" name="bg">
            </div>
            <div class="flex custom-container" style="margin-top: 0;">
                <button id="custom-${previousId}" class="button is-primary pointer" style="margin: 10px 50px;">Apply</button>
                <button id="ally-to-all-${previousId}" class="button is-primary pointer" style="margin: 10px 50px;">Apply to all</button>
            </div>
        </div>
        


    </div>

</div>
</div>
`);

function showMore(id){
    if (tasks[`task-${id}`]["expanded"] === false){
        document.getElementById(`edit-${id}`).style.display = 'block';
        document.getElementById(`style-${id}`).style.display = 'block';
        document.getElementById(`bin-${id}`).style.display = 'block';
        // document.getElementById(`up-${extractNum(this.id)}`).style.display = 'block';
        // document.getElementById(`down-${extractNum(this.id)}`).style.display = 'block';


        tasks[`task-${extractNum(this.id)}`]["expanded"] = true;
    } else {
        document.getElementById(`edit-${id}`).style.display = 'none';
        document.getElementById(`style-${id}`).style.display = 'none';
        document.getElementById(`bin-${id}`).style.display = 'none';
        document.getElementById(`styles-${id}`).style.display = 'none';
        // document.getElementById(`up-${extractNum(this.id)}`).style.display = 'none';
        // document.getElementById(`down-${extractNum(this.id)}`).style.display = 'none';

        tasks[`task-${id}`]["styles-open"] = false;
        tasks[`task-${id}`]["expanded"] = false;
    }
}
document.getElementById(`more-${idNum}`).addEventListener('click', showMore);
document.getElementById(`more-${idNum}`).id = idNum;