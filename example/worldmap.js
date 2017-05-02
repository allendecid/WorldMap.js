<!DOCTYPE html>
<html>
<head>
<style>
    
</style>
<!-- datatables -->
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 <link rel="stylesheet" href="css/worldmap.v1.css">
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> 
<script src="//d3js.org/topojson.v1.min.js">
<!-- jQuery library -->


<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css">

<!-- datatables -->
<script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
<script src="https://d3js.org/d3.v3.min.js"></script>
<script src="//d3js.org/d3.geo.projection.v0.min.js"></script>
 <script src="//d3js.org/queue.v1.min.js"></script>


</head>
<body>
    
    <div id="contenedor"> 

</div>
  

</div>
           <script src="js/worldmap.v1.js"></script>
<script>


       var createmap = new Worldmap({
   
    elementid: "#contenedor",
width:747,
        height:468,
        mapstyle: {
        ocean: "white",
        region: "lightblue",
        border : "#ffffff"
    },
    
    project: { 
        name: "Orthographic",
        // name: "Aitoff",
        //name: "Mercator",
        zoomlevel: 6
        //zoomarea:[-122.417, 37.775]
       // center:[-41,174]
      },
    showtable:false,
    editpanel:false,
   // zoomlevel: 6,
   // gotoarea:[-122.417, 37.775],
 
   defaultfill: "#7f1a1a",
   defaultsize: 20,
   data:[{origin:"US",target:"ES"},{origin:"US",target:"CL"},{origin:"MX",target:"CO"},{origin:"AR",target:"BR"},{origin:"US",target:"CA"}],
   plugin: "arcs",
  //data:[{"latitude":29.9510658,"longitude":-90.0715323,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"20","height":"20"},{"latitude":40.65,"longitude":-73.95,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"15","height":"20"},{"latitude":42.2808256,"longitude":-83.7430378,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"18","height":"20"},{"latitude":34.0522342,"longitude":-118.2436849,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"15","height":"20"},{"latitude":28.5383355,"longitude":-81.3792365,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"30","height":"20"},{"latitude":40.4406248,"longitude":-79.9958864,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"35","height":"20"}],
  //plugin: "images",
        zoomable: true}); 
  //  setTimeout(function(){createmap.update([{origin:"ES",target:"US"},{origin:"US",target:"CL"},{origin:"CL",target:"AR"},{origin:"AR",target:"BR"},{origin:"BR",target:"EG"},{origin:"EG",target:"BE"}],"arcs")}, 7000)


setTimeout(function(){createmap.update([{"location":"MX","2008":"4487.21683","2009":"3613.37333","2010":"3117.170779"},{"location":"US","2008":"2014","2009":"4924","2010":"2345"},{"location":"CA","2008":"4079.154455","2009":"6582.25541","2010":"3377.846283"},{"location":"RU","2008":"13798.98219","2009":"10222.43894","2010":"14935.56198"},{"location":"BR","2008":"16823.42243","2009":"4667.990667","2010":"14900.90889"},{"location":"CO","2008":"2436.276018","2009":"19398.35665","2010":"18885.26967"},{"location":"GB","2008":"16823.42243","2009":"4667.990667","2010":"14900.90889"},{"location":"DZ","2008":"4079.154455","2009":"6582.25541","2010":"3377.846283"},{"location":"GL","2008":"16823.42243","2009":"4667.990667","2010":"14900.90889"},{"location":"NO","2008":"4079.154455","2009":"6582.25541","2010":"3377.846283"}],"barchart")}, 3000)
setTimeout(function(){createmap.update([{"location":"RU","text":"14487.21683","size":"20","color":"black"},{"location":"CA","text":"14487.21683","size":"20","color":"white"},{"location":"BR","text":"2014.401013","size":"25","color":"white"},{"location":"GB","text":"4079.154455","size":"18","color":"black"},{"location":"GL","text":"13798.98219","size":"15","color":"green"},{"location":"MX","text":"16823.42243","size":"20","color":"blue"},{"location":"US","text":"2436.276018","size":"25","color":"yellow"}],"text")}, 2000)

    //setTimeout(function(){createmap.update([{"latitude":29.9510658,"longitude":-90.0715323,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"20","height":"20"},{"latitude":40.65,"longitude":-73.95,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"15","height":"20"},{"latitude":42.2808256,"longitude":-83.7430378,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"18","height":"20"},{"latitude":34.0522342,"longitude":-118.2436849,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"15","height":"20"},{"latitude":28.5383355,"longitude":-81.3792365,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"30","height":"20"},{"latitude":40.4406248,"longitude":-79.9958864,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"35","height":"20"}],"images")}, 3000)

 //   setTimeout(function(){createmap.update([{"latitude":29.9510658,"longitude":-90.0715323,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"20","height":"20"},{"latitude":40.65,"longitude":-73.95,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"15","height":"20"},{"latitude":42.2808256,"longitude":-83.7430378,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"18","height":"20"},{"latitude":34.0522342,"longitude":-118.2436849,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"15","height":"20"},{"latitude":28.5383355,"longitude":-81.3792365,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"30","height":"20"},{"latitude":40.4406248,"longitude":-79.9958864,"image":"https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png","width":"35","height":"20"}],"images")}, 3000)
 
  /* setTimeout(function(){createmap.update([ {name: 'Bubble 1', coordinates: [21.32,  -7.32], size: 15, color: 'red'},
 {name: 'Bubble 2', coordinates: [12.32, 27.32], size: 10, color: 'blue'},
 {name: 'Bubble 3', coordinates: [0.32, 23.32], size: 5, color: 'magenta'},
 {name: 'Bubble 4', coordinates: [-31.32, 23.32], size: 15, color: 'black'}],"bubbles")}, 6000)
 */
    
    
   
  </script>



<script>


     
</script>

</body>
</html>
