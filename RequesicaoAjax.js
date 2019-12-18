var xhr = new XMLHttpRequest();
// fazendo a requisição na api do github
xhr.open('GET','https://api.github.com/users/danilojssantos')
xhr.send(null);

xhr.onreadystatechange = function()
{
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}