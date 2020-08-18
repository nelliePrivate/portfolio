// color buttons
let PAGE;
let ORIGINAL;
let BOLD;

function set_DOM() {

    PAGE = {
        BODY: document.getElementById('body'),
        MAIN: document.getElementById('main'),
        NAV: document.getElementById('my_nav'),
        IMG1: document.getElementById('image_box'),
        SPAN1: document.getElementById('desc_span'),
        FANCY: document.getElementsByClassName('fancy'),
        LINKS: document.getElementsByClassName('color-link'),
    };

    ORIGINAL = {
        EMPHASIS: 'rgb(251, 240, 248)',
        DOMINANT: '#EFF6F7',
        RECESSIVE: '#FEF5E7',
        TEXT: 'black',
        TEXTCLIP: 'url("https://res.cloudinary.com/dhsqdw1tp/image/upload/v1585237483/multicolored-illustration-3109830_uppcdi.jpg")',
        SHADOW: '2px 3px #eff6f780',
        LINKCOLOR: 'black',
    };

    BOLD = {
        EMPHASIS: '#CB4335',
        DOMINANT: 'rgb(47, 24, 8)',
        RECESSIVE: '#B9770E',
        TEXT: 'white',
        TEXTCLIP: 'url(static("/images/yellow_grass.jpg"))',
        SHADOW: '2px 1px 2px #c0c6d438',
        LINKCOLOR: '#a0fb3d',


    };
    FALL = {
        EMPHASIS: 'rgba(26, 58, 18, 0.38)',
        DOMINANT: 'radial-gradient(#78ef0b, #b5621be0)',
        RECESSIVE: '#B9770E',
        TEXT: 'orangered',
        TEXTCLIP: 'url(static("/images/fall.jpg"))',
        SHADOW: '1px 1px 1px #c0c6d438',
        LINKCOLOR: '#f75454',


    }
};

function change_page(selection) {

    switch (selection) {
        case 'original_radio':
            console.log('changing to: original')
            PAGE.BODY.style.background = ORIGINAL.DOMINANT
            PAGE.BODY.style.color = ORIGINAL.TEXT
            PAGE.NAV.style.background = ORIGINAL.EMPHASIS
            let Onodes = PAGE.FANCY
            let linknodes1 = PAGE.LINKS
            for (let i = 0; i < Onodes.length; i++) {
                let element = Onodes[i]
                //console.log(`element=${element}`)
                element.style.backgroundImage = ORIGINAL.TEXTCLIP
                element.style.textShadow = ORIGINAL.SHADOW
            };
            for (let j = 0; j < linknodes1.length; j++) {
                let elementlink1 = linknodes1[j]
                elementlink1.style.color = ORIGINAL.LINKCOLOR
            }
            break

        case 'bold_radio':
            //console.log('changing to: bold')
            PAGE.BODY.style.background = BOLD.DOMINANT
            PAGE.BODY.style.color = BOLD.TEXT
            PAGE.NAV.style.background = BOLD.EMPHASIS
            let Bnodes = PAGE.FANCY
            let linknodes2 = PAGE.LINKS
            for (let i = 0; i < Bnodes.length; i++) {
                let element2 = Bnodes[i]
                element2.style.backgroundImage = BOLD.TEXTCLIP
                element2.style.textShadow = BOLD.SHADOW
            };
            for (let j = 0; j < linknodes2.length; j++) {
                let elementlink2 = linknodes2[j]
                elementlink2.style.color = BOLD.LINKCOLOR
            }
            break
        case 'fall_radio':
            //console.log('changing to: fall')
            PAGE.BODY.style.background = FALL.DOMINANT
            PAGE.BODY.style.color = FALL.TEXT
            PAGE.NAV.style.background = FALL.EMPHASIS
            PAGE.NAV.style.textShadow = FALL.SHADOW
            let Cnodes = PAGE.FANCY
            let linknodes3 = PAGE.LINKS
            for (let i = 0; i < Cnodes.length; i++) {
                let element3 = Cnodes[i]
                element3.style.backgroundImage = FALL.TEXTCLIP
                element3.style.textShadow = FALL.SHADOW
            }
            for (let j = 0; j < linknodes3.length; j++) {
                let elementlink3 = linknodes3[j]
                elementlink3.style.color = FALL.LINKCOLOR
            }

    }

}

function set_EventListeners() {
    let radio1 = document.getElementById('original_radio')
    let radio2 = document.getElementById('bold_radio')
    let radio3 = document.getElementById('fall_radio')
    radio1.addEventListener('click', function () { change_page('original_radio') })
    radio2.addEventListener('click', function () { change_page('bold_radio') })
    radio3.addEventListener('click', function () { change_page('fall_radio')})
}
window.addEventListener('load', (event) => {
    set_DOM()
    set_EventListeners()

});
