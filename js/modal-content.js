$("#project-modal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget);
  var project = button.data("project");
  var htmlRef = button.data("htmlref");
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  modal.find(".modal-title").text(project);
  //   modal.find(".modal-body").text("This should change the modal content");
});
