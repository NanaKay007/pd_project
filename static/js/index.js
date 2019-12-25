var name_box,add_button,recipes,delete_button;
window.onload = function(){
    name_box = document.querySelector('#box > input'),
    add_button = document.querySelector('#add'),
    recipes = document.querySelector('#recipes'),
    delete_button = document.querySelector('#delete')

    add_button.onclick = function(){
        var recipe = RecipeList.createRecipe(name_box.value);
        if(recipe){
            RecipeList.addRecipe(recipe);
        }
        name_box.value = '';
        
    }

    delete_button.onclick = function(){
        var radios = document.querySelectorAll('.radio');
        radios.forEach(function(item){
            if(item.checked){
                RecipeList.removeRecipe(item.parentElement.id);
            }
        });
    }
}


function Recipe(name,id) {
    /*
    */
    this.name = name;
    var element = document.createElement('div')
    element.id = id;
    element.innerHTML = 
    `
    <input type='checkbox' class='radio'>
    <h2>${this.name}</h2>
    `
    return element;
    
}

var RecipeList = (function () {
    var list = [];
    return {
        addRecipe: function (recipe) {
            /*
            */
            list.push(recipe);
            recipes.appendChild(recipe);
        },
        removeRecipe: function (index) {
            /*
             */
            if (index > -1) {
                list = list.filter(function (item, i) {
                    if(item.id === index){
                        recipes.removeChild(item);
                    }
                    return item.id !== index;
                });
                
            }
        },
        createRecipe: function (name) {
            /* 
            */
           if(!name){
               return null
           }
           return new Recipe(name,list.length);
        }
    }

})();




