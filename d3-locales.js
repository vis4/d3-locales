(function() {
        
    function locales(d3) {
        d3.locales = {};
        d3.locales['de-DE'] = d3.locales.de = {
            "decimal": ",",
            "thousands": ".",
            "grouping": [3],
            "currency": ["€", ""],
            "dateTime": "%a %b %e %X %Y",
            "date": "%d.%m.%Y",
            "time": "%H:%M:%S",
            "periods": ["AM", "PM"],
            "days": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            "shortDays": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            "months": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            "shortMonths": ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Dez"]
        };
        
        d3.locales['fr-FR'] = d3.locales.fr = {
            "decimal": ",",
            "thousands": " ",
            "grouping": [3],
            "currency": ["€", ""],
            "dateTime": "%a %b %e %X %Y",
            "date": "%d.%m.%Y",
            "time": "%H:%M:%S",
            "periods": ["AM", "PM"],
            "days": ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],
            "shortDays": ["di","lu","ma","me","je","ve","sa"],
            "months": ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],
            "shortMonths": ["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."]
        };
    }

    if (typeof d3 === 'object' && d3.version) jetpack(d3);
    else if (typeof define === 'function' && define.amd) {
        define(['d3'], jetpack);
    }

})();
