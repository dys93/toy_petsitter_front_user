var toy = {};

//API 호출
toy.apiCall = (data) => {
    console.log(">>>>>>>common.js")
    $.ajax({
        type: data.type,
        url: data.url,
        cache: false,
        data: data.data || null,
        // beforeSend: (xhr) => {
        //    //access토큰 담아 보내는지 여부
        // },
        success: (result) => {
            if(result.subCode !== 0) {
                if(data.successError) {
                    data.successError(result);
                    return;
                }
                toyError.setAlert(result);
                return;
            }
            data.success(result);
        },
        error: (error) => {
            if(data.error) return;
            toyError.setAlert(error.responseJSON);
        }
    })
};