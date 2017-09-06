_AddPermissions("FontAwesome");

app.CreateUIExtras = function()
{
	return new UIExtras;
}

function UIExtras( options )
{
    this.plg = _CreatePlugin( "org.droidscript.plugins.UIExtras", options );
    
    this.dlgCache = {
    	dpd: null, // DatePickerDialog instance
    	tpd: null, // TimePickerDialog instance
    	cpd: null  // ColorPickerDialog instance
    };

	this.GetVersion = function( num, txt )
	{
		return parseFloat( this.plg.Send( "GetVersion" ) ); 
	}
	
	this.CreatePicker = function(list, width, height, options)
	{
		var w = (width !== -1) ? app.GetDisplayWidth() * width : -1;
		var h = (height !== -1) ? app.GetDisplayHeight() * height : -1;
	
		var ret = this.plg.CreateObj("Picker", list, w, h, options);
        
        if(ret)
        {
        	return new UIXPicker(ret, this.plg);
        }
        
        return null;
	}
	
	this.CreateNumberPicker = function(num, options)
	{
		var ret = this.plg.CreateObj("NumberPicker", num, options);
        
        if(ret)
        {
        	return new UIXNumberPicker(ret, this.plg);
        }
        
        return null;
	}
    
    this.CreateDatePickerDialog = function(title, yearOrDate, month, day, options) 
    {
    	if(this.dlgCache.dpd)
    	{
    		this.dlgCache.dpd.Release();
    		this.dlgCache.dpd = null;
    	}
    	
    	var ymd = _toYearMonthDay(yearOrDate, month, day);
    	
        var ret = this.plg.CreateObj("DatePickerDialog", title, ymd.year, ymd.month, ymd.day, options);
        
        if(ret)
        {
        	this.dlgCache.dpd = new UIXDatePickerDialog(ret, this.plg);
        }
        
        return this.dlgCache.dpd; 
    }
    
    this.CreateDatePicker = function(yearOrDate, month, day, options) 
    { 
    	var ymd = _toYearMonthDay(yearOrDate, month, day);
    
    	var ret = this.plg.CreateObj("DatePicker", ymd.year, ymd.month, ymd.day, options);
        
        if(ret)
        {
        	return new UIXDatePicker(ret, this.plg);
        }
        
        return null; 
    }
    
    this.CreateTimePickerDialog = function(title, hour, minute, options) 
    { 
    	if(this.dlgCache.tpd)
    	{
    		this.dlgCache.tpd.Release();
    		this.dlgCache.tpd = null;
    	}
    	
        var ret = this.plg.CreateObj("TimePickerDialog", title, hour, minute, options);
        
        if(ret)
        {
        	this.dlgCache.tpd = new UIXTimePickerDialog(ret, this.plg);
        }
        
        return this.dlgCache.tpd; 
    }
    
    this.CreateTimePicker = function(hour, minute, options) 
    { 
    	var ret = this.plg.CreateObj("TimePicker", hour, minute, options);
        
        if(ret)
        {
        	return new UIXTimePicker(ret, this.plg);
        }
        
        return null; 
    }
    
    this.CreateColorPickerDialog = function(title, red, green, blue, alpha, options) 
    { 
    	if(this.dlgCache.cpd)
    	{
    		this.dlgCache.cpd.Release();
    		this.dlgCache.cpd = null;
    	}
    	
    	var ret = this.plg.CreateObj("ColorPickerDialog", title, red, green, blue, alpha, options);
        
        if(ret)
        {
        	this.dlgCache.cpd = new UIXColorPickerDialog(ret, this.plg);
        }
        
        return this.dlgCache.cpd; 
    }
    
    this.CreateFAButton = function(icon, options) 
    { 
    	var ret = this.plg.CreateObj("FloatingActionButton", icon, options);
        
        if(ret)
        {
        	return new UIXFloatingActionButton(ret, this.plg);
        }
        
        return null; 
    }
    
    this.CreateFAMenu = function(icon, options) 
    { 
    	var ret = this.plg.CreateObj("FloatingActionsMenu", icon, options);
        
        if(ret)
        {
        	return new UIXFloatingActionsMenu(ret, this.plg);
        }
        
        return null; 
    }
}

function UIXPicker(id, plg)
{	
	var obj = new Obj(id);
	obj.plg = plg;
	obj.GetType = function() { return "Picker"; }
    obj.SetOnChange = function(callback) { this.plg.SendObj("SetOnChange", this, callback.name); }  
    obj.SelectItem = function( item ) { this.plg.SendObj("SelectItem", this, item); }   
    obj.GetText = function() { return this.plg.SendObj("GetText", this); } 
    obj.SetTextColor = function(clr) { this.plg.SendObj("SetTextColor", this, clr); }    
    obj.SetTextSize = function(size, mode) { this.plg.SendObj("SetTextSize", this, size, mode); }   
    obj.GetTextSize = function(mode) { return parseFloat(this.plg.SendObj("GetTextSize", this)); }  
    obj.SetList = function(list, delim) { this.plg.SendObj("SetList", this, list, delim); }
	
	return obj;
}

