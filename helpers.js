  numberOfSalesByPeriod = function (dataSet, period){
    start = startFrom(period)
    var counts = {};
    for(var i = 0; i< dataSet.length; i++) {
      if (dataSet[i].dispenseDate){
        var date = dataSet[i].dispenseDate.substr(start,2);
        counts[date] = counts[date] ? counts[date]+1 : 1;
      };
    };
    return counts
  };

  startFrom = function(period){
    if (period === "day"){ return 8 }; 
    if (period === "month"){ return 5};
  }

  stateTrue = function(listOfItems){
    var result = []
    for (var i=0; i<listOfItems.length; i++){
      if (listOfItems[i].statePattern){
        result.push(listOfItems[i])
      }
    }
    return result
  }

  vals = function(keys, object){
    val = []
    for (var i =0; i<keys.length; i++) {
      var key = keys[i]
      object[key] ? val.push(object[key]) : val.push(0)  
    }
    return val
  };

  extractMonth = function(data, monthNumber){
    result = []
    for (var i=0; i<data.length; i++){
      if (data[i].dispenseDate){
        month = data[i].dispenseDate.substr(5,2)
        if (month === monthNumber){
          result.push(data[i])
        };
      };
    };
    return result
  }

  listOfPercentage = function(list1, list2){
    result = []
    for (var i=0; i<list1.length; i++){  
      result[i] = Math.round(list2[i]*100/list1[i])
    };
    return result
  }

  optionsForChart = function(percentageList){
    options = {
      showTooltips: false,
      onAnimationComplete: function () {

        var ctx = this.chart.ctx;
        ctx.font = this.scale.font;
        ctx.fillStyle = this.scale.textColor
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        ourBars = this.datasets[1].bars

        this.datasets[1].bars.forEach(function (bar) {
          ctx.fillText(percentageList[ourBars.indexOf(bar)], bar.x, bar.y - 5);
        });
      }
    };
    return options
  }