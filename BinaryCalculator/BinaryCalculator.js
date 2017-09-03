var sum = "";

var col = "white";

function OnStart()
{
// erstes Layout
	lay1 = app.CreateLayout( "Linear", "VCenter, FillXY" );
	lay1.SetBackColor( col );
	lay1.SetPadding( 0, 0.4 );
	lay1.SetOnTouch( Srt_OnTouch );
	// Text "Binary Calculator"
	txt1 = app.CreateText( "Binary Calculator" );
	txt1.SetTextColor( "black" );
	txt1.SetTextSize( 30 );
	txt1.SetOnTouch( Srt_OnTouch );
	// zweites Layout, unter dem ersten
	lay11 = app.CreateLayout( "Linear", "VCenter, FillXY" );
	lay11.SetBackColor( col );
	lay11.SetPadding( 0, 0.2, 0, 0.285 );
	lay11.SetOnTouch( Srt_OnTouch );
	// Text "Click to Continue"
	txt11 = app.CreateText( "Click to Continue" );
	txt11.SetTextSize( 20 );
	txt11.SetTextColor( "black" );
	txt11.SetOnTouch( Srt_OnTouch );
	// erste Seite fertig
	lay11.AddChild( txt11 );
	lay1.AddChild( txt1 );
	lay1.AddChild( lay11 );
	app.AddLayout( lay1 );
	
	// zweite Seite, Layout "Srt"
	laySrt1 = app.CreateLayout( "Linear", "FillXY" );
  laySrt1.SetVisibility( "Hide" );
  laySrt1.SetBackColor( col );
  // Text "Menu"
  txtSrt1 = app.CreateText( "Menu" );
  txtSrt1.SetTextSize( 36 );
  txtSrt1.SetTextColor( "black" );
  laySrt1.AddChild( txtSrt1 );
  // Balken unter dem Text "Menu"
  imgSrt = app.CreateImage( null, 1, 0.01 );
  laySrt1.AddChild( imgSrt );
  
  // Seite 2, Layout 2, "laySrt2"
  laySrt2 = app.CreateLayout( "Linear", "VCenter, FillXY" );
  laySrt2.SetBackColor( col );
  laySrt1.AddChild( laySrt2 );

  //Buttons für Seite 2
  //Button "Settings"
  btnSrt1 = app.CreateButton( "Settings", 0.3, 0.07, "gray" );
  btnSrt1.SetTextSize( 17 );
  btnSrt1.SetMargins( 0.01, 0.03, 0.01, 0 );
  btnSrt1.SetOnTouch( btnSrt1_OnTouch );
  // Button "Help"
  btnSrt2 = app.CreateButton( "Help", 0.3, 0.07, "gray" );
  btnSrt2.SetTextSize( 17 );
  btnSrt2.SetMargins( 0.01, 0.03, 0.01, 0 );
  //btnSrt2.SetOnTouch( btnSrt2_OnTouch );
  // Button "Start"
  btnSrt3 = app.CreateButton( "Start", 0.3, 0.07, "gray" );
  btnSrt3.SetTextSize( 17 );
  btnSrt3.SetOnTouch( btnSrt3_OnTouch );
  // Button um die App zu schließen "Exit"
  btnExt = app.CreateButton( "Exit", 0.3, 0.07, "gray" );
  btnExt.SetTextSize( 17 );
  btnExt.SetMargins( 0.01, 0.03, 0.01, 0.01 );
  btnExt.SetOnTouch( btnExt_OnTouch );
  
  laySrt2.AddChild( btnSrt3 );
  laySrt2.AddChild( btnSrt1 );
  laySrt2.AddChild( btnSrt2 );
  laySrt2.AddChild( btnExt );
  
  app.AddLayout( laySrt1 );
  
  // Seite Calculator Buchstaben
  
  // Seite Calculator Layout 1
  layCalc1 = app.CreateLayout( "Linear",  "Vertical" );
  layCalc1.SetBackColor( col );
  layCalc1.SetVisibility( "Hide" );
  layCalc11 = app.CreateLayout( "Linear", "Horizontal, Left, FillXY" );
  layCalc11.SetBackColor( col );
  layCalc1.AddChild( layCalc11 );
  // Seite Calculator Layout 1 Button "Back"
  btnCalc1 = app.CreateButton( "Back", 0.19, 0.07, "gray" );
  btnCalc1.SetOnTouch( btnCalc1_OnTouch );
  btnCalc1.SetMargins( 0.01, 0.01, 0.1, 0.01 );
  layCalc11.AddChild( btnCalc1 );
  // Seite Calculator Layout 1 Text "Letters-Calculator"
  txtCalc1 = app.CreateText( "Letters-Calculator" );
  txtCalc1.SetTextColor( "black" );
  txtCalc1.SetMargins( -0.05, 0.02, 0.01, 0.01 );
  txtCalc1.SetTextSize( 27 );
  layCalc11.AddChild( txtCalc1 );
  // Seite Calculator Image 1
  imgCalc1 = app.CreateImage( null, 1, 0.01 );
  layCalc1.AddChild( imgCalc1 );
  // Seite Calculator Layout 2
  layCalc2 = app.CreateLayout( "Linear", "Vertical, FillXY" );
  layCalc2.SetBackColor( col );
  layCalc21 = app.CreateLayout( "Linear", "Horizontal, FillXY" );
  layCalc21.SetBackColor( col );
  layCalc21.SetSize( 1, 0.6 );
  
  // Feld, wo die Binärzahlen reinkommen
  txtCalc21 = app.CreateText( "", 1, 0.1 );
  txtCalc21.SetTextSize( 42 );
  txtCalc21.SetTextColor( "black" );
  txtCalc21.SetMargins( 0, 0.1, 0, 0.3 );
  
  // Button "C"
  btnCalcC = app.CreateButton( "C", 0.2, 0.1, "gray" );
  btnCalcC.SetTextSize( 23 );
  btnCalcC.SetOnTouch( btnCalcC_OnTouch );
  
  // Button "0"
  btnCalc21 = app.CreateButton( "0", 0.2, 0.1, "gray" );
  btnCalc21.SetTextSize( 23 );
  btnCalc21.SetMargins( 0.07, 0, 0.01, 0 );
  btnCalc21.SetOnTouch( btnCalc21_OnTouch );
  
  // Button "1"
  btnCalc22 = app.CreateButton( "1", 0.2, 0.1, "gray" );
  btnCalc22.SetTextSize( 21 );
  btnCalc22.SetMargins( 0, 0, 0.07, 0 );
  btnCalc22.SetOnTouch( btnCalc22_OnTouch );
  
  // Button "="
  btnCalc23 = app.CreateButton( "=", 0.2, 0.1, "gray" );
  btnCalc23.SetTextSize( 23 );
  btnCalc23.SetOnTouch( btnCalc23_OnTouch );
  
  layCalc2.AddChild( txtCalc21 );
  layCalc21.AddChild( btnCalcC );
  layCalc21.AddChild( btnCalc21 );
  layCalc21.AddChild( btnCalc22 );
  layCalc21.AddChild( btnCalc23 );
  
  layCalc2.AddChild( layCalc21 );
  
  layCalc1.AddChild( layCalc2 );
  
  // Seite Settings 
  
  //Layout Settings All
	laySet = app.CreateLayout( "Linear", "FillXY" );
	laySet.SetBackColor( "white" );
	laySet.SetVisibility( "Hide" );
	txtSet = app.CreateText( "Settings" );
	txtSet.SetTextSize( 30 );
	txtSet.SetTextColor( "black" );
	//buttons layout Settings
	btnCol = app.CreateButton( "Coloroptions", 0.3, 0.06, "gray" );
	btnCol.SetOnTouch( btnCol_OnTouch );
	btnSet = app.CreateButton( "Back", 0.3, 0.06, "gray" );
	btnSet.SetOnTouch( btnSet_OnTouch );
	laySet.AddChild( txtSet );
	app.AddLayout( laySet );
	//Image Settings
	imgSet = app.CreateImage( null, 1, 0.01 );
	laySet.AddChild( imgSet );
	//Layout Settings 2
	laySet2 = app.CreateLayout( "Linear", "VCenter, FillXY" );
	laySet2.SetBackColor( "white" );
	laySet.AddChild( laySet2 );
	laySet2.AddChild( btnCol );
	laySet2.AddChild( btnSet );

	//layCol
	layCol= app.CreateLayout( "Linear", "FillXY" );
	layCol.SetBackColor( "white" );
	layCol.SetVisibility( "Hide" );
	txtCol = app.CreateText( "Coloroptions" );
	txtCol.SetTextSize( 30 );
	txtCol.SetTextColor( "Black" )
	app.AddLayout( layCol );
	imgCol = app.CreateImage( null, 1, 0.01 );
	layCol.AddChild( txtCol );
	layCol.AddChild( imgCol );
	btnColg = app.CreateButton( "Green", 0.3, 0.06, "gray" );
	btnColg.SetOnTouch( btnColg_OnTouch );
	btnColw = app.CreateButton( "White", 0.3, 0.06, "gray" );
	btnColw.SetOnTouch( btnColw_OnTouch );
	btnColr = app.CreateButton( "Red", 0.3, 0.06, "gray" );
	btnColr.SetOnTouch( btnColr_OnTouch );
	btnColb = app.CreateButton( "Blue", 0.3, 0.06, "gray" );
	btnColb.SetOnTouch( btnColb_OnTouch );
	btnColBack = app.CreateButton( "Back", 0.3, 0.06, "gray" );
	btnColBack.SetOnTouch( btnColBack_OnTouch );
	layCol2 = app.CreateLayout( "Linear", "VCenter, FillXY" );
	layCol2.SetBackColor( "white" );
	layCol2.AddChild( btnColg );
	layCol2.AddChild( btnColw );
	layCol2.AddChild( btnColr );
	layCol2.AddChild( btnColb );
	layCol2.AddChild( btnColBack );
	layCol.AddChild( layCol2 );
  
  lay = app.CreateLayout( "Linear", "FillXY" );
  lay.SetBackColor( col );
  
  app.AddLayout( layCalc1 );
  
  DrawPicture();
  
  app.EnableBackKey( false );
  
  app.SetScreenMode( "game" );
}

