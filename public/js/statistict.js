function initStatistics(dataUrl, totalText){
        var chartColors = [
        "#2C3E50",
        "#FC4349",
        "#6DBCDB",
        "#F7E248",
        "#D7DADB",
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
