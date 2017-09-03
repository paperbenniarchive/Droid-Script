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
  lay3.SetMargins( 0.01, 0.4, 0.01, 0.01 );
  
  lay4 = app.CreateLayout("Linear", "Horizontal, FillX");
  lay1.SetBackColor("white");
  lay.AddChild(lay4);
 
	txtbin =app.CreateText( sum );
	txtbin.SetMargins( 0, 0.1, 0.01, 0.01 );
	txtnum =app.CreateText(suk);
	txtnum.SetMargins( 0, 0.1, 0.01, 0.01 );


	lay1.AddChild(txtbin  );
	lay2.AddChild( txtnum );


	b0 = app.CreateButton( "0", 0.7, -1, "Custom" );
  b0.SetStyle( "green", "#4285F4", 90000,"black", 0.7 , 0 );
  b0.SetTextColor( "black" );
  lay3.AddChild( b0 );
  b0.SetOnTouch( b0_OnTouch );
  
	b1 = app.CreateButton( "1", 0.8, -1, "Custom" );
  b1.SetStyle( "green", "#4285F4", 90000,"black", 0.7 , 0 );
  b1.SetTextColor( "black" );
  lay3.AddChild( b1);
  b1.SetOnTouch( b1_OnTouch );
  
	bb = app.CreateButton( "calc", 0.8, -1, "Custom" );
  bb.SetStyle( "green", "#4285F4", 90000,"black", 0.7 , 0 );
  bb.SetTextColor( "black" );
  lay4.AddChild( bb);
  bb.SetOnTouch( bb_OnTouch );
  
  btnC = app.CreateButton( "C", 0.8, -1, "Custom" );
  btnC.SetStyle( "green", "#4285F4", 90000, "black", 0.7, 0 );
  btnC.SetTextColor( "black" );
  btnC.SetOnTouch( btnC_OnTouch );
  lay4.AddChild( btnC );
}

function btnC_OnTouch()
{
	sum="";
	txtbin.SetText( sum );
	
	suk="";
	txtnum.SetText( sum );
}

function b0_OnTouch() {
  sum += "0";
  txtbin.SetText(sum);
}

function b1_OnTouch() {
  sum += "1";
  txtbin.SetText(sum);
}

function bb_OnTouch()
{  suk = 0
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
	 txtnum.SetText( suk ); 
}