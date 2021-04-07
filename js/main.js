// Animate smooth scroll
$("#view-work").on("ckick", function () {
  const images = $("#images").position().top;

  $("html, body").animate(
    {
      scrollTop: images,
    },
    900
  );
});