function UIXNumberPicker(id, plg)
{	
	var obj = new Obj(id);
	obj.plg = plg;
	obj.GetType = function() { return "NumberPicker"; }
    obj.SetOnChange = function(callback) { this.plg.SendObj("SetOnChange", this, callback.name); }  
    obj.SetValue = function( item ) { this.plg.SendObj("SetValue", this, item); }   
    obj.GetValue = function() { return parseFloat(this.plg.SendObj("GetValue", this)); } 
    obj.SetTextColor = function(clr) { this.plg.SendObj("SetTextColor", this, clr); }    
    obj.SetTextSize = function(size, mode) { this.plg.SendObj("SetTextSize", this, size, mode); }   
    obj.GetTextSize = function(mode) { return parseFloat(this.plg.SendObj("GetTextSize", this)); }
    obj.SetRange = function(min, max) 
	{ 
		this.plg.SendObj("SetRange", this, min, max); 
	}
	obj.SetDecimalPlaces = function(count) { this.plg.SendObj("SetDecimalPlaces", this, count); }
	obj.SetDecimalSeparator = function(char) { this.plg.SendObj("SetDecimalSeparator", this, char); }
	
	return obj;
}

function UIXDatePickerDialog(id, plg)
{	
	var obj = new Obj(id);
	obj.plg = plg;
	obj.GetType = function() { return "DatePickerDialog"; }
	obj.SetTitle = function(title) { this.plg.SendObj("SetTitle", this, title); }
	obj.Show = function() { this.plg.SendObj("Show", this); }
	obj.Hide = function() { this.plg.SendObj("Hide", this); }
	obj.Dismiss = function() { this.plg.SendObj("Dismiss", this); }
	obj.SetDate = function(yearOrDate, month, day) 
	{ 
		var ymd = _toYearMonthDay(yearOrDate, month, day);
		
		this.plg.SendObj("SetDate", this, ymd.year, ymd.month, ymd.day); 
	}
	obj.SetMinDate = function(yearOrDate, month, day) 
	{ 
		var ymd = _toYearMonthDay(yearOrDate, month, day);
		
		this.plg.SendObj("SetMinDate", this, ymd.year, ymd.month, ymd.day); 
	}
	obj.SetMaxDate = function(yearOrDate, month, day) 
	{ 
		var ymd = _toYearMonthDay(yearOrDate, month, day);
		
		this.plg.SendObj("SetMaxDate", this, ymd.year, ymd.month, ymd.day); 
	}
	obj.SetFirstDayOfWeek = function(dayOfWeek) { this.plg.SendObj("SetFirstDayOfWeek", this, dayOfWeek); }
	obj.SetOnOk = function(cb) { this.plg.SendObj("SetOnOk", this, cb.name); }
	return obj;
}

function UIXDatePicker(id, plg)
{	
	var obj = new Obj(id);
	obj.plg = plg;
	obj.GetType = function() { return "DatePicker"; }
	obj.SetDate = function(yearOrDate, month, day) 
	{
		var ymd = _toYearMonthDay(yearOrDate, month, day);
		
		this.plg.SendObj("SetDate", this, ymd.year, ymd.month, ymd.day); 
	}
	obj.SetMinDate = function(yearOrDate, month, day) 
	{
		var ymd = _toYearMonthDay(yearOrDate, month, day);
		
		this.plg.SendObj("SetMinDate", this, ymd.year, ymd.month, ymd.day); 
	}
	obj.SetMaxDate = function(yearOrDate, month, day) 
	{
		var ymd = _toYearMonthDay(yearOrDate, month, day);
		
		this.plg.SendObj("SetMaxDate", this, ymd.year, ymd.month, ymd.day); 
	}
	obj.SetFirstDayOfWeek = function(dayOfWeek) { this.plg.SendObj("SetFirstDayOfWeek", this, dayOfWeek); }
	obj.SetOnDateChanged = function(cb) { this.plg.SendObj("SetOnDateChanged", this, cb.name); }
	obj.SetTextColor = function(clr) { this.plg.SendObj("SetTextColor", this, clr); }
	
	return obj;
}

function UIXTimePickerDialog(id, plg)
{	
	var obj = new Obj(id);
	obj.plg = plg;
	obj.GetType = function() { return "TimePickerDialog"; }
	obj.SetTitle = function(title) { this.plg.SendObj("SetTitle", this, title); }
	obj.Show = function() { this.plg.SendObj("Show", this); }
	obj.Hide = function() { this.plg.SendObj("Hide", this); }
	obj.Dismiss = function() { this.plg.SendObj("Dismiss", this); }
	obj.SetTime = function(hour, minute) { this.plg.SendObj("SetTime", this, hour, minute); }
	obj.SetOnOk = function(cb) { this.plg.SendObj("SetOnOk", this, cb.name); }
	return obj;
}

