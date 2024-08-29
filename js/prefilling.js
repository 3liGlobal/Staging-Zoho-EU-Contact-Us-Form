window.addEventListener('message', function (event) {
    if (event.data.utm_medium || event.data.utm_source) {
        const leadSource = document.getElementById('lead_source');
        const horecaExperts = document.getElementById('horeca_experts');
        if (leadSource || horecaExperts) {
            leadSource.value = event.data.utm_medium || "";
            horecaExperts.value = event.data.utm_source || "";
        }
    }
});