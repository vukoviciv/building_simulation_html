var MIT = {};

// index of current exercise
// should re-factor this to object instead of integer for human readability and robustness
MIT.currentExercise = typeof currentExercise !== 'undefined' ? currentExercise : 0;
MIT.progress = typeof progress !== 'undefined' ? progress : 0;

// types of objects
// l=1, g=1, s=1, r=3, t=1, a=2, ce=3

MIT.objectType = {
    CONVENIENCE: {
        1:  { TV: 150, MV: 150, TVE: 200, MVE: 200 },
        2:  { TV: 200, MV:  50, TVE: 275, MVE:  75 },
        3:  { TV: 240, MV:  40, TVE: 315, MVE:  40 },
        4:  { TV: 270, MV:  30, TVE: 345, MVE:  30 },
        5:  { TV: 280, MV:  10, TVE: 355, MVE:  10 },
        6:  { TV: 270, MV: -10, TVE: 345, MVE: -10 },
        7:  { TV: 250, MV: -20, TVE: 325, MVE: -20 },
        8:  { TV: 230, MV: -20, TVE: 305, MVE: -20 },
        9:  { TV: 190, MV: -40, TVE: 265, MVE: -40 },
        10: { TV: 150, MV: -40, TVE: 225, MVE: -40 },
        11: { TV: 100, MV: -50, TVE: 175, MVE: -50 },
        12: { TV: 100, MV:   0, TVE: 175, MVE:   0 }
    },
    GROCERY: {
        1:  { TV: 200, MV: 200, TVE: 300, MVE: 300 },
        2:  { TV: 300, MV: 100, TVE: 450, MVE: 150 },
        3:  { TV: 350, MV:  50, TVE: 500, MVE:  50 },
        4:  { TV: 300, MV: -50, TVE: 450, MVE: -50 },
        5:  { TV: 200, MV:-100, TVE: 350, MVE:-100 },
        6:  { TV: 100, MV:-100, TVE: 250, MVE:-100 },
        7:  { TV:  50, MV: -50, TVE: 200, MVE: -50 },
        8:  { TV:   0, MV: -50, TVE: 150, MVE: -50 },
        9:  { TV:   0, MV:   0, TVE: 150, MVE:   0 },
        10: { TV:   0, MV:   0, TVE: 150, MVE:   0 },
        11: { TV:   0, MV:   0, TVE: 150, MVE:   0 },
        12: { TV:   0, MV:   0, TVE: 150, MVE:   0 }
    },
    LOCAL: {
        1:  { TV: 110, MV: 110, TVE: 175, MVE: 175 },
        2:  { TV: 220, MV: 110, TVE: 285, MVE: 110 },
        3:  { TV: 330, MV: 110, TVE: 395, MVE: 110 },
        4:  { TV: 440, MV: 110, TVE: 505, MVE: 110 },
        5:  { TV: 540, MV: 100, TVE: 605, MVE: 100 },
        6:  { TV: 640, MV: 100, TVE: 705, MVE: 100 },
        7:  { TV: 740, MV: 100, TVE: 805, MVE: 100 },
        8:  { TV: 830, MV:  90, TVE: 895, MVE:  90 },
        9:  { TV: 910, MV:  80, TVE: 975, MVE:  80 },
        10: { TV: 980, MV:  70, TVE:1045, MVE:  70 },
        11: { TV:1030, MV:  50, TVE:1095, MVE:  50 },
        12: { TV:1060, MV:  30, TVE:1125, MVE:  30 }
    },
    RESTAURANT: {
        1:  { TV: 250, MV: 250, TVE: 300, MVE: 300 },
        2:  { TV: 500, MV: 250, TVE: 575, MVE: 275 },
        3:  { TV: 750, MV: 250, TVE: 825, MVE: 250 },
        4:  { TV: 900, MV: 150, TVE: 975, MVE: 150 },
        5:  { TV:1000, MV: 100, TVE:1075, MVE: 100 },
        6:  { TV:1050, MV:  50, TVE:1125, MVE:  50 },
        7:  { TV:1000, MV: -50, TVE:1075, MVE: -50 },
        8:  { TV:1000, MV:   0, TVE:1075, MVE:   0 },
        9:  { TV: 950, MV: -50, TVE:1025, MVE: -50 },
        10: { TV: 900, MV: -50, TVE: 975, MVE: -50 },
        11: { TV: 800, MV:-100, TVE: 875, MVE:-100 },
        12: { TV: 700, MV:-100, TVE: 775, MVE:-100 }
    },
    TOURISM: {
        1:  { TV: 300, MV: 300, TVE: 200, MVE: 200 },
        2:  { TV: 500, MV: 200, TVE: 350, MVE: 150 },
        3:  { TV: 650, MV: 150, TVE: 450, MVE: 100 },
        4:  { TV: 780, MV: 130, TVE: 525, MVE:  75 },
        5:  { TV: 880, MV: 100, TVE: 545, MVE:  20 },
        6:  { TV: 950, MV:  70, TVE: 545, MVE:   0 },
        7:  { TV:1000, MV:  50, TVE: 495, MVE: -50 },
        8:  { TV:1020, MV:  20, TVE: 460, MVE: -35 },
        9:  { TV:1000, MV: -20, TVE: 385, MVE: -75 },
        10: { TV: 950, MV: -50, TVE: 235, MVE:-150 },
        11: { TV: 875, MV: -75, TVE: -15, MVE:-250 },
        12: { TV: 700, MV:-175, TVE:-315, MVE:-300 }
    },
    ARTISAN: {
        1:  { TV: 110, MV: 110, TVE: 200, MVE: 200 },
        2:  { TV: 200, MV:  90, TVE: 390, MVE: 190 },
        3:  { TV: 280, MV:  80, TVE: 550, MVE: 160 },
        4:  { TV: 360, MV:  80, TVE: 700, MVE: 150 },
        5:  { TV: 420, MV:  60, TVE: 790, MVE:  90 },
        6:  { TV: 500, MV:  80, TVE: 870, MVE:  80 },
        7:  { TV: 580, MV:  80, TVE: 950, MVE:  80 },
        8:  { TV: 650, MV:  70, TVE:1020, MVE:  70 },
        9:  { TV: 720, MV:  70, TVE:1090, MVE:  70 },
        10: { TV: 790, MV:  70, TVE:1160, MVE:  70 },
        11: { TV: 850, MV:  60, TVE:1220, MVE:  60 },
        12: { TV: 910, MV:  60, TVE:1280, MVE:  60 }
    },
    COMMUNITY: {
        1:  { TV:  70, MV:  70, TVE:1500, MVE:1500 },
        2:  { TV: 120, MV:  50, TVE:2500, MVE:1000 },
        3:  { TV: 170, MV:  50, TVE:3100, MVE: 600 },
        4:  { TV: 220, MV:  50, TVE:3200, MVE: 100 },
        5:  { TV: 270, MV:  50, TVE:3300, MVE: 100 },
        6:  { TV: 320, MV:  50, TVE:3350, MVE:  50 },
        7:  { TV: 370, MV:  50, TVE:3400, MVE:  50 },
        8:  { TV: 420, MV:  50, TVE:3450, MVE:  50 },
        9:  { TV: 470, MV:  50, TVE:3500, MVE:  50 },
        10: { TV: 520, MV:  50, TVE:3550, MVE:  50 },
        11: { TV: 570, MV:  50, TVE:3600, MVE:  50 },
        12: { TV: 620, MV:  50, TVE:3650, MVE:  50 }
    }
}

