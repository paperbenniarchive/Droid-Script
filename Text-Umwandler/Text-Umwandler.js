function OnStart()
{
	
	but = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
	
	//bot = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y" "z" ];
	
	lay1 = app.CreateLayout( "Linear", "FillXY" );
	lay1.SetBackColor( "white" );
	
	lay2 = app.CreateLayout( "Linear", "Horizontal, FillX" );
	lay2.SetBackColor( "white" );
	
	lay3 = app.CreateLayout( "Linear", "Horizontal, FillX" );
	lay3.SetBackColor( "white" );
	
	lay4 = app.CreateLayout( "Linear", "Horizontal, FillX" );
	lay4.SetBackColor( "white" );
	
	lay5 = app.CreateLayout( "Linear", "Horizontal, FillX" );
	lay5.SetBackColor( "white" );
	
	lay6 = app.CreateLayout( "Linear", "Horizontal, FillX" );
	lay6.SetBackColor( "white" );
	
	lay7 = app.CreateLayout( "Linear", "Horizontal, FillX" );
	lay7.SetBackColor( "white" );
	
	txt1 = app.CreateText( "lol" );
	txt1.SetTextSize( 23 );
	txt1.SetTextColor( "black" );
	lay2.AddChild( txt1 );
	
	txt2 = app.CreateText( "lel" );
	txt2.SetTextSize( 23 );
	txt2.SetTextColor( "black" );
	lay3.AddChild( txt2 );
	
	for( i=0; i>7; i++ ) AddButton( lay4, but[i] );
	
	for( i=7; i>14; i++ ) AddButton( lay5, but[i] );
	
	for( i=14; i>21; i++ ) AddButton( lay6, but[i] );
	
	for( i=21; i>26; i++ ) AddButton( lay7, but[i] );
	
	lay1.AddChild( lay2 );
	lay1.AddChild( lay3 );
	lay1.AddChild( lay4 );
	lay1.AddChild( lay5 );
	lay1.AddChild( lay6 );
	lay1.AddChild( lay7 );
	//lay1.AddChild(  );
	//lay1.AddChild(  );
	
	app.AddLayout( lay1 );
}

function AddButton( lay, name )
{
	
	app.CreateButton( name, 0.1, 0.1, "gray" );
	lay.AddChild( btn );
}