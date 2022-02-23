let btn = document.querySelector('.random')
btn.addEventListener('click', random);

const api = ('https://api.adviceslip.com/advice');


function random(){

fetch(api, {cache:'no-store'})
.then(res => res.json())
.then(res => {

    document.querySelector('.advice').innerHTML = `
    <p>Article #${res.slip.id}</p>
      <h5>"${res.slip.advice}."</h5>

      `
})

}

random();