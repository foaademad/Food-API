
let select_food = document.querySelector("select")

let myhttp =  new XMLHttpRequest()

// add event listener on select food to change the api about select element
select_food.addEventListener("change",function(){
  getdata(this.value)
})

// get data of watermelon by default  when page load  or change select food to watermelon  by default
getdata('watermelon')
function getdata(data) {
  // open api 
  myhttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${data}`);
//send request
 myhttp.send();
 // if function to show the data when respnse = 4
 myhttp.addEventListener("readystatechange", function (){
    if (this.readyState == 4) {
        // convert the data to json
        let data = JSON.parse(this.response);
        console.log(data.recipes);
        // call the function show 
        showData(data.recipes)
    }
 })

}


//  show data in html page
function showData(arr) {
    let cartona = ''
    for (let index = 0; index < arr.length; index++) {
        cartona += `
        <div class="col-md-4">
        <img src="${arr[index].image_url}" alt="">
        <p>
          <b>Title : </b> ${arr[index].title}
        </p>
        <p>
          <b>ID: </b>${arr[index].recipe_id}
        </p>
        <p>
          <b>Publisher :</b>${arr[index].publisher}
        </p>
      </div>

        `
    }
    document.querySelector(".row").innerHTML = cartona
}
