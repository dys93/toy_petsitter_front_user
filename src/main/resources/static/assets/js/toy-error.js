var toyError = {};

toyError.setAlert = (json) => {
    let errorData = json;
    let subCode = errorData.subCode;
    let error = errorData.error;

    alert(subCode + " : " + error);
}