ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([631942.454669, 5889616.679103, 725223.804676, 5939243.920370]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Proyecto_Final__1 = new ol.format.GeoJSON();
var features_Proyecto_Final__1 = format_Proyecto_Final__1.readFeatures(json_Proyecto_Final__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Proyecto_Final__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proyecto_Final__1.addFeatures(features_Proyecto_Final__1);
cluster_Proyecto_Final__1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Proyecto_Final__1
});
var lyr_Proyecto_Final__1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Proyecto_Final__1, 
                style: style_Proyecto_Final__1,
                popuplayertitle: 'Proyecto_Final_',
                interactive: true,
                title: '<img src="styles/legend/Proyecto_Final__1.png" /> Proyecto_Final_'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Proyecto_Final__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Proyecto_Final__1];
lyr_Proyecto_Final__1.set('fieldAliases', {'Name': 'Name', 'Nombre': 'Nombre', 'Sum_Poblac': 'Sum_Poblac', 'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', 'Actividad': 'Actividad', 'Resumen': 'Resumen', 'Ubicación': 'Ubicación', 'Fec_Creac': 'Fec_Creac', 'Acceso': 'Acceso', 'Video': 'Video', });
lyr_Proyecto_Final__1.set('fieldImages', {'Name': 'TextEdit', 'Nombre': 'TextEdit', 'Sum_Poblac': 'Range', 'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'Actividad': 'TextEdit', 'Resumen': 'TextEdit', 'Ubicación': 'TextEdit', 'Fec_Creac': 'TextEdit', 'Acceso': 'TextEdit', 'Video': 'TextEdit', });
lyr_Proyecto_Final__1.set('fieldLabels', {'Name': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Sum_Poblac': 'inline label - always visible', 'CUT_REG': 'inline label - always visible', 'CUT_PROV': 'inline label - always visible', 'CUT_COM': 'inline label - always visible', 'REGION': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'COMUNA': 'inline label - always visible', 'SUPERFICIE': 'inline label - always visible', 'Actividad': 'inline label - always visible', 'Resumen': 'inline label - always visible', 'Ubicación': 'inline label - always visible', 'Fec_Creac': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_Proyecto_Final__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});