$(function() {
    // get "the monday" of a Date
    function getMonday(d) {
        d = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6 : 1);
        var monday = new Date(d.setDate(diff));
        var options = {year: 'numeric', month: '2-digit', day: '2-digit'};
        return monday.toLocaleDateString("it", options);
    }

    // monday for project-page
    $('#getmonday').text(getMonday(new Date()));
});
