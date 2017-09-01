// lool du bimst 1 spassd
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	
lay.SetBackColor( "WHITE" );
cam = app.CreateCameraView(1,1 );
laytop = app.CreateLayout( "Linear", "VCenter,FillXY" );
laytop.SetBackColor( "WHITE" );
 lay.AddChild( cam );
	app.AddLayout( lay );
app.AddLayout( laytop );
	cam.SetFlash( true );
	app.SetScreenBrightness( 1 );
}



