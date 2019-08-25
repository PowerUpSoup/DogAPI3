function getDogImage() {
    console.log(BreedofDog);
    fetch('https://dog.ceo/api/breed/' + BreedofDog + '/images/random')
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Check your internet connection!'));
}

function displayResults(responseJson) {
    //clear any previous results
    $('.results-img').remove();
    //write the API response to the console
    console.log(responseJson);

    //set up a loop that 
    if (responseJson.status == "success") {
        console.log("it was a success")
        //add an element with the image fetched frem the API
        $('div').append(`<img src="${responseJson.message}" class="results-img">`);
        //display the results section on the first use
        $('section').removeClass('hidden');
    }
    if (responseJson.status == "error") {
        console.log("it was an error")
        alert('Something went wrong. Check your spelling!');
    }
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        BreedofDog = document.getElementById("BreedofDogs").value;
        getDogImage();
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});