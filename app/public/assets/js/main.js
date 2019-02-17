//array of questions
const questiongArr = [
  {
    name: "Your mind is always buzzing with unexplored ideas and plans."
  },
  {
    name: "Generally speaking, you rely more on your experience than your imagination."
  },
  {
    name: "You find it easy to stay relaxed and focused even when there is some pressure."
  },
  {
    name: "You rarely do something just out of sheer curiosity."
  },
  {
    name: "People can rarely upset you."
  },
  {
    name: "It is often difficult for you to relate to other people’s feelings."
  },
  {
    name: "In a discussion, truth should be more important than people’s sensitivities."
  },
  {
    name: "You rarely get carried away by fantasies and ideas."
  },
  {
    name: "You think that everyone’s views should be respected regardless of whether they are supported by facts or not."
  },
  {
    name: "You feel more energetic after spending time with a group of people."
  },
];

const drawQuestions = () => {
  questiongArr.forEach(function(quesObj, index){
    let qNum = index + 1;
    let questDiv = $("<div>")
    let quesTitle = `<h4><strong>Question ${qNum}</strong></h4>`
    let quest = `<h5>${quesObj.name}</h5>`
    let questOptions = /*htm*/`
      <select class="chosen-select" id="q${qNum}">
        <option value=""></option>
        <option value="1">1 (Strongly Disagree)</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5 (Strongly Agree)</option>
      </select>
    `//end questOptions var
    questDiv.append(quesTitle, quest, questOptions, "<br><br>");
    $("#surveyBox").append(questDiv);
  })
  buttonSubmit();
};// end of drawQuestion fn

const buttonSubmit  = () => {
  $('#submitButton').click(function(){
    let ansArr = []
    $(".chosen-select").each(function(){
      ansArr.push($(this).val());
    })
    let valid = formValidate(ansArr);
    if (!valid){
      alert("Complete Form!")
    }else{
      // alert('Good job!')
      let questionairResponse = {}
      questionairResponse.name = $('#userName').val().trim();
      questionairResponse.photo = $('#userImg').val().trim();
      questionairResponse.ansArr = ansArr;
      postResults(questionairResponse);
    }
  })//end of button click 
}//end of button fn


const formValidate = (ansArr) => {
  let valid = ansArr.every(ans => ans !== "");
  $(".form-control").each(function(){
    if ($(this).val() === ""){
      valid = false    
    }
  })
  return valid
}//end of form validate

const postResults = (questionairResponse) => {
  $.post("/api/survey", questionairResponse, function(response){
    // console.log(response.body);
    // console.log(response.text);
    console.log(response);
    $('#myModal').modal('show');
  });
}


$(document).ready(function(){
  // alert("loaded")
  drawQuestions()
});//end of doc.ready
