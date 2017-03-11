function loadClasses(url, btnText){
    retreiveDataFromServer(url, function (data) {
        var body = $("#tableBody").find('tbody');
        for (var i = 0, len = data.length; i < len; i++) {
            var tr = $('<tr>');
            tr.append($('<td>').append(data[i].className));
            tr.append($('<td>').append(data[i].classTeacher));
            tr.append($('<td>').append(data[i].classStartDate));
            tr.append($('<td>').append(data[i].classEndDate));
            tr.append(
                $('<td>').append(
                    $('<a>').addClass('btn btn-info').attr('data-class-id',data[i].classID)
                        .append(
                        $('<i>').html(btnText)
                        )
                )
            );
            body.append(tr);
        }
    });

};

