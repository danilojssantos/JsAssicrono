var minhaPromisse = function() {  
    return new Promise(function(resolve, reject)
    {
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/danilojssantos');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                    
                }else{
                    reject('Erro na Requisição')
                }
                
            } 
        }
    });
}


var resultado = minhaPromisse()
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});
