function initStatistics(dataUrl, totalText){
        var chartColors = [
        "#C9302C",
        "#EC971F",
        "#4DCB6D",
        "#FFF"];


    retreiveDataFromServer(dataUrl ,function (data) {
        var pieData = [];
        for (var i = 0, len = data.length; i < len; i++) {
            pieData.push({
                title: data[i].category,
                value: data[i].count,
                color: chartColors[i]
            })
        }
        $("#doughnutChart").drawDoughnutChart(pieData, null, totalText);
    });
}
