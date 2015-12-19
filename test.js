$( document ).ready(function() {

  var connectedLink = "http://serket.uk/badges/badgelist"

  $.getJSON(connectedLink, function showData(data){

    makeChart(data, "myChart", "byMonth")

    makeChart(data, "myChart2", "byDay", "sep")

    makeChart(data, "myChart3", "byDay", "oct")

    makeChart(data, "myChart4", "byDay", "nov")

  });

});