// Code goes here

 $( function() {
   
    $( "#tags" ).autocomplete({
      //source: 'product.json',
      source : function (request, response) 
            {         
                         
            var source_url = "http://localhost:8080/products?pname="+$("#tags").val();

                $.ajax({
                    url: source_url,
                    dataType: "json",
                    data: request,
                    success: function (data) {

                      console.log('data is:' + data);

                      response(data); },
                    error : function (a,b,c) {  }
                    });
            },      
      minLength: 2,
      select: function( event, ui ) {
       console.log('test');
        console.log(ui);
        //log( "Selected: " + ui.item.value + " aka " + ui.item.id );
      }
    });
  } );
