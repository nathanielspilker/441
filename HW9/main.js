$(document).ready(function () {
  $("button").click(function () {
    $("#bikeInformation").load(
      "https://github.com/nathanielspilker/441/blob/main/HW9/bikeinfo.txt"
    );
  });
});
