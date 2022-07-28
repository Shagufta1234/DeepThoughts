console.log("connected to index");
let realData="";
let taskData="";
const hemburger = document.getElementById("hemburger");
const getTitle = () => {
    console.log("clicked");
    let aside = document.getElementById("aside");
    aside.style.width='140px';
    let black=document.getElementById("black");
    black.style.margin='-382px 0px 20px 0px';
    let journey = document.getElementById("journey");
    journey.innerHTML = `Journey Board`;
    journey.style.cssText = 'color: white;padding: 6px;'
    let menu = document.getElementById("menu");
    menu.innerHTML = `<ul class="list2">
                            <ol type="1">
                                <li> demo task</li>
                            </ol>
                            <hr>
                            <ul class="headings">
                                <li id="head1">task heading 1</li>
                                <hr>
                                <li id="head2">task heading 2</li>
                                <hr>
                                <li id="head3">task heading 3</li>
                                <hr>
                                <li id="head4">task heading 4</li>
                                <hr>
                                <li id="head5">task heading 5</li>
                                <hr>
                                <li id="head6">task heading 6</li>
                                <hr>
                                <li id="head7">task heading 7</li>
                                <hr>
                                <li id="head8">task heading 8</li>
                                <hr>
                                <li id="head9">task heading 9</li>
                            </ul>
                        </ul>`;

}
hemburger.addEventListener("click", getTitle);