
const drawQuestions = () => {
    // let questionArr = response.questionArr
    $.get('/api/questionlist', (data) => {
      console.log(data);
      let questionArr = data.questionArr;
      questionArr.forEach(function(quesObj, index){
        let qNum = index + 1;
        let questDiv = $("<div>")
        let quesTitle = `<h4><strong>Question ${qNum}</strong></h4>`
        let quest = `<h5>${quesObj.name}</h5>`
        let questOptions = /*html*/`
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
    })

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
    // console.log(response);
    let friendName = response.friend.name;
    let imgTag = response.friend.photo;
    $('#foundFriends .modal-title').text(`${friendName} is your best match!`)
    $('#foundFriends img').attr('src', imgTag)
    $('#foundFriends').modal('show');
  });
}


$(document).ready(function(){
  drawQuestions()

});//end of doc.ready
