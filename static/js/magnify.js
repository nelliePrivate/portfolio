// JavaScript source code for Image enhancement on NellieTobey-pythonanywhere

let IMAGES;
let IMAGESTYLES;
let MagState = 'OFF'


function set_IMAGES() {
    /* Some items in these dictionaries are not currently used.  
     * I'm still deciding if it's worth it to change all the 
     * image elements to the button function, instead of hover to enlarge
     */
    IMAGES = {
        MEMORY : document.getElementById('V10Solo'),
        QUIZ : document.getElementById('V10Team'),
        GFONTS : document.getElementById('V15Solo'),
        CODETRACK : document.getElementById('V15Team'),
        WHOGIF : document.getElementById('WhoGif'),
        WIWA : document.getElementById('Wiwa_img'),
        NOODLES : document.getElementById('Home_img'),
        FCCDESIGN : document.getElementById('Design_cert'),
        FCCJS : document.getElementById('JS_cert'),


    }
    //LargeW = Large width, LargeH = Large height,  OriginalWH= original width & Height(multiple images in a cell)
    //SingleimgWH = single image cell width & height
    IMAGESTYLES = {
        LargeW: '60vw',
        LargeH: '100vh',
        OriginalWH: '30%',      
        SingleimgWH: '40%',
        LargeIndex: '10',
        OriginalIndex: 1,
        OriginalPosition: 'relative',
        LargePosition: 'fixed',

    }
    //console.log('IMAGE IDs successfully set.')
}


function button_fixed(button){
    button.value = 'shrink';
    button.style.position = 'fixed';
    button.innerHTML = 'X'
    button.style.top = '20vh'
    button.style.left = '20vw'
    button.style.zIndex = 11
    button.style.border = '5px solid red'

}

function button_static(button) {
    button.innerHTML = ' + '
    button.style.position = 'absolute'
    button.style.position = 'none'
    button.value = 'magnify'
    button.style.left = 0
    button.style.top = 0
    button.style.zIndex = 2
    button.style.border = '2px solid green'

}

function Size(name, currentbutton) {
    let image = IMAGES[name]
    let state = currentbutton.value
    /* --LOGS
    console.log(`this.value = ${state}`)
    console.log(`image = ${image}`)
    console.log(`name = ${name}`)
    */
    
    if (state == 'magnify') {
        if (MagState == 'OFF') {
            Magnify(image)
            button_fixed(currentbutton)
            /*
            currentbutton.innerHTML = ' X '
            currentbutton.value = 'shrink'
            currentbutton.style.left = '-10vw'
            currentbutton.style.top = '-10vh'
            currentbutton.style.zIndex = 10
            */
        }
    }
    else {
        if (MagState == 'ON') {
            Shrink(image, name)
            button_static(currentbutton)

            /*

            currentbutton.innerHTML = ' + '
            currentbutton.value = 'magnify'
            currentbutton.style.left = '0'
            currentbutton.style.top = 0
            currentbutton.style.zIndex = 1
            */
        }
    }

}

function Magnify(image) {
    //console.log(`image passed into Magnify = ${image}`)
    if (MagState != 'ON') {
        image.style.position = 'fixed'
        image.style.zIndex = 10
        image.style.top = '20vh'
        image.style.left = '20vw'
        image.style.maxWidth = IMAGESTYLES.LargeW
        image.style.maxHeight = IMAGESTYLES.LargeH
        MagState = 'ON'
    }
    
}

function Shrink(element, name) {
    // Single images have larger original size than multiples
    if (MagState == 'ON') {
        if (name == 'WHOGIF' || name == 'WIWA' || name == 'NOODLES') {
            //pass
            element.style.maxWidth = '40vw'
            element.style.left = 0
            element.style.top = 0
        }
        else {
            element.style.maxWidth = '25vw'
            element.style.left = 0
            element.style.top = 0


        }
        element.style.position = 'relative'
        element.style.zIndex = 1
        MagState = 'OFF'
    }

}


window.addEventListener('load', (event) => {
    set_IMAGES()
   

});

