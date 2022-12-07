// retrieve all 'input' balise
const allInputs = [...document.getElementsByTagName('input')]

// for each input, add an event listener 
// that add a class to the input to make the label stay on top
allInputs.forEach(item => {
    item.addEventListener('input', (e) => {
        const value = item.value
        const trimmed = value.trim() //trim the input.value to check for any white space only
        if (trimmed != '') {
            item.classList.add('not-empty')
        } else {
            item.classList.remove('not-empty')
        }
    })
})

