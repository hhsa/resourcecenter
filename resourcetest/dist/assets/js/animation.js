
$(document).ready(function () {
    $(".preload").each(function (index, element) {
        setTimeout(function () { $(element).removeClass("preload") }, 10);
    });
});