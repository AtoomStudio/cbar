var monthsArray = [];
var monthsToShow = 6;

function formatDate(date) {
    return date.toISOString().replace('.000Z', '+00:00');
}

function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

function getMonths(endDate) {
    var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    endDate = new Date(endDate);
    var d;
    var rtpRealHead = "<th>Juego</th>";

    for (var i = 0; i < monthsToShow; i++) {
        d = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth() - i, 1, 0, 0, 0));
        monthsArray.push(formatDate(d));
        rtpRealHead += "<th>" + monthNames[d.getMonth()] + " " + d.getFullYear() + "</th>"
        document.querySelector('#rtp-real-head').innerHTML = rtpRealHead;
    }
}

const loaderContainer = document.querySelector('.loader-container');
const arrowBtn = document.querySelector('.accordion__arrow--real');
const accordions = document.querySelectorAll('[data-accordion]');

const setAttribute = () => {
        accordions.forEach(accordion => {
        accordion.setAttribute('isLoading','')
    });
}

const resetAttribute = () => {
    accordions.forEach(accordion => {
        accordion.removeAttribute('isLoading')
    });
}

const displayLoading = () => {
    loaderContainer.style.display = 'block';
    arrowBtn.style.display = 'none';
    setAttribute();
};

const hideLoading = () => {
    loaderContainer.style.display = 'none';
    arrowBtn.style.display = 'block';
    resetAttribute();
};


function fillRtpReal() {
    var maxDate = formatDate(new Date(0));
    var minDate = formatDate(new Date());
    displayLoading();
    fetch('https://api.casinobarcelona.es/api/slots?pagination=false', { headers: { 'Accept': 'application/json' } })
        .then(response => response.json())
        .then(data => {
            data.sort(compare);
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].rtp.length; j++) {
                    if (data[i].rtp[j].date < minDate) {
                        minDate = data[i].rtp[j].date;
                    }
                    if (data[i].rtp[j].date > maxDate) {
                        maxDate = data[i].rtp[j].date;
                    }
                }
            }
            getMonths(maxDate);
            var rows = "";
            for (var i = 0; i < data.length; i++) {
                var slot = data[i];
                rows += `<tr><td>${slot.name}</td>`;
                for (var j = 0; j < monthsArray.length; j++) {
                    var rtp = slot.rtp.find(function (rtp) {
                        return rtp.date === monthsArray[j];
                    });
                    if (rtp && parseInt(rtp.value) > 0) {
                        rows += `<td>${rtp.value}%</td>`;
                    } else {
                        rows += `<td> - </td>`;
                    }
                }
                rows += "</tr>"
            }            

            document.querySelector('.rtp-loading').remove();
            document.querySelector('#rtp-real-content').innerHTML = rows;           
            hideLoading(); 
        })

           
}

export default fillRtpReal;
