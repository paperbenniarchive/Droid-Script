
//Called when application is started.
function OnStart()
{
    //Create a layout with objects vertically centered.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );    
    lay.SetBackColor( "WHITE" );
    //Create an text edit box for password.
    edtPass = app.CreateTextEdit( "put keyword here", 0.4 );
    edtPass.SetTextColor( "#001553" );
    lay.AddChild( edtPass );


	laySlide = app.CreateLayout( "Linear", "FillXY" );
	laySlide.SetPadding( 0, 0.1, 0, 0 ); 
	laySlide.SetBackground( "/Sys/Img/GreenBack.png" );
	laySlide.SetVisibility( "Hide" );
	
	//Create button and add to sliding layout.
	btnBack = app.CreateButton( "Back", 0.3, 0.06, "custom" );
	btnBack.SetOnTouch( btnBack_OnTouch );
	laySlide.AddChild( btnBack );
	
	//Add layouts to app.	
   var s = "<u>Commands</u><br><br>"
        + "\Do you don't trust your messenger or e-mail provider?\<br>"
        + "\Or do you just want to create your own secret language?\<br>"
        + "\Then you've come to the right place!\<br>"
        + "\How are you?\<br>"
        + "\"Exit\"<br>";
    txt = app.CreateText( s, 0.9, 0.8, "Multiline,Html" );
    txt.SetTextSize( 20 );
    laySlide.AddChild( txt );
  
    //Create an text edit box for message
    edt = app.CreateTextEdit( "put your message here", 0.8, 0.3 );
    edt.SetMargins( 0,0.1,0,0 );
    edt.SetTextColor( "BLUE" );
    edt.SetCursorColor("#352B48"  );
    lay.AddChild( edt );
    
    //Create an 'Encrypt' button..
    btnEncrypt = app.CreateButton( "Encrypt", 0.7, 0.1, "Custom");
    btnEncrypt.SetOnTouch( btnEncrypt_OnTouch );
    lay.AddChild( btnEncrypt );

    //Create an 'Decrypt' button..
    btnDecrypt = app.CreateButton( "Decrypt", 0.7, 0.1, "Custom" );
    btnDecrypt.SetOnTouch( btnDecrypt_OnTouch );
    lay.AddChild( btnDecrypt );
    
    //Create a 'Hash' button..
    btnHash = app.CreateButton( "Hash", 0.7, 0.1, "Custom" );
    btnHash.SetOnTouch( btnHash_OnTouch );
    lay.AddChild( btnHash );
    
    btnCopy = app.CreateButton( "Copy to clipboard", 0.7, -1, "Custom");
  //  btnCopy.SetStyle( "#4285F4", "#4285F4", 4 );
    btnCopy.SetOnTouch( btnCopy_OnTouch );
    lay.AddChild( btnCopy );
    
    //create a help button
    
    btnHelp = app.CreateButton( "Help", 0.7,0.1,  "Custom" );
    btnHelp.SetOnTouch( btnHelp_OnTouch );
    lay.AddChild( btnHelp );
    //Add layout to app.    
    app.AddLayout( lay );
  app.AddLayout( laySlide );  
    //Create Cryptography object.
    crypt = app.CreateCrypt();
}

//Called when user touches 'Encrypt' button.
function btnEncrypt_OnTouch()
{ 
    //Get password and text.
    var pass = edtPass.GetText();
    var txt = edt.GetText();
    
    //Encrypt text.
    var txt = crypt.Encrypt( txt, pass );
    edt.SetText( txt );
}

//Called when user touches 'Decrypt' button.
function btnDecrypt_OnTouch()
{
    //Get password and text.
    var pass = edtPass.GetText();
    var txt = edt.GetText();
    
    //Decrypt text.
    txt = crypt.Decrypt( txt, pass );
    edt.SetText( txt );
}

//Genrate MD5 Hash of password.
function btnHash_OnTouch()
{
    var pass = edtPass.GetText();
    var md5 = crypt.Hash( pass, "MD5"); 
    app.ShowPopup( md5 );
}


function btnCopy_OnTouch(){
	app.SetClipboardText(	edt.GetText()  );
	}


function btnBack_OnTouch()
{
	laySlide.Animate( "SlideToLeft" );	
}

	
function btnHelp_OnTouch()
{
	laySlide.Animate("SlideFromLeft");
}