MIT.comments = {
    initial: {
        CONVENIENCE: 'Good choice! Local convenience stores provide basic to both tourists and residents. Good choice. Residents always enjoy accessible/easy access to basic goods.',
        GROCERY: 'Residents applaud the construction of a local grocery store. Residents now have access to fresh produce and other food necessities at walkable distances.',
        LOCAL: 'You are really starting to create a community. Residents are now able to access a lawyer, dentist or pharmacy close to home.',
        RESTAURANT: 'The restaurant is bringing new business into the city. The foot traffic is increasing.',
        TOURISM: 'There is high demand for tourism souvenirs. Casco is a tourism destination. There is high demand for souvenirs. Spillover foot traffic is increasing!',
        ARTISAN: 'Local artisans are now able to sell their wares and represent cascos viejos unique culture.',
        COMMUNITY: 'Casco now has more gathering spaces for education, recreation, and civic engagement.'
    },
    negative: {
        CONVENIENCE: 'Neighborhood is saturated with too many conveniences for the population currently living there. The sales are dropping.',
        LOCAL: 'A variety of services like a pharmacy and a walking clinic will benefit the community.',
        RESTAURANT: 'Noise levels are getting high. Loud patrons exiting hours at closing times are disrupting residents',
        TOURISM: 'Streets are filled with the same low-quality products, it\'s starting to take away from the charm of the neighborhood.'
    },
    positive: {
        LOCAL: 'Cascos population is small, likely only a few local services are needed.',
        ARTISAN: 'A variety of cultural goods allows many different artists to continue to make a living within the neighborhood.',
        COMMUNITY: 'The community will continue to benefit from additional space dedicated to enriching the life of its residents.'
    },
    residential: {
        HIGH_END_RESIDENTIAL: [
            'There is large demand for high-income residential units in the neighborhood. You will have no trouble finding tenants.',
            'You have increased your revenues. Demand for high-income residential units has still not been met.',
            'Excellent allocation!',
            'Keep track of the total value bar as you continue to allocate units.',
            '',
            '',
            '',
            'Consider a mix of affordable and high-income housing to increase the total value of your residential development.'
        ],
        AFFORDABLE: [
            'There is a need for affordable residential units within this neighborhood. You have housed a grateful family.',
            'You have housed another family.',
            'Keep track of the total value bar as you continue to allocate units.',
            '',
            'To increase your total value consider a different mix.',
            'You are at risk of losing money on your real-estate development by including too many affordable units.',
            'Keep an eye on your total value. High-end housing residential units are needed to increase the total value.',
            'It is not financially sustainable to construct 8 affordable units. Consider a different mix.'
        ]
    },
    residential_part_3: {
        HIGH_END_RESIDENTIAL: [
            'There is large demand for high-income residential units in the neighborhood. You will have no trouble finding tenants.',
            'You have increased your revenues. Demand for high-income residential units has still not been met.',
            'Excellent allocation!',
            'Keep track of the total value bar as you continue to allocate units.',
            '',
            '',
            'Consider a mix of affordable and high-income housing to increase the total value of your residential development.',
            'Consider a mix of affordable and high-income housing to increase the total value of your residential development.'
        ],
        AFFORDABLE: [
            'There is a need for affordable residential units within this neighborhood. You have housed a grateful family.',
            'You have housed another family. If 6 high-end residential units are allocated at this point then a solution text will come up.',
            '',
            'Keep track of the total value bar as you continue to allocate units.',
            '',
            'You are at risk of losing money on your real-estate development by including too many affordable units.',
            'Keep an eye on your total value. High-end housing residential units are needed to increase the total value.',
            'It is not financially sustainable to construct 8 affordable units. Consider a different mix.'
        ]
    }
}


