const prompt = require('prompt');
const emailCheck = (email)=>{
    const emailRegex = /(^[\w-\.]+)@([\w-\.])+[\w-]{2,3}/gmi
    const result = email.match(emailRegex)
    return !(result == null) ? true : false
    
}

const urlCheck = (url)=>{
    const urlRegex = /(http|https):[\/\/]{2}[\w-.]{1,}[\.]([\w-.]){3,}/gmi
    //(http|https):[\/\/]{2}[\w-.]{1,}[\.]([\w-.]){3,}([\/]([\w-.])+)+
    const result = url.match(urlRegex)
    return !(result == null) ? true : false
}

const addressCheck = (address) => {
    const addressRegex = /^No\s\d[,](\s|.)+[,](\s|.)+[,](\s|.)+\.$/gmi
    //^No\s\d[[:punct:]](\s|.)+[[:punct:]](\s|.)+[[:punct:]](\s|.)+\.$
    const result = address.match(addressRegex);
    return !(result == null) ? true : false
}

const fullnameCheck = (fullname) => {
    const fullnameRegex = /[\w.]{2,}/gmi
    const result = fullname.match(fullnameRegex)
    return !(result == null) ? true : false
}

const usernameCheck = (username) => {
    const usernameRegex = /[\w\d]+/gmi
    const result = username.match(usernameRegex)
    return !(result == null) ? true : false
}

const dateOfBirthCheck = (dob) => {
    let dateOfBirthRegex = /(([\d]){2}[-]){2}((\d){4})/gmi
    const result = dob.match(dateOfBirthRegex)
    return !(result == null) ? true : false

}


//var searchValue = new RegExp(query, 'gi')
//then you do searchValue.test(the test string);
const validator = ({fullname, email, username, dob, website,address})=>{
    if(emailCheck(email)){
        console.log(email , " is a valid email")
    }else{
        console.log(email , " is not a valid email")
    }


    if(urlCheck(website)){
        console.log(website, ' is  a valid website')
    }else{
        console.log(website, ' is  not a valid website')
    }


    if(addressCheck(address)){
        console.log(address, ' is a valid address')
    }else{
        console.log(address, ' is not a valid address')
    }


    if(fullnameCheck(fullname)){
        console.log(fullname, ' is a valid name')
    }else{
        console.log(fullname, ' is not a valid name')
    }


    if(usernameCheck(username)){
        console.log(username, ' is a valid username');
    }else{
        console.log(username, ' is not a valid username');
    }


    if(dateOfBirthCheck(dob)){
        console.log(dob , ' is a valid date of birth')
    }else{
        console.log(dob , ' is a not valid date of birth')
    }
}

prompt.start();
prompt.get(['fullname', 'email', 'username', 'dob', 'website', 'address'], function (err, result) {
    if(err){
        console.log('an internal server error occured')
    }else{
        validator({
            fullname: result.fullname,
            email: result.email,
            username: result.username,
            dob: result.dob,
            website: result.website,
            address: result.address
        })
    }
});
