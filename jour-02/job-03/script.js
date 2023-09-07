const textDisplayer = document.querySelector('#text-displayer')
const textInput = document.querySelector('#input-text')
const boldBtn = document.querySelector('#turn-text-bold')
const italicBtn = document.querySelector('#turn-text-italic')
const clearBtn = document.querySelector('#clear-text')

function myDisplayText() {
    textInput.addEventListener('input', function() {
        textDisplayer.innerHTML = textInput.value
    })
}

function myBoldText() {
    boldBtn.addEventListener('click', function() {
        textDisplayer.style.fontWeight = 'bold'
    })
}

function myItalicText() {
    italicBtn.addEventListener('click', function() {
        textDisplayer.style.fontStyle = 'italic'
    })
}
function myClearText() {
    clearBtn.addEventListener('click', function() {
        textDisplayer.innerHTML = ''
        textInput.value = ''
    })
}

myDisplayText();
myBoldText();
myItalicText();
myClearText();