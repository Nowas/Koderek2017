
function loadClasses(url, btnText, translations) {
    retreiveDataFromServer(url, function (data) {
        var body = $("#tableBody").find('tbody');
        for (var i = 0, len = data.length; i < len; i++) {
            var tr = $('<tr>');
            var a = $('<a>');
            tr.append($('<td>').append(data[i].classID));
            tr.append($('<td>').append(data[i].className));
            tr.append($('<td>').append(data[i].classTeacher));
            tr.append($('<td>').append(data[i].classStartDate));
            tr.append($('<td>').append(data[i].classEndDate));
            tr.append(
                $('<td>').append(
                    a.addClass('btn btn-info').attr('data-class-id', data[i].classID)
                        .append(
                        $('<i>').html(btnText)
                        )
                )
            );
            a.avgrund({
                height: 200,
                width: 500,
                holderClass: 'custom',
                showClose: true,
                showCloseText: translations['close'],
                onBlurContainer: '.container',
                template: '<h2>'+translations['How do you score'] +' "'+data[i].className+'" ' + translations['class'] + '</h2>' +
                '<div>' +
                '<a class="btn btn-danger" href="#" data-class-id="1"><i class=""></i> '+translations['BelowExpectation']+'</a>'+
                '<a class="btn btn-warning" href="#" data-class-id="1"><i class=""></i> '+translations['AsExpected']+'</a>'+
                '<a class="btn btn-success" href="#" data-class-id="1"><i class=""></i> '+translations['AboveExpectation']+'</a>'+
                '</div>'
            });
            body.append(tr);
        }
    });

};