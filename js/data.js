// Call to API
const call = () =>{
    fetch('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json')
    .catch(error => {
        console.log('Error');
    })
    .then(response => response.json())
    .then(places =>{
        // console.log(places);
        
        //Send response to iteration
        printInfo(places);
    })
}
call();