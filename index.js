
    

function generateString(string) {

    var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = string;
    var charactersLength = characters.length;
    for ( let i = 0; i < 5; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    var option = document.createElement('option');
    option.value = result; 
    console.log(result);
    document.getElementById('browsers').appendChild(option);
    // return result;
}