MIT._getTypeCount = function(includeMultiplier=true) {
    var typeCount = {};

    for(var mitId in sceneElements.core) {
        var element = sceneElements.core[mitId];
        if(element && element.options.type === 'commercial' && element.type) {
            if(typeCount[element.type]) {
                typeCount[element.type] += includeMultiplier ? element.options.multiplier : 1;
            }
            else {
                typeCount[element.type] = includeMultiplier ? element.options.multiplier : 1;
            }
        }
    }

    return typeCount;
}

MIT._getResidentialCount = function() {
    var x = y = 0;

    for(var mitId in sceneElements.core) {
        var element = sceneElements.core[mitId];
        if(element && element.options.type === 'residential' && element.type) {
            if(element.type === 'HIGH_END_RESIDENTIAL') {
                x++;
            }
            else if (element.type === 'AFFORDABLE') {
                y++;
            }
        }
    }

    return { x: x, y: y };
}

MIT._allUnitsAllocated = function(unitType = 'commercial') {
    var count = 0;

    for(var mitId in sceneElements.core) {
        var element = sceneElements.core[mitId];

        if(element && element.options.type === unitType && element.type) {
            count++;
        }
    }

    return count === 8;
}

// returns true when residential externality is at maximum value - 4 high end and 4 affordable units
MIT._isResidentialExternalityMaximal = function() {
    var counts = MIT._getResidentialCount();

    return counts.x === 4 && counts.y === 4;
}

