var sum =  ""
var suk = ""
var check = ""
var x = 1
var y = 0
function OnStart() 
{
  app.SetOrientation("Portrait");

  lay = app.CreateLayout("Linear", "Vertical, FillXY");
  lay.SetBackColor("white")
  app.AddLayout( lay );

  lay1 = app.CreateLayout("Linear", "Horizontal, FillX");
  lay1.SetBackColor("white");
  lay.AddChild(lay1);
  
  lay2 = app.CreateLayout("Linear", "Horizontal, FillX");
  lay2.SetBackColor("white");
  lay.AddChild(lay2);
  
  lay3 = app.CreateLayout("Linear", "Horizontal, FillX");
  lay3.SetBackColor("white");
  lay.AddChild(lay3);
  lay3.SetMargins( 0, 0.4, 0, 0.02 );
  
  lay4 = app.CreateLayout("Linear", "Horizontal, FillX");
  lay1.SetBackColor("white");
  lay.AddChild(lay4);
 
	txtBin =app.CreateText( sum );
	txtBin.SetMargins( 0, 0.1, 0.01, 0.01 );
	txtBin.SetTextColor( "black" );
	txtNum =app.CreateText(suk);
	txtNum.SetMargins( 0, 0.1, 0.01, 0.01 );
	txtNum.SetTextColor( "black" );
	
	lay1.AddChild(txtBin  );
	lay2.AddChild( txtNum );
	
	btn0 = app.CreateButton( "0", 0.8, -1, "Custom" );
  btn0.SetStyle( "green", "#4285F4", 90000,"black", 0.7 , 0 );
  btn0.SetTextColor( "black" );
  lay3.AddChild( btn0 );
  btn0.SetOnTouch( btn0_OnTouch );
  
	btn1 = app.CreateButton( "1", 0.8, -1, "Custom" );
  btn1.SetStyle( "green", "#4285F4", 90000,"black", 0.7 , 0 );
  btn1.SetTextColor( "black" );
  lay3.AddChild( btn1);
  btn1.SetOnTouch( btn1_OnTouch );
  
	btnClc = app.CreateButton( "=", 0.8, -1, "Custom" );
  btnClc.SetStyle( "green", "#4285F4", 90000,"black", 0.7 , 0 );
  btnClc.SetTextColor( "black" );
  lay4.AddChild( btnClc);
  btnClc.SetOnTouch( btnClc_OnTouch );
  
  btnC = app.CreateButton( "C", 0.8, -1, "Custom" );
  btnC.SetStyle( "green", "#4285F4", 90000, "black", 0.7, 0 );
  btnC.SetTextColor( "black" );
  btnC.SetOnTouch( btnC_OnTouch );
  lay4.AddChild( btnC );
}

function btnC_OnTouch()
{
	sum="";
	txtBin.SetText( sum );
	
	suk="";
	txtNum.SetText( sum );
	x= 1
    	check= ""
}

function btn0_OnTouch() 
{
  sum += "0";
  txtBin.SetText(sum);
}

function btn1_OnTouch() 
{
  sum += "1";
  txtBin.SetText(sum);
  
}

function btnClc_OnTouch()
{
    check-=3
    check+=3
    
    while (x<sum.length+1) {
        check+= ((sum % (Math.pow(10,x)))-(sum % (Math.pow(10,x-1))))/ (Math.pow(10,x-1))* Math.pow(2,x-1)
    x++
    
    txtNum.SetText(check)}
    
}