// alle Images
function DrawPicture()
{
	imgSrt.SetColor( "white" );
	imgSrt.SetLineWidth( 12 );
	imgSrt.SetPaintColor( "black" );
	imgSrt.DrawLine( 0, 0, 1, 0 );
	
	imgCalc1.SetColor( "white" );
	imgCalc1.SetLineWidth( 12 );
	imgCalc1.SetPaintColor( "black" );
	imgCalc1.DrawLine( 0, 0, 1, 0 );
	
	imgCol.SetColor( "white" );
	imgCol.SetLineWidth( 12 );
	imgCol.SetPaintColor( "black" );
	imgCol.DrawLine( 0, 0, 1, 0 );
	
	imgSet.SetColor( "white" );
	imgSet.SetLineWidth( 12 );
	imgSet.SetPaintColor( "black" );
	imgSet.DrawLine( 0, 0, 1, 0 );
}

// erste Seite_OnTouch
function Srt_OnTouch()
{
	//lay1.Animate( "SlideToLeft" );
	laySrt1.SetVisibility( "Show" );
	laySrt1.Animate( "SlideFromRight" );
	lay1.Animate( "SlideToLeft" );
}

// Seite 2_OnTouch
function btnSrt3_OnTouch()
{
	layCalc1.SetVisibility( "Show" );
	layCalc1.Animate( "SlideFromTop" );
	laySrt1.Animate( "SlideToBottom" );
	laySrt1.SetVisibility( "Show" );
}

