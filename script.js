const query = async (text) => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${text}`);
    res = await res.json();
    console.log(res);
    return res;
};

const newChain = async () => {
    let data = await query(document.querySelector('#input_form').value);
    let img = document.createElement('img');
    let text = document.createElement('p');
    img.src = data.sprites.front_default;
    text.innerText = data.name;
    document.querySelector('#val').append(img);
    document.querySelector('#val').append(text);
};

let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let del = document.querySelector('#val');
    while (del.firstChild) {
        del.removeChild(del.firstChild);
    }
    newChain();
});




