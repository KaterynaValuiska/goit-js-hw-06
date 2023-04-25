const categories = document.querySelector("ul#categories"); 
console.log("Number of categories:", categories.children.length);

[...categories.children].forEach ( function (category) {
    console.log("Category:", category.firstElementChild.textContent);
    console.log("Elements:", category.lastElementChild.children.length);
});
    


