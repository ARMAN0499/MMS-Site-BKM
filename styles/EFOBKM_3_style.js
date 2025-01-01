var size = 0;
var placement = 'point';
function categories_EFOBKM_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'EFO  BSA Kosongan':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(6,54,226,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EFO BSA Atas':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(6,54,226,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Efo BSA Bawah':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(6,54,226,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EFO Gorong-gorong':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(6,54,226,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EFO Kampung Bajo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(6,54,226,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EFO Sample House':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(6,54,226,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(6,54,226,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_EFOBKM_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("ID");
    var labelText = "";
    size = 0;
    var labelFont = "6.5px \'Calibri\', sans-serif";
    var labelFill = "#0a0404";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("ID") !== null) {
        labelText = String(feature.get("ID"));
    }
    
var style = categories_EFOBKM_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
