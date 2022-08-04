// console.log("HELLOOOOO")

// const jsonPath = "data.json"
// const countriesData = "countriesJSON.json"
// const dinosaursData = "dinosaursData.json"

// $.ajax({
//     url: jsonPath,
//     type: 'GET',
//     dataType: 'json',
//     success: function (data) {
//         console.log(data);
//         showPerson(data)
//     },
//     error: function (error) {
//         console.log(error)
//     },
//     url: countriesData,
//     type: 'GET',
//     dataType: 'json',
//     success: function (data) {
//         console.log(data);
//         data.forEach(showCountries)
//     },
//     error: function (error) {
//         console.log(error)
//     },
//     url: dinosaursData,
//     type: 'GET',
//     dataType: 'json',
//     success: function (data) {
//         console.log(data);
//         data.forEach(showDinosaurs)
//     },
//     error: function (error) {
//         console.log(error)
//     }
// })




// // function showPerson(person) {
// //     const result = document.querySelector('section')
// //     result.innerHTML += `
// //     <h2>Name: ${person.name}</h2>
// //     <p><b>Age:</b> ${person.age}</p>
// //     <p><b>Hair:</b> ${person.hair}</p>`
// // }

// // function showCountries(country) {
// //     const result = document.querySelector('section')
// //     result.innerHTML += `
// //     <h2>Name: ${country.name}</h2>
// //     <p><b>Citizens:</b> ${country.citizen}</p>
// //     <p><b>Rating:</b> ${country.rating}/10</p>`
// // }

// function showDinosaurs(dino) {
//     const result = document.querySelector('section')
//     result.innerHTML += `
//     <h2>Name: ${dino.name}</h2>
//     <p><img src="${dino.img}" alt="${dino.name}"</p>
//     <p><b>Rating:</b> ${dino.rating}/10</p>
//     `
//     switch (dino.favourite) {
//         case true:
//             result.innerHTML += `
//                 <p>Is this a really awesome dino? YES!</p>
//                 `
//             break;
//         case false:
//             result.innerHTML += `
//                 <p>Is this a really awesome dino? NOOOOO!</p>
//                 `
//     }
// }




// -------------------------------------------------------------------------


// declare our settings
// result = document.querySelector('section')
// const apiKey = "28823763-37ef7b6b16745481e0dfc48f3";
// const endpointURL = "https://pixabay.com/api/?key=";
// let parameters = "&q=fat+dog"



// // declare our elements
// const searchInput = document.getElementById("searchTerms")
// const goBtn = document.getElementById("go")



// goBtn.onclick = () => {
//     console.log(searchInput.value)
//     searchStr = searchInput.value
//     selectOption = document.getElementById("filters").value
//     colorsOption = document.getElementById("filtersColors").value
//     categoryOption = document.getElementById("filtersCategory").value


//     filtersCategory




//     $.ajax({
//         type: 'GET',
//         url: endpointURL + apiKey + "&q=" + searchStr + selectOption + colorsOption + categoryOption + "&safesearch=off",
//         success: (data) => {
//             console.log(data)
//             showImage(data.hits)
//         },
//         error: (error) => {
//             console.log("Uh oh...")
//         }
//     })
// }

// showImage = (images) => {
//     result.innerHTML = ""
//     checkIfImageExists = (item) => {
//         if (item.userImageURL == false) {
//             return "https://icon-library.com/images/white-profile-icon/white-profile-icon-24.jpg";
//         } else {
//             return item.userImageURL
//         }
//     }
//     renderImage = (item) => {
//         result.innerHTML += `
//         <div class="item">
//         <img src="${item.largeImageURL}" alt="${item.tags}">
//         <img src="${checkIfImageExists(item)}" alt="${item.user}" class="userImage">
//         <h2>${item.user}</h2>
//         </div>
//         `
//     }

//     images.forEach(renderImage)
// }



searchInput.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        goBtn.click();
    }
});