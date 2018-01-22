function Task(item, isComplete) {
  this.item = item;
  this.isComplete = isComplete;
};

$(document).ready(function(){

  var isComplete = false;
  var allTasks = [];

  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var newItem = $("#to-do").val();
    var newTask = new Task(newItem, isComplete);
    allTasks.push(newTask);

    $("#checklist").show();
    $(".blockquote").slideDown();

    for(index = allTasks.length; index <= allTasks.length; index +=1) {
      $("ul#list").append("<li id='" + index + "' class='item'>" + allTasks[index-1].item + "</li>");
    };

    $("input#to-do").val("");

    $("ul#list").children("li").click(function() {
      $(this).remove();
      var itemId = $(this).attr('id');
      itemId = parseInt(itemId);
      allTasks[itemId-1].isComplete = true;
    });

    $(".blockquote").click(function() {
      $(".blockquote").slideUp();
    });

  });

});
