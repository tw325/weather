$.getJSON( "http://api.aerisapi.com/forecasts/11101?client_id=mrWm7AFVW86e9GKKX4xpJ&client_secret=t0UN1tmEkyOaHGuNFlzOZaPXOXuXuaXzW396RBLa", function( data ) {
  var periods = data.response[0].periods;
  var items = [];
  var monthDict = {
    1 : "January",
    2 : "February",
    3 : "March",
    4 : "April",
    5 : "May",
    6 : "June",
    7 : "July",
    8 : "August",
    9 : "September",
    10 : "October",
    11 : "November",
    12 : "December"
  };
  var weekArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];



  $.each( periods, function( index, val ) {
    items.push("<tr>");
    var dateArray = val.dateTimeISO.split("-");
    var year = parseInt(dateArray[0]);
    var month = parseInt(dateArray[1]);
    var day = parseInt(dateArray[2].substring(0,2));
    var date = new Date(val.dateTimeISO.substring(0,10));
    var dayOfWeek = date.getDay();
    
    items.push("<td>" + "<b>"+weekArray[dayOfWeek]+"</b><br> "+monthDict[month]+" "+day+", "+year + "</td>");
    items.push("<td>HIGH: " + val.maxTempF + "</td>");
    items.push("<td>LOW: " + val.minTempF + "</td>");
    items.push("<td><img src=\"img/" + val.icon + "\"> </td>");
    items.push("</tr>");
  });

  $( "<table/>", {
    "class": "forecast",
    html: items.join( "" )
  }).appendTo( "#week" );
});
