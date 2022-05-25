import axios from "axios";

export const checkEmpty = (mixedVar) => {
    var key;
    if (typeof mixedVar == "object") {
        for (key in mixedVar) {
            //console.log(mixedVar,key);
            if (Object.hasOwnProperty.bind(mixedVar)(key)) {
                //if (mixedVar.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    } else {
        //mixedVar = ""+mixedVar;
        //if(typeof mixedVar == 'string' || typeof mixedVar == 'number'){
        var undef;

        var i;
        var len;
        var emptyValues = [
            undef,
            null,
            "null",
            false,
            0,
            "",
            "0",
            "0.00",
            "0.0",
            "empty",
            undefined,
            "undefined",
        ];
        //console.log(mixedVar);
        if (typeof mixedVar == "string") {
            mixedVar = mixedVar.trim();
        }

        for (i = 0, len = emptyValues.length; i < len; i++) {
            if (mixedVar === emptyValues[i]) {
                return true;
            }
        }
    }
    return false;
};

export const run_axios_api = async (req, url, httpMethod, header, data) => {
    var config = {
        method: httpMethod,
        url: url,
        headers: header,
        data: data,
    };

    var val = "";

    await axios(config)
        .then(function (response) {
            val = JSON.stringify(response.data);
            val = response.data; //JSON.parse(val)
            // console.log(val);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                val = error.response.data;
                // console.log(error.response.status);
                // console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                //console.log('Error', error.message);
            }
            //console.log(error.config);
        });

    return val;
};
