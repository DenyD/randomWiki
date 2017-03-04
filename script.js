$(document).ready(function(){
                  
  $('#search').click(function(){
    var searchTerm=$('#searchTerm').val();
    console.log(searchTerm);
    var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    
 /* $("#search").on("click",function(){
    var searchTerm=$('#searchTerm').val();
    window.open( "https://en.wikipedia.org/w/index.php?title=Special:Search&profile=default&fulltext=1&search="+searchTerm);*/
 
    
    $.ajax({
      type:"GET",
      url:url,
      dataType:"json",
      success:function(data){
       //console.log(data[1][0]);
       //console.log(data[2][0]);
       //console.log(data[3][0]);
        
 $("#output").html('');       
        for (i=0;i<data[1].length;i++){
 $('#output').prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</li>");       
      }},
      error:function(error){
        alert(error);}
      
      });
    });
           
  });
