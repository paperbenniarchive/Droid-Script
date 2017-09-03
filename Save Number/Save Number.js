function OnStart()
{
  num = app.LoadNumber( "MyNumber", 42 );
  app.ShowPopup( num );

  app.SaveNumber( "MyNumber", num+11 );
}