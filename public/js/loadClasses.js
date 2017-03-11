
function loadClasses(url, scoreUrl, btnText, translations) {
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
                height: 400,
                holderClass: 'custom',
                showClose: true,
                showCloseText: translations['close'],
                onBlurContainer: '.container',
                template: '<h3>' + translations['How do you score'] + ' "' + data[i].className + '" ' + translations['class'] + '</h3>' +
                '<div>' +
                    '<form method="post" action="'+scoreUrl+'">'+
                        '<input type="hidden" id="classID" name="classID" value="'+data[i].classID+'"/>' +
                        '<div class="radioDiv">' +
                            '<input type="radio" name="radioBelow" id="radio1" class="radio radio-danger"/>' +
                            '<label for="radio1">' + translations['BelowExpectation'] + '</label>' +
                        '</div>' +
                        '<div class="radioDiv">' +
                            '<input type="radio" name="radioAs" id="radio2" class="radio radio-warning"/>' +
                            '<label for="radio2">' + translations['AsExpected'] + '</label>' +
                        '</div>' +
                        '<div class="radioDiv">' +
                            '<input type="radio" name="radioAbove" id="radio3" class="radio radio-success"/>' +
                            '<label for="radio3">' + translations['AboveExpectation'] + '</label>' +
                        '<textarea name="scoreInfo" id="scoreInfo" class="form-control" rows="3"></textarea>'+
                        '<input type="submit" value="Submit">'+
                    '</form>'+
                '</div>'
            });
            body.append(tr);
        }
    });

};