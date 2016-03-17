// Define a collection to hold our tasks
Task  = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // counter starts at 0
  Meteor.startup(function(){
    React.render(<App />, document.getElementById("render-target"));
  });
}