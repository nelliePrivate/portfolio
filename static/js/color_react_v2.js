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
        CONTAINER: document.getElementsByClassName('display_cell'),
        TEXT: document.getElementsByClassName('text-box'),
        FANCY: document.getElementsByClassName('fancy'),
        LINKS: document.getElementsByClassName('color-link'),
        NAVLINKS: document.getElementsByClassName('noodle_link'),
    };

    ORIGINAL = {
        EMPHASIS: 'rgb(251, 240, 248)',
        DOMINANT: 'rgba(234, 241, 236, 0.08)',
        RECESSIVE: '#FEF5E7',
        TEXT: 'black',
        TEXTCLIP: 'url("https://res.cloudinary.com/dhsqdw1tp/image/upload/v1585237483/multicolored-illustration-3109830_uppcdi.jpg")',
        SHADOW: '2px 3px #eff6f780',
        LINKCOLOR: 'black',
    };

    BOLD = {
        EMPHASIS: '#CB4335',
        DOMINANT:  '#090923',
        RECESSIVE: '#B9770E',
        TEXT: 'white',
        TEXTCLIP: 'url(static("/images/fall.jpg"))',
        SHADOW: '2px 1px 2px #c0c6d438',
        LINKCOLOR: '#a0fb3d',


    };
    FALL = {
        EMPHASIS: 'rgba(26, 58, 18, 0.38)',
        DOMINANT: 'radial-gradient(rgb(119, 243, 5), rgb(224, 120, 14))',
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
            let textboxes = PAGE.TEXT
            let cells = PAGE.CONTAINER
            let navlinks = PAGE.NAVLINKS
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
            for (let k = 0; k < textboxes.length; k++) {
                let elementtext = textboxes[k]
                elementtext.style.color = 'black'
            }
            for (let l = 0; l < cells.length; l++) {
                let cell = cells[l]
                cell.style.background = 'white'
                cell.style.color = 'black'
            }
            for (let m = 0; m < navlinks.length; m++) {
                let links1 = navlinks[m]
                links1.style.color = "purple"
            }

            break

        case 'bold_radio':
            //console.log('changing to: bold')
            PAGE.BODY.style.background = BOLD.DOMINANT
            PAGE.BODY.style.color = BOLD.TEXT
            PAGE.NAV.style.background = BOLD.EMPHASIS
            let Bnodes = PAGE.FANCY
            let linknodes2 = PAGE.LINKS
            let textboxes2 = PAGE.TEXT
            let cells2 = PAGE.CONTAINER
            let navlinks2 = PAGE.NAVLINKS
            for (let i = 0; i < Bnodes.length; i++) {
                let element2 = Bnodes[i]
                element2.style.backgroundImage = BOLD.TEXTCLIP
                element2.style.textShadow = BOLD.SHADOW
            };
            for (let j = 0; j < linknodes2.length; j++) {
                let elementlink2 = linknodes2[j]
                elementlink2.style.color = BOLD.LINKCOLOR
            }
            for (let k = 0; k < textboxes2.length; k++) {
                let elementtext = textboxes2[k]
                elementtext.style.color = 'white'
            }
            for (let l = 0; l < cells2.length; l++) {
                let cell = cells2[l]
                cell.style.background = 'linear-gradient(90deg, #cb4335, transparent, #cb4335)'
                cell.style.color = 'white'
            }
            for (let m = 0; m < navlinks2.length; m++) {
                let links2 = navlinks2[m]
                links2.style.color = "white"
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
            let textboxes3 = PAGE.TEXT
            let cells3 = PAGE.CONTAINER
            let navlinks3 = PAGE.NAVLINKS
            for (let i = 0; i < Cnodes.length; i++) {
                let element3 = Cnodes[i]
                element3.style.backgroundImage = FALL.TEXTCLIP
                element3.style.textShadow = FALL.SHADOW
            }
            for (let j = 0; j < linknodes3.length; j++) {
                let elementlink3 = linknodes3[j]
                elementlink3.style.color = FALL.LINKCOLOR
            }
            for (let k = 0; k < textboxes3.length; k++) {
                let elementtext = textboxes3[k]
                elementtext.style.color = '#6f0f6f'
            }
            for (let l = 0; l < cells3.length; l++) {
                let cell = cells3[l]
                cell.style.background = '#f3ecd49c'
                cell.style.color = 'black'
            }
            for (let m = 0; m < navlinks3.length; m++) {
                let links3 = navlinks3[m]
                links3.style.color = "#fbf0f8"
            }
            break


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
