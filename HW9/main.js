$(document).ready(function () {
  $("button").click(function () {
    $("#bikeInformation").load(
      "https://montana-media-arts.github.io/441-WebTech-Spring2021-Examples/Week%209/bikeInfo.txt"
    );
  });
});
