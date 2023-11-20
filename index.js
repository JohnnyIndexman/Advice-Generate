const heading = document.querySelector('.head')
const body = document.querySelector('.body')
const button = document.querySelector('button')

button.addEventListener('click', getAdvice)
/*fetch function*/
function getAdvice() {
    fetch('advice.json')
        .then((res) => res.json())
        .then((data) => {
                const newVariable = Math.floor(Math.random() * data.length)
            console.log(data)
            data.map(() => {
                heading.innerHTML = `${data[newVariable].head}`
                body.innerHTML = `"${data[newVariable].body}"`
            })
        })
}
