var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_IUPPTBKM_1 = new ol.format.GeoJSON();
var features_IUPPTBKM_1 = format_IUPPTBKM_1.readFeatures(json_IUPPTBKM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUPPTBKM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUPPTBKM_1.addFeatures(features_IUPPTBKM_1);
var lyr_IUPPTBKM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUPPTBKM_1, 
                style: style_IUPPTBKM_1,
                popuplayertitle: "IUP PT. BKM",
                interactive: true,
                title: '<img src="styles/legend/IUPPTBKM_1.png" /> IUP PT. BKM'
            });
var format_Infrastruktur_2 = new ol.format.GeoJSON();
var features_Infrastruktur_2 = format_Infrastruktur_2.readFeatures(json_Infrastruktur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastruktur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastruktur_2.addFeatures(features_Infrastruktur_2);
var lyr_Infrastruktur_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastruktur_2, 
                style: style_Infrastruktur_2,
                popuplayertitle: "Infrastruktur",
                interactive: true,
    title: 'Infrastruktur<br />\
    <img src="styles/legend/Infrastruktur_2_0.png" /> JETTY PT. BKM<br />\
    <img src="styles/legend/Infrastruktur_2_1.png" /> MESS MMS<br />\
    <img src="styles/legend/Infrastruktur_2_2.png" /> OFFICE PT. BKM<br />\
    <img src="styles/legend/Infrastruktur_2_3.png" /> Pos Security<br />\
    <img src="styles/legend/Infrastruktur_2_4.png" /> Sample House<br />\
    <img src="styles/legend/Infrastruktur_2_5.png" /> <br />'
        });
var format_EFOBKM_3 = new ol.format.GeoJSON();
var features_EFOBKM_3 = format_EFOBKM_3.readFeatures(json_EFOBKM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EFOBKM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EFOBKM_3.addFeatures(features_EFOBKM_3);
var lyr_EFOBKM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EFOBKM_3, 
                style: style_EFOBKM_3,
                popuplayertitle: "EFO BKM",
                interactive: true,
    title: 'EFO BKM<br />\
    <img src="styles/legend/EFOBKM_3_0.png" /> EFO  BSA Kosongan<br />\
    <img src="styles/legend/EFOBKM_3_1.png" /> EFO BSA Atas<br />\
    <img src="styles/legend/EFOBKM_3_2.png" /> Efo BSA Bawah<br />\
    <img src="styles/legend/EFOBKM_3_3.png" /> EFO Gorong-gorong<br />\
    <img src="styles/legend/EFOBKM_3_4.png" /> EFO Kampung Bajo<br />\
    <img src="styles/legend/EFOBKM_3_5.png" /> EFO Sample House<br />\
    <img src="styles/legend/EFOBKM_3_6.png" /> <br />'
        });
var format_RuteMessBKM_4 = new ol.format.GeoJSON();
var features_RuteMessBKM_4 = format_RuteMessBKM_4.readFeatures(json_RuteMessBKM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteMessBKM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteMessBKM_4.addFeatures(features_RuteMessBKM_4);
var lyr_RuteMessBKM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteMessBKM_4, 
                style: style_RuteMessBKM_4,
                popuplayertitle: "Rute Mess - BKM",
                interactive: true,
                title: '<img src="styles/legend/RuteMessBKM_4.png" /> Rute Mess - BKM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_IUPPTBKM_1.setVisible(true);lyr_Infrastruktur_2.setVisible(true);lyr_EFOBKM_3.setVisible(true);lyr_RuteMessBKM_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_IUPPTBKM_1,lyr_Infrastruktur_2,lyr_EFOBKM_3,lyr_RuteMessBKM_4];
lyr_IUPPTBKM_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Luas (Ha)': 'Luas (Ha)', });
lyr_Infrastruktur_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Deskripsi': 'Deskripsi', 'Dokumentasi': 'Dokumentasi', });
lyr_EFOBKM_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Kapasitas (MT)': 'Kapasitas (MT)', 'Deskripsi': 'Deskripsi', 'Dokumentasi': 'Dokumentasi', });
lyr_RuteMessBKM_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Deskripsi': 'Deskripsi', 'Panjang (Km)': 'Panjang (Km)', });
lyr_IUPPTBKM_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Luas (Ha)': '', });
lyr_Infrastruktur_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Deskripsi': 'TextEdit', 'Dokumentasi': 'ExternalResource', });
lyr_EFOBKM_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Kapasitas (MT)': 'Range', 'Deskripsi': 'TextEdit', 'Dokumentasi': 'ExternalResource', });
lyr_RuteMessBKM_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Deskripsi': 'TextEdit', 'Panjang (Km)': 'Range', });
lyr_IUPPTBKM_1.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', 'Luas (Ha)': 'inline label - always visible', });
lyr_Infrastruktur_2.set('fieldLabels', {'fid': 'no label', 'ID': 'inline label - always visible', 'Deskripsi': 'inline label - always visible', 'Dokumentasi': 'no label', });
lyr_EFOBKM_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Kapasitas (MT)': 'no label', 'Deskripsi': 'no label', 'Dokumentasi': 'no label', });
lyr_RuteMessBKM_4.set('fieldLabels', {'fid': 'no label', 'ID': 'inline label - always visible', 'Deskripsi': 'inline label - always visible', 'Panjang (Km)': 'inline label - always visible', });
lyr_RuteMessBKM_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});