MIT.getResidentialValue = function() {
    var data = MIT._getResidentialCount();
    var x = data.x;
    var y = data.y;


    var data = {
        monetary: 300000*x + 175000*y + 90000*x*Math.pow(y, (2/3)) - 10000*y*y,
        social: 350000*y - 10000*y*y
    };

    data.total = data.monetary + data.social;

    return data;
};

MIT.getCommercialValue = function() {
    var sumMonetary = 0;
    var sumTotal = 0;
    var typeCount = MIT._getTypeCount();

    for(key in typeCount) {
        // find value from objectType object
        // goes something like this: MIT.objectType['COMMUNITY'][2]['TV'] => 120
        sumMonetary += MIT.objectType[key][typeCount[key]]['TV'];

        // goes something like this: MIT.objectType['COMMUNITY'][2]['TVE'] => 2500
        sumTotal += MIT.objectType[key][typeCount[key]]['TVE'];
    }

    var data = {
        monetary: sumMonetary*1000,
        total: sumTotal*1000
    };

    data.social = data.total - data.monetary;

    return data;
}

MIT.updateValue = function(preventNextPage=false){
    var optimalValue = {
        residential: 2967197,
        commercial: 2250000,
        total: 5217197,
        neighborhoodMonetary: 5190000,
        neighborhoodSocial: 5650000,
        neighborhood: 9077143
    };

    var residentialValue = MIT.getResidentialValue();
    var commercialValue = MIT.getCommercialValue();

    var neighborhoodValue = residentialValue.total + commercialValue.total;
    var neighborhoodMonetaryValue = residentialValue.monetary + commercialValue.monetary;
    var neighborhoodSocialValue = residentialValue.social + commercialValue.social;

    // update floating text
    MIT.updateFloatingText(neighborhoodValue - residentialValue.monetary - commercialValue.monetary);

    // update view
    $("#residentialValue").text(numeral(residentialValue.monetary).format('0,0'));
    $("#residentialPercent").children().css('width', (Math.round((residentialValue.monetary/optimalValue.residential)*100) + '%'));

    $("#commercialValue").text(numeral(commercialValue.monetary).format('0,0'));
    $("#commercialPercent").children().css('width', (Math.round((commercialValue.monetary/optimalValue.commercial)*100) + '%'));

    // neighborhood
    $('#monetaryNeighborhoodValue').text(numeral(neighborhoodMonetaryValue).format('0,0'));
    $('#monetaryNeighborhoodPercent').children().css('width', (Math.round((neighborhoodMonetaryValue/optimalValue.neighborhoodMonetary)*100) + '%'));

    $('#socialNeighborhoodValue').text(numeral(neighborhoodSocialValue).format('0,0'));
    $('#socialNeighborhoodPercent').children().css('width', (Math.round((neighborhoodSocialValue/optimalValue.neighborhoodSocial)*100) + '%'));

    $('#neighborhoodValue').text(numeral(neighborhoodValue).format('0,0'));
    $('#neighborhoodPercent').children().css('width', (Math.round((neighborhoodValue/optimalValue.neighborhood)*100) + '%'));


    $('#persistentButtonContainer .continue-button').attr('disabled', true);

    // finish first exercise
    if(MIT.currentExercise == 1 && residentialValue.monetary/optimalValue.residential > 0.99) {
        if(MIT.progress === 2 && !preventNextPage) {
            MIT.nextPage();
        }
        $('#persistentButtonContainer .continue-button').removeAttr('disabled');
    }

    // finish second exercise
    if(MIT.currentExercise == 2 && commercialValue.monetary/optimalValue.commercial >= 0.9 && MIT._allUnitsAllocated('commercial')) {
        if(MIT.progress === 5 && !preventNextPage) {
            MIT.nextPage();
        }
        $('#persistentButtonContainer .continue-button').removeAttr('disabled');
    }

    // finish third exercise
    if(MIT.currentExercise == 3 && commercialValue.total/optimalValue.neighborhoodMonetary >= 0.9 && MIT._allUnitsAllocated('commercial') && MIT._allUnitsAllocated('residential') && MIT._isResidentialExternalityMaximal()) {
        if(MIT.progress === 8 && !preventNextPage) {
            MIT.nextPage();
        }
        $('#persistentButtonContainer .continue-button').removeAttr('disabled');
    }
};

