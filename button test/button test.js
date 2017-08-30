function OnStart()
{
  lay = app.CreateLayout( "Linear", "Vertical,FillXY" );
 
  //--- Standard buttons ---
  
  layDark =  app.CreateLayout( "Linear", "Vertical" );
  layDark.SetBackColor( "black" );
  layDark.SetPadding( 0.1, 0.05, 0.1, 0.05 );
  lay.AddChild( layDark );
  
  b1 = app.CreateButton( "Normal", 0.7 );
  layDark.AddChild( b1 );

  b2 = app.CreateButton( "Gray",  0.7, -1, "Gray" );
  layDark.AddChild( b2 );

  b3 = app.CreateButton( "Alum",  0.7, -1, "Alum" );
  layDark.AddChild( b3 );
  
  //--- Custom buttons ---
  
  layLight =  app.CreateLayout( "Linear", "Vertical" );
  layLight.SetBackColor( "white" );
  layLight.SetPadding( 0.1, 0.1, 0.1, 0.1 );
  lay.AddChild( layLight );
  
  //style params: color1,color2,radius,strokeClr,strokeWidth,shadow
  b4 = app.CreateButton( "Cm", 0.7, -1, "Custom" );
  b4.SetStyle( "GREEN", "#4285F4", 4 );
  layLight.AddChild( b4 );
  
  b5 = app.CreateButton( "Custom", 0.7, -1, "Custom" );
  b5.SetStyle( "#ff0000", "#aa0000", 10 );
  b5.SetTextShadow( 2, 0, 1, "#880000" );
  layLight.AddChild( b5 );
  
  b6 = app.CreateButton( "<i>Custom<i>", 0.7, -1, "Custom,HTML" );
  b6.SetStyle( "#22aa22", "#22aa22", 20, "#228822", 2, 0 );
  layLight.AddChild( b6 );
  
  var txt = "<font color=#ff4444>C</font>"
    + "<font color=#228822>usto</font>"
    + "<font color=#2222ff>m</font>";
  b7 = app.CreateButton( txt, 0.7, -1, "Custom,HTML" );
  b7.SetStyle( "#ffffff", "#cccccc", 20, "#999999", 1, 0 );
  layLight.AddChild( b7 );
  
  app.AddLayout( lay );
}