// Seite Calculator Buchstaben_OnTouch
function btnCalc1_OnTouch()
{
	laySrt1.SetVisibility( "Show" );
	layCalc1.Animate( "SlideToTop" );
	laySrt1.Animate( "SlideFromBottom" );
	layCalc1.SetVisibility( "Hide" );
}

function btnCalc21_OnTouch()
{
	sum += 0;
	
	txtCalc21.SetText( sum );
}

function btnCalc22_OnTouch()
{
	sum += 1;
	
	txtCalc21.SetText( sum );
}

function btnCalcC_OnTouch()
{
	sum = "";
	
	txtCalc21.SetText( sum );
}


function btnCalc23_OnTouch()
{
	var txtBin = txtCalc21.GetText();
	
	if (txtBin=="01000001") sum = "A";
	
	else if (txtBin=="01100001") sum = "a";
	
	else if (txtBin=="01000010") sum = "B";
	
	else if (txtBin=="01100010") sum = "b";
	
	else if (txtBin=="01000011") sum = "C";
	
	else if (txtBin=="01100011") sum = "c";
	
	else if (txtBin=="01000100") sum = "D";
	
	else if (txtBin=="01100100") sum = "d";
	
	else if (txtBin=="01000101") sum = "E";
	
	else if (txtBin=="01100101") sum = "e";
	
	else if (txtBin=="01000110") sum = "F";
	
	else if (txtBin=="01100110") sum = "f";
	
	else if (txtBin=="01000111") sum = "G";
	
	else if (txtBin=="01100111") sum = "g";
	
	else if (txtBin=="01001000") sum = "H";
	
	else if (txtBin=="01101000") sum = "h";
	
	else if (txtBin=="01001001") sum = "I";
	
	else if (txtBin=="01101001") sum = "i";
	
	else if (txtBin=="01001010") sum = "J";
	
	else if (txtBin=="01101010") sum = "j";
	
	else if (txtBin=="01001011") sum = "K";
	
	else if (txtBin=="01101011") sum = "k";
	
	else if (txtBin=="01001100") sum = "L";
	
	else if (txtBin=="01101100") sum = "l";
	
	else if (txtBin=="01001101") sum = "M";
	
	else if (txtBin=="01101101") sum = "m";
	
	else if (txtBin=="01001110") sum = "N";
	
	else if (txtBin=="01101110") sum = "n";
	
	else if (txtBin=="01001111") sum = "O";
	
	else if (txtBin=="01001111") sum = "o";
	
	else if (txtBin=="01010000") sum = "P";
	
	else if (txtBin=="01110000") sum = "p";
	
	else if (txtBin=="01010001") sum = "Q";
	
	else if (txtBin=="01110001") sum = "q";
	
	else if (txtBin=="01010010") sum = "R";
	
	else if (txtBin=="01110010") sum = "r";
	
	else if (txtBin=="01010011") sum = "S";
	
	else if (txtBin=="01110011") sum = "s";
	
	else if (txtBin=="01010100") sum = "T";
	
	else if (txtBin=="01110100") sum = "t";
	
	else if (txtBin=="01010101") sum = "U";
	
	else if (txtBin=="01110101") sum = "u";
	
	else if (txtBin=="01010110") sum = "V";
	
	else if (txtBin=="01110110") sum = "v";
	
	else if (txtBin=="01010111") sum = "W";
	
	else if (txtBin=="01110111") sum = "w";
	
	else if (txtBin=="01011000") sum = "X";
	
	else if (txtBin=="01111000") sum = "x";
	
	else if (txtBin=="01011001") sum = "Y";
	
	else if (txtBin=="01111001") sum = "y";
	
	else if (txtBin=="01011010") sum = "Z";
	
	else if (txtBin=="01111010") sum = "z";
	
	else sum = "ERROR";
	
	txtCalc21.SetText( sum );
}