MIT.showValueBoardValues = function() {
    $('.value-board-entry').hide();
    switch(MIT.currentExercise) {
        case 1:
            $('#residential').show();
            break;

        case 2:
            $('#commercial').show();
            break;

        case 3:
            $('#neighborhood').show();
            break;
    }
};

MIT.updateFloatingText = function(value) {
    for (var i = 0; i < scene.children.length; i++) {
        var child = scene.children[i];
        // find all scene text objects
        if(child.type === 'text') {
            var elementId = child.mitId.slice(5, child.mitId.length);
            var neighbor = sceneElements.neighbors[elementId];

            var text = '$' + numeral(neighbor.options.initialValue + Math.round(value*neighbor.options.multiplier)).format('0,0');
            var textGeometry = new THREE.TextGeometry(text, textSettings);
            textGeometry.center();

            child.geometry = textGeometry;
        }
    }
};

// update bottom progress bar to indicate how far from exercise end you are
MIT.updateProgress = function(value) {
    var html = '';
    var highlightIndex = value === undefined ? MIT.progress : value;
    for(var i = 0; i <= 10; i++) {
        if(i === highlightIndex) {
            html += '<li class="highlighted">&nbsp;</li>';
        }
        else {
            html += '<li>&nbsp;</li>';
        }
    }
    $('#activity-progress').html(html);
};

MIT.chooseTooltip = function(blockType) {
    var text;

    // residential part
    if (blockType === 'HIGH_END_RESIDENTIAL' || blockType === 'AFFORDABLE') {
        var residentialCount = MIT._getResidentialCount();
        var count = blockType === 'HIGH_END_RESIDENTIAL' ? residentialCount.x : residentialCount.y;

        if (MIT.currentExercise === 3) {
            var comment = MIT.comments.residential_part_3[blockType][count - 1];
        }
        else {
            var comment = MIT.comments.residential[blockType][count - 1];
        }

        if(comment !== '') {
            text = comment;
        }
    }
    // commercial part
    else {
        var typeCount = MIT._getTypeCount(false);
        // if this is the first instance of this block type
        if(typeCount[blockType] == 1){
            // initial comments
            text = MIT.comments.initial[blockType];
        }
        // else if we have this block instance, then we check for marginal value
        // and output positive/negative comments accordingly
        else {
            typeCount = MIT._getTypeCount();
            var marginalValue = MIT.objectType[blockType][typeCount[blockType]]['MV'];

            if(marginalValue > 0) {
                // positive marginal value comments
                text = MIT.comments.positive[blockType];
            }
            else {
                // negative marginal value comments
                text = MIT.comments.negative[blockType];
            }
        }
    }

    MIT.showTooltip(text);
};

MIT.showTooltip = function(text) {
    $('#valueBoard').removeAttr('data-tooltip');

    if(text) {
        $('#valueBoard').attr('data-tooltip', text);
    }
};

