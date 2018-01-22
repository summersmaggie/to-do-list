function Task(item, isComplete) {
  this.item = item;
  this.isComplete = isComplete;
};

$(document).ready(function(){
  var isComplete = false;
  $("form#new-list").submit(function(event) {
    event.preventDefault();
    var newItem = $("#to-do").val();

    var newTask = new Task(newItem, isComplete);

    $("#checklist").show();
    $("ul#list").append("<li class='item'>" + newTask.item + "</li>");

    $(".item").last().click(function() {
      $(".item").fadeOut();
    });

  });

});
