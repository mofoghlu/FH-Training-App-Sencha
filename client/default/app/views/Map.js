app.views.map = new Ext.Map({
  layout: 'fit',
  id: 'map',
  title: 'Map',
  mapOptions: {
    zoom: 12,
  }
});

app.views.MapView = Ext.extend(Ext.Panel, {
  title: 'Map',
  iconCls: 'home',
  layout: 'fit',

  listeners: {
  	show: function() {
      // Update UI
  		app.views.tabPanel.tabBar.show();
      app.views.tabPanel.componentLayout.childrenChanged = true;
      app.views.tabPanel.doComponentLayout();

      // Get the users location
      Ext.dispatch({
        controller: app.controllers.map,
        action: 'getLocation'
      });
  	}
  },

  dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
      title: '<img style="margin-top: 5px;" src="app/images/logo.png" />',
  		items: [
  			{
  				text: 'Back',
  				handler: function() {
  					app.views.tabPanel.setActiveItem(app.views.home);
  				}
  			}
  		]
  	}
  ],
  
  items: [
  	app.views.map
  ]
});