function btnCol_OnTouch()
{
	laySet.SetVisibility( "Hide" );
	layCol.SetVisibility( "Show" );
}

function btnSet_OnTouch()
{
	laySet.SetVisibility( "Hide" );
	laySrt1.SetVisibility( "Show" );
}

function btnColBack_OnTouch()
{
	layCol.SetVisibility( "Hide" );
	laySet.SetVisibility( "Show" );
}

function btnSrt1_OnTouch()
{
	laySrt1.SetVisibility( "Hide" );
	laySet.SetVisibility( "Show" );
}

function btnExt_OnTouch()
{
	var YN = app.CreateYesNoDialog( "Exit App?" );
	YN.SetOnTouch( YN_OnTouch );
	YN.Show();
}

function YN_OnTouch( result )
{
	if ( result=="Yes" ) app.Exit();
}


function btnColg_OnTouch()
{
	var col = "green";
		
	laySrt1.SetBackColor( col );
	laySrt2.SetBackColor( col );
	lay1.SetBackColor( col );
	lay11.SetBackColor( col );
	layCalc1.SetBackColor( col );
	layCalc11.SetBackColor( col );
	layCalc2.SetBackColor( col );
	layCalc21.SetBackColor( col );
	laySet.SetBackColor( col );
	laySet2.SetBackColor( col );
	layCol.SetBackColor( col );
	layCol2.SetBackColor( col );
}

function btnColw_OnTouch()
{
	var col = "white";
		
	laySrt1.SetBackColor( col );
	laySrt2.SetBackColor( col );
	lay1.SetBackColor( col );
	lay11.SetBackColor( col );
	layCalc1.SetBackColor( col );
	layCalc11.SetBackColor( col );
	layCalc2.SetBackColor( col );
	layCalc21.SetBackColor( col );
	laySet.SetBackColor( col );
	laySet2.SetBackColor( col );
	layCol.SetBackColor( col );
	layCol2.SetBackColor( col );
}

function btnColr_OnTouch()
{
	var col = "red";
	
	laySrt1.SetBackColor( col );
	laySrt2.SetBackColor( col );
	lay1.SetBackColor( col );
	lay11.SetBackColor( col );
	layCalc1.SetBackColor( col );
	layCalc11.SetBackColor( col );
	layCalc2.SetBackColor( col );
	layCalc21.SetBackColor( col );
	laySet.SetBackColor( col );
	laySet2.SetBackColor( col );
	layCol.SetBackColor( col );
	layCol2.SetBackColor( col );
}

function btnColb_OnTouch()
{
	var col = "blue";	
	
	laySrt1.SetBackColor( col );
	laySrt2.SetBackColor( col );
	lay1.SetBackColor( col );
	lay11.SetBackColor( col );
	layCalc1.SetBackColor( col );
	layCalc11.SetBackColor( col );
	layCalc2.SetBackColor( col );
	layCalc21.SetBackColor( col );
	laySet.SetBackColor( col );
	laySet2.SetBackColor( col );
	layCol.SetBackColor( col );
	layCol2.SetBackColor( col );
}