const prompt = require('prompt');
let validatorObj = {
    email: {
        validator: /(^[\w-\.]+)@([\w-\.])+[\w-]{2,3}/gmi,
        successMessage: "email is valid",
        errorMessage: "email is invalid"
    },
    url: {
        validator: /(http|https):[\/\/]{2}[\w-.]{1,}[\.]([\w-.]){3,}/gmi,
        successMessage: "url is valid",
        errorMessage: "url is invalid"
    },
    address: {
        validator: /^No\s\d[,]((\s|.)([\w- .]+[,])){2,}(\s|.)[\w .]+\.$/gmi,
        successMessage: "address is valid",
        errorMessage: "address is invalid"
    },
    fullname: {
        validator: /[\w.]{2,}/gmi,
        successMessage: "fullname is valid",
        errorMessage: "fullname is invalid"
    },
    username: {
        validator: /[\w\d]+/gmi,
        successMessage: "username is valid",
        errorMessage: "username is invalid"
    },
    dob: {
        validator: /(([\d]){2}[-]){2}((\d){4})/gmi,
        successMessage: "dob is valid",
        errorMessage: "dob is invalid"
    }
}

function validator({validatorObj, userInfo}){
    Object.keys(validatorObj).forEach(key => {
        const field = validatorObj[key]
        const validatorResult = userInfo[key].match(field.validator)
        if(validatorResult !== null){
            console.log(field.successMessage)
        }else{
            console.error(field.errorMessage)
        }
    })
}

prompt.start();
prompt.get(['fullname', 'email', 'username', 'dob', 'url', 'address'], function (err, result) {
    if(err){
        console.log('an internal server error occurred')
    }else{
        const userInfo = {
            fullname: result.fullname,
            email: result.email,
            username: result.username,
            dob: result.dob,
            url: result.url,
            address: result.address
        }
        validator({userInfo, validatorObj})
    }
});
//sample data = {
//     fullname: "Makwe kelvin",
//     email: "kelvinmakwe@gmail.com",
//     username: "kelvin001",
//     dob: "03-04-2020",
//     url: "http://kelvinmakwe.com",
//     address: "no 4, evangel-close, port-harcourt, rivers state."
//}
