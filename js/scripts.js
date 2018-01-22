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

    for(index = allTasks.length; index <= allTasks.length; index +=1) {
      $("ul#list").append("<li id='" + index + "' class='item'>" + allTasks[index-1].item + "</li>");
    };

    $("ul#list").children("li").click(function() {
      $(this).remove();
      console.log(index);
      //allTasks[].isComplete = true;
    });

    console.log(allTasks);

  });

});
