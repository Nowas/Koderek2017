function retreiveDataFromServer(dataUrl, newDataCallback) {
    NProgress.start();
    $.ajax({
        url: dataUrl,
        success: function (data) {
                NProgress.done();
            newDataCallback(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
}