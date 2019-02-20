// Draw Questions populates the survey html with the list of questions returned from the get request tothe api/questionlist
const drawQuestions = () => {
    // let questionArr = response.questionArr
    $.get('/api/questionlist', (data) => {
      console.log(data);
      let questionArr = data.questionArr;
      questionArr.forEach(function(quesObj, index){
        let qNum = index + 1;
        let questDiv = $(`<div class='col-12'>`)
        let quesTitle = `<h4><strong>Question ${qNum}</strong></h4>`
        let quest = `<h5>${quesObj.name}</h5>`
        let questOptions = /*html*/`
          <select class="chosen-select" id="q${qNum}">
            <option value="">Choose One</option>
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

// This function button click gathers all info from survey form - validates it - and if it checks out sends to the api for compairson to
// friends in current firends obj
const buttonSubmit  = () => {
  $('#submitButton').click(function(){
    let ansArr = []
    $(".chosen-select").each(function(){
      ansArr.push($(this).val());
    })
    let valid = formValidate(ansArr);
    if (!valid){
      $('#foundFriends .modal-title').text(`Please fill out the form completely!`);
      $('#foundFriends img').attr('src', 'assets/images/finishit.gif' );
      setTimeout(function(){
        $('#foundFriends').modal('show');
      }, 100)
    }else{
      // alert('Good job!')
      let slug = $('#userName').val().trim();
      slug = (slug.replace(/\s/g,"")).toLowerCase();
      let questionairResponse = {}
      questionairResponse.name = $('#userName').val().trim();
      questionairResponse.photo = $('#userImg').val().trim();
      questionairResponse.slug = slug;
      questionairResponse.ansArr = ansArr;
      postResults(questionairResponse);
    }
  })//end of button click 
}//end of button fn

// validates info from survey form - checks for empty input boxes and that every ansewer has been chosen
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
    setTimeout(function(){
      $('#foundFriends').modal('show');
    }, 100)
  });
}


$(document).ready(function(){
  drawQuestions()

});//end of doc.ready