function UIXTimePicker(id, plg)
{	
	var obj = new Obj(id);
	obj.plg = plg;
	obj.GetType = function() { return "TimePicker"; }
	obj.SetTime = function(hour, minute) { this.plg.SendObj("SetTime", this, hour, minute); }
	obj.SetTextColor = function(clr) { this.plg.SendObj("SetTextColor", this, clr); }
	obj.SetOnTimeChanged = function(cb) { this.plg.SendObj("SetOnTimeChanged", this, cb.name); }
	return obj;
}

function UIXColorPickerDialog(id, plg)
{	
	var obj = new Obj(id);
	obj.plg = plg;
	obj.GetType = function() { return "ColorPickerDialog"; }
	obj.SetTitle = function(title) { this.plg.SendObj("SetTitle", this, title); }
	obj.Show = function() { this.plg.SendObj("Show", this); }
	obj.Hide = function() { this.plg.SendObj("Hide", this); }
	obj.Dismiss = function() { this.plg.SendObj("Dismiss", this); }
	obj.SetOnOk = function(callback) { this.plg.SendObj("SetOnOk", this, callback.name); }
	obj.SetOnCancel = function(callback) { this.plg.SendObj("SetOnCancel", this, callback.name); }
	
	obj.RGBAtoHex = function(r, g, b, a)
	{
	    var col = "#" + this.toHex(a) + this.toHex(r) + this.toHex(g) + this.toHex(b);
	    return col;
	}
	
	obj.RGBtoHex = function(r, g, b)
	{
	    var col = "#" + this.toHex(r) + this.toHex(g) + this.toHex(b);
	    return col;
	}
	
	obj.toHex = function(value)
	{
	    return ("00" + value.toString(16)).substr(-2);
	}
	
	return obj;
}

function UIXFloatingActionButton(id, plg)
{	
	var obj = new Obj(id);
	obj.plg = plg;
	obj.GetType = function() { return "FloatingActionButton"; }
	obj.SetIcon = function(icon) { this.plg.SendObj("SetIcon", this, icon); }
	obj.SetIconColor = function(col) { this.plg.SendObj("SetIconColor", this, col); }
	obj.SetButtonColors = function(normal, pressed, disabled) { this.plg.SendObj("SetButtonColors", this, normal, pressed, disabled); }
	obj.SetOnTouch = function(cb) { this.plg.SendObj("SetOnTouch", this, cb.name); }
	obj.SetLabel = function(label) { this.plg.SendObj("SetLabel", this, label); }
	return obj;
}

function UIXFloatingActionsMenu(id, plg)
{	
	var obj = new Obj(id);
	obj.plg = plg;
	obj.GetType = function() { return "FloatingActionsMenu"; }
	obj.Open = function() { this.plg.SendObj("Open", this); }
	obj.Close = function() { this.plg.SendObj("Close", this); }
	obj.SetOnOpened = function(cb) { this.plg.SendObj("SetOnOpened", this, cb.name); }
	obj.SetOnClosed = function(cb) { this.plg.SendObj("SetOnClosed", this, cb.name); }
	obj.IsOpen = function() { return this.plg.SendObj("IsOpen", this) === "true"; }
	obj.SetIconColor = function(col) { this.plg.SendObj("SetIconColor", this, col); }
	obj.SetButtonColors = function(normal, pressed, disabled) { this.plg.SendObj("SetButtonColors", this, normal, pressed, disabled); }
	obj.SetLabelBackColor = function(col) { this.plg.SendObj("SetLabelBackColor", this, col); }
	obj.SetLabelTextColor = function(col) { this.plg.SendObj("SetLabelTextColor", this, col); }
	obj.SetLabelTextSize = function(size) { this.plg.SendObj("SetLabelTextSize", this, size); }
	obj.AddFAButton = function(fab) 
	{ 
		this.plg.SendObj("StartAddFAButton", this);
		this.plg.SendObj("AddToMenu", fab);
		this.plg.SendObj("EndAddFAButton", this);
	}
	return obj;
}

// Helper function to detect Date objects or year,month,day ints
function _toYearMonthDay(yearOrDate, month, day)
{
	var ymd = {
		year: yearOrDate,
		month: month,
		day: day
	};
	
	if(yearOrDate instanceof Date)
	{	
		var date = yearOrDate;
		
		ymd.year = date.getFullYear();
		ymd.month = date.getMonth();
		ymd.day = date.getDate();
	}
	
	return ymd;
}