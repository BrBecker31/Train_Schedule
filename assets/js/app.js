  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUM_doIeJM6txvBrZ-2mD4Mk0xy7S5ziI",
    authDomain: "train-89504.firebaseapp.com",
    databaseURL: "https://train-89504.firebaseio.com",
    projectId: "train-89504",
    storageBucket: "train-89504.appspot.com",
    messagingSenderId: "206591951692"
  };
  firebase.initializeApp(config);

//creating my global variables
  var database = firebase.database();

  var trainName = "";
  var destination = "";
  var time = "";
  var frequency = 0;

//Button for adding all train information
$("#submit").on("click", function(event) {

//wont refresh the page with the button is clicked
event.preventDefault();

trainName = $("#inputName").val().trim();
destination = $("#inputDestination").val().trim();
time = moment($("#inputTime").val().trim(), "hh:mm").format("X");
frequency = $("#inputFrequency").val().trim();

//testing 
console.log(trainName);
console.log(destination);
console.log(time);
console.log(frequency);

// Creates local "temporary" object for holding train data
  var newTrain = {
    name: trainName,
    destination: destination,
    time: time,
    frequency: frequency
};

  // Uploads train data to the firebase
  database.ref().push(newTrain);

  //test #2
  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);

  //alert with a modal
  $('#exampleModalLong').modal('show')

   // Clears all of the text-boxes
  $("#inputName").val("");
  $("#inputDestination").val("");
  $("#inputTime").val("");
  $("#inputFrequency").val("");
});


//Create Firebase event for adding train information to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {

//test 3
  console.log(childSnapshot.val());

  //Store everything into a variable
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var time = childSnapshot.val().time;
  var frequency = childSnapshot.val().frequency;

  //test variables

  console.log(trainName);
  console.log(destination);
  console.log(time);
  console.log(frequency); 

  //change format of time from unix to hh:mm
  var trainTime = moment.unix(time).format("hh:mm");
  console.log(trainTime);

  //code to calculate the time logic
  //need to define var = nextTrain and minutesTillTrain







// Add each train's data into the table
  $("#full-train-list > tbody").append("<tr><td>" +  + "</td><td>" + trainName + "</td><td>" +
  destination + "</td><td>" + frequency + "</td><td>" + nextTrain + "</td><td>" + minutesTillTrain + "</td></tr>");
});


