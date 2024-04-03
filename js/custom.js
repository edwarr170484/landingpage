const modal = {
  open() {
    $(".modal").addClass("show");
  },
  close() {
    $(".modal").removeClass("show");
  },
};

$(document).ready(function () {
  $("#phonenumb").mask("+7(999)999-99-99");
});
