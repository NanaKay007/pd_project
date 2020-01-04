var name_box,add_button,recipes,delete_button;
window.onload = function(){
    name_box = document.querySelector('#box > input'), //reference to recipe name box 
    add_button = document.querySelector('#add'), //reference to `add recipe` button
    recipes = document.querySelector('#recipes'), //recipes DOM container
    delete_button = document.querySelector('#delete') //`delete selected recipes` button

    add_button.onclick = function(){
        // @purpose: adds a recipe to recipe list
        // @param: none
        // @return: void
        var recipe = RecipeList.createRecipe(name_box.value);
        if(recipe){
            RecipeList.addRecipe(recipe);
        }
        name_box.value = '';
        
    }

    delete_button.onclick = function(){
        // @purpose: removes checked recipe items from recipe list
        // @param: none
        // @return: void
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
    @purpose: constructs a recipe object
    @param: name -> name of recipe
            id -> unique id for the recipe object
    @return: a DOM element representing the recipe object
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
    // @purpose: defines variables and methods representing a Recipe list object and its operations
    // @param: none
    // @return: an object that exposes public methods for carrying out specific operations
    var list = [];
    return {
        addRecipe: function (recipe) {
            // @purpose: adds a recipe object to the recipe list
            // @param: recipe -> an object of type `Recipe`
            // @return: void
            list.push(recipe);

            recipes.insertBefore(recipe,recipes.childNodes[0]);
        },
        removeRecipe: function (_id) {
            // @purpose: removes a recipe item with a specific id from the recipe list
            // @param: _id -> the id of the object to be removed
            // @return: void
            if (_id > -1) {
                list = list.filter(function (item, i) {
                    if(item.id === _id){
                        recipes.removeChild(item);
                    }
                    return item.id !== _id;
                });
                
            }
        },
        createRecipe: function (name) {
            // @purpose: creates a recipe object using a non-empty string and an id value
            // @param: name -> a non-empty string representing the name of the recipe
            // @return: the recipe object
           if(!name){
               return null
           }
           return new Recipe(name,list.length);
        }
    }

})();




