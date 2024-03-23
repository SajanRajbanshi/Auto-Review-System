var data = [
    ["23 Sun", 1, 0, 0],
    ["24 Mon", 4, 0, 0],
    ["25 Tue", 6, 0, 0],
    ["26 Wed", 9, 1, 0],
    ["27 Thu", 12, 2, 0],
    ["28 Fri", 13, 5, 1],
    ["29 Sat", 15, 6, 1],
    ["30 Sun", 16, 9, 1],
    ["31 Mon", 16, 10, 4],
    ["1 Tue", 17, 11, 5],
    ["2 Wed", 17, 13, 6],
    ["3 Thu", 17, 14, 7],
    ["4 Fri", 17, 14, 10],
    ["5 Sat", 17, 14, 12],
    ["6 Wed", 19, 16, 12],
    ["7 Thu", 20, 17, 14],
    ["8 Fri", 20, 19, 16],
    ["9 Sat", 20, 20, 17],
    ["10 Sun", 20, 20, 20],
    ["11 Mon", 20, 22, 20]
  ];
  anychart.onDocumentReady(function() {
    var dataSet = anychart.data.set(data);
    var firstSeriesData = dataSet.mapAs({x: 0, value: 1});
    var secondSeriesData = dataSet.mapAs({x: 0, value: 2});
    var thirdSeriesData = dataSet.mapAs({x: 0, value: 3});
    var chart = anychart.line();
    var firstSeries = chart.line(firstSeriesData);
    firstSeries.name("Positive");
    var secondSeries = chart.line(secondSeriesData);
    secondSeries.name("Neutral");
    var thirdSeries = chart.line(thirdSeriesData);
    thirdSeries.name("Negative");
    chart.legend().enabled(true);
    chart.title("Daily Overall");
    chart.container("graph");
    chart.draw();
  });