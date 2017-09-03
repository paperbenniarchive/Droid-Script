var sum = ""
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
	suk = 0
	 y = 0

	var bam = sum
	var zahl =""
	zahl -=3
	zahl +=3

	x = zahl % 1
	zahl += (bam  - x) / 1 *  2
	zahl = Math.pow( zahl  , y)
	x ++
	y++ 
	suk = zahl
	 
	check = ""
	  
	if (sum > 99)check = sum% 1000
	if (check == "1") suk += 8
	 
	 
	check = sum% 10000
	if (check == "1") suk += 16
	check = sum% 100000
	if (check == "1") suk += 32
	check = sum% 1000000
	if (check == "1") suk += 64
	check = sum% 10000000
	if (check == "1") suk += 128
	check = sum% 100000000
	if (check == "1") suk += 256
	txtNum.SetText( suk ); 
}