MIT.showSummations = function(closeCallback) {
    var residentialCount = MIT._getResidentialCount();
    var commercialCount = MIT._getTypeCount();
    var topHtml = '';

    // do not show residential part summations on second part of the exercise
    if (MIT.currentExercise !== 2) {
        topHtml += MIT.createHtmlTemplate('High-End Residential', residentialCount.x, 'orange');
        topHtml += MIT.createHtmlTemplate('Affordable Housing', residentialCount.y, 'yellow');
    }


    for(var key in commercialCount) {
        if(commercialCount.hasOwnProperty(key)) {
            switch(key) {
                case 'CONVENIENCE':
                    var color = 'teal';
                    var title = 'Local Convenience';
                    break;
                case 'GROCERY':
                    var color = 'aqua';
                    var title = 'Local Grocery';
                    break;
                case 'LOCAL':
                    var color = 'pink';
                    var title = 'Local Service';
                    break;
                case 'RESTAURANT':
                    var color = 'brown';
                    var title = 'Restaurant/Bar';
                    break;
                case 'TOURISM':
                    var color = 'blue';
                    var title = 'Tourism-oriented Low-quality Goods';
                    break;
                case 'ARTISAN':
                    var color = 'green';
                    var title = 'Artisan and Cultural Goods';
                    break;
                case 'COMMUNITY':
                    var color = 'purple';
                    var title = 'Community Center';
                    break;
                default:
                    var color = 'purple';
                    var title = 'Default';
            }
            topHtml += MIT.createHtmlTemplate(title, commercialCount[key], color);
        }
    }

    if (MIT.currentExercise === 1) {
        var value = numberWithCommas(MIT.getResidentialValue().monetary.toFixed(0));
        var bottomHtml = '<li><div class="value-number">'+ value +'</div><div class="value-label">Residential Value</div></li>';
    }
    else if (MIT.currentExercise === 2) {
        var value = numberWithCommas(MIT.getCommercialValue().monetary.toFixed(0));
        var bottomHtml = '<li><div class="value-number">'+ value +'</div><div class="value-label">Commercial Value</div></li>';
    }
    else if (MIT.currentExercise === 3) {
        var residentialValue = MIT.getResidentialValue();
        var commercialValue = MIT.getCommercialValue();

        var bottomHtml = '<li><div class="value-number">'+ numeral(residentialValue.monetary + commercialValue.monetary).format('0,0') +'</div><div class="value-label">Monetary Value</div></li>' +
        '<li><div class="value-number">'+ numeral(residentialValue.social + commercialValue.social).format('0,0') +'</div><div class="value-label">Social Value</div></li>';
    }

    $('#summationTop').html(topHtml);
    $('#summationBottom').html(bottomHtml);
    $('.summation').show();
};

MIT.createHtmlTemplate = function(title, count, color) {
    var elements = '';
    var small = count > 4;
    for (var i = count; i > 0; i--) {
        elements += small ? '<li class="small"></li>' : '<li></li>';
    }
    return '<li><div class="type-title">' + title + '</div><ul class="type-list ' + color + '">' + elements + '</ul></li>';
}

MIT.nextPage = function(event) {
    event && event.stopPropagation();
    if(MIT.progress === 11) {
        return;
    }

    MIT.progress++;
    MIT.updateProgress();

    $('#allocation-container').hide();

    switch(MIT.progress) {
        case 0:
            MIT.currentExercise = 0;
            $('#splash, #buildingSimulationContent').fadeIn();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            break;
        case 1:
            MIT.currentExercise = 1;
            buildScene();
            $('#splash').hide();
            $('#firstExercise').fadeIn();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            break;
        case 2:
            MIT.currentExercise = 1;
            MIT.updateValue(true);
            $('#firstExercise, #buildingSimulationContent').hide();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideDown();
            $('#webgl').fadeIn();
            break;
        case 3:
            MIT.currentExercise = 1;
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            MIT.showSummations();
            break;
        case 4:
            MIT.currentExercise = 2;
            buildScene();
            $('.summation').fadeOut();
            $('#secondExercise, #buildingSimulationContent').show();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            break;
        case 5:
            MIT.currentExercise = 2;
            MIT.updateValue(true);
            $('#secondExercise, #buildingSimulationContent').hide();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideDown();
            $('#webgl').fadeIn();
            break;
        case 6:
            MIT.currentExercise = 2;
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            MIT.showSummations();
            break;
        case 7:
            MIT.currentExercise = 3;
            $('.summation').fadeOut();
            $('#thirdExercise, #buildingSimulationContent').show();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            setSceneElements(true);
            setTimeout(buildScene, 0);
            break;
        case 8:
            MIT.currentExercise = 3;
            MIT.updateValue(true);
            $('#thirdExercise, #buildingSimulationContent').hide();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideDown();
            $('#webgl').fadeIn();
            break;
        case 9:
            MIT.currentExercise = 3;
            MIT.showSummations();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            break;
        case 10:
            MIT.currentExercise = 3;
            $('.summation').fadeOut();
            $('#conclusion, #buildingSimulationContent').show();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            break;
    }

    MIT.showValueBoardValues();

    document.saveUserProgress();
}

