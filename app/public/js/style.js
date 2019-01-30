
var userLang = navigator.language || navigator.userLanguage;

var arrayOfMenu = [];

if (userLang == 'he') {
    arrayOfMenu.push('app/menu-Json-He/menu-pizzas-he.json');
    var contactTemp = `<h3 class="contacPar">צור קשר></h3>`;
    $('#contactTemplet').append(contactTemp);
} else {
    arrayOfMenu.push('app/menu-Json-En/menu-pizzas-en.json');
    var contactTemp = `<h3 class="contacPar">Contact</h3>`;
    $('#contactTemplet').append(contactTemp);
}

function runData(array) {
    for (let a = 0; a < arrayOfMenu.length; a++) {
        getData(array[a])

    }
}

runData(arrayOfMenu)

function getMenu(theUrl, callback) {
    let url = theUrl;

    $.ajax(url)
        .done(function (d) {
            if (typeof d === 'string')
                d = JSON.parse(d);
            callback(d);
        });
}

function setData(d) {
    for (var me = 0; me < d['menus'].length-1; me++) {
        var tempMenuHeader = `<h1 class="Menu_Title">${d['menus'][me]['Title']}</h1>
            <hr class="LineHeaderTitle">`;
        $('#Menu_pizzas').append(tempMenuHeader);

        for (var i = 0; i < d['menus'][me]['menu'].length; i++) {
            if (d['menus'][me]['menu'][i].MainTitle) {

                var tempMainHeader = `<h2 class="mainHeader">${d['menus'][me]['menu'][i].MainTitle}</h2><hr class="LineHeaderSubTitle">`;
                $('#Menu_pizzas').append(tempMainHeader);
            }
            for (var m = 0; m < d['menus'][me]['menu'][i]['menu2'].length; m++) {
                var tenpMenuItem = `<div class="AutoMargin divMenu"  id="${d['menus'][me]['Title'] + i + m}"> 
                <h3 class="Menu_Header">${d['menus'][me]['menu'][i]['menu2'][m].name}</h3>
                </div>`;
                $('#Menu_pizzas').append(tenpMenuItem);
                for (var l = 0; l < d['menus'][me]['menu'][i]['menu2'][m].list.length; l++) {

                    var tempContentItem = `<p class="menu_Item">${d['menus'][me]['menu'][i]['menu2'][m].list[l]}</p>`;
                    document.getElementById(d['menus'][me]['Title'] + i + m).innerHTML += tempContentItem;
                }
                if (d['menus'][me]['menu'][i]['menu2'][m].price) {
                    var price = `<p class="Menu_Item_Price">Price: ${d['menus'][me]['menu'][i]['menu2'][m].price}</p>`;
                    document.getElementById(d['menus'][me]['Title'] + i + m).innerHTML += price;
                }
            }

        }
    }
    var length = d['menus'].length;
        var tempAboutTitle = `<div id="divAbout" class="div_About">
                    <h1 class="AboutHeader">${d['menus'][length-1].title}</h1><hr class="LineHeaderTitle"></div>`;
        $('#Menu_pizzas').append(tempAboutTitle);
        var tempAboutMain = `<p class="AboutMain">${d['menus'][length-1].about}</p>`;
        $('#divAbout').append(tempAboutMain);
    
}

function getData(url) {

    getMenu(url, function (d) {
        setData(d);
    });
}