/*
    PROGRESS:
    0 splash page, just show Start button, exercise 0
    1 First exercise instructions page, exercise 1
    2 First exercise, exercise 1
    3 First exercise summation page, exercise 1
    4 Second exercise instructions page, exercise 2
    5 Second exercise, exercise 2
    6 Second exercise summation page, exercise 2
    7 Third exercise instructions page, exercise 3
    8 Third exercise, exercise 3
    9 Third exercise summation page, exercise 3
    10 conclusion, exercise 3
*/

MIT.previousPage = function(event) {
    event && event.stopPropagation();

    if(MIT.progress === 0) {
        return;
    }

    MIT.progress--;
    MIT.updateProgress();

    $('#allocation-container').hide();

    buildScene();

    switch(MIT.progress) {
        case 0:
            MIT.currentExercise = 0;
            $('#firstExercise').hide();
            $('#splash, #buildingSimulationContent').fadeIn();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            break;
        case 1:
            MIT.currentExercise = 1;
            $('#firstExercise, #buildingSimulationContent').fadeIn();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            break;
        case 2:
            MIT.currentExercise = 1;
            MIT.updateValue(true);
            $('.summation').fadeOut();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideDown();
            $('#webgl').fadeIn();
            break;
        case 3:
            MIT.currentExercise = 1;
            $('#secondExercise, #buildingSimulationContent').hide();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            MIT.showSummations();
            break;
        case 4:
            MIT.currentExercise = 2;
            $('#secondExercise, #buildingSimulationContent').fadeIn();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            break;
        case 5:
            MIT.currentExercise = 2;
            MIT.updateValue(true);
            $('.summation').fadeOut();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideDown();
            $('#webgl').fadeIn();
            break;
        case 6:
            MIT.currentExercise = 2;
            $('#thirdExercise, #buildingSimulationContent').hide();
            MIT.showSummations();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            break;
        case 7:
            MIT.currentExercise = 3;
            $('#thirdExercise, #buildingSimulationContent').fadeIn();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            break;
        case 8:
            MIT.currentExercise = 3;
            MIT.updateValue(true);
            $('.summation').fadeOut();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideDown();
            $('#webgl').fadeIn();
            break;
        case 9:
            MIT.currentExercise = 3;
            $('#conclusion, #buildingSimulationContent').hide();
            MIT.showSummations();
            $('#valueBoard, .chevron, #persistentButtonContainer, #double-click-units').slideUp();
            break;
    }

    MIT.showValueBoardValues();
}

MIT.resetExercise = function() {
    $('#conclusion').fadeOut();

    MIT.currentExercise = 0;
    MIT.progress = -1;

    setSceneElements(true);

    setTimeout(function(){
        MIT.nextPage();
    }, 0);
}

MIT.resetCurrentExercise = function() {
    if (MIT.currentExercise === 2) {
        setSecondExercise();

        setTimeout(function(){
            buildScene();
        }, 0);
    }

    else if (MIT.currentExercise === 1 || MIT.currentExercise === 3) {
        setSceneElements(true);

        setTimeout(function(){
            buildScene();
        }, 0);
    }

    MIT.updateValue(true);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
