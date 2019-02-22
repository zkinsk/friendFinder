// contains seed data for a base list of made of friends.  I also had it contain the js code for comparing the survey results with the existing 
// array of friends. I chose to put the js here instead of the api routes.js because this seemed like the right place to perform the checks. 


friendsObj = {
  friendsArr: [
    {
      name: "Bob Frank",
      slug: "bobfrank",
      photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/41db0511-770f-471c-98d4-9197b0b97009/dbms9q0-5ecac734-cdff-4123-896e-d2e3866eb860.jpg/v1/fill/w_800,h_528,q_70,strp/bob__frank_silva__twin_peaks_by_traku8_dbms9q0-fullview.jpg",
      ansArr: [1,1,1,1,5,5,4,2,3,5],
    },
    {
      name:"Ahmed",
      slug:"ahmed",
      photo:"http://www.kinyu-z.net/data/wallpapers/19/766862.jpg",
      ansArr:[5,1,4,4,5,1,2,5,4,1]
    },
    {
      name:"A Rock",
      slug:"arock",
      photo:"https://media.boingboing.net/wp-content/uploads/2017/08/Pet_rock.jpg",
      ansArr:[1,5,5,5,5,5,3,5,1,1]
    },
    {
      name:"Bob Ross",
      slug:"bobross",
      photo:"https://i.ytimg.com/vi/LLtnuwplw1A/maxresdefault.jpg",
      ansArr:[5,1,5,1,5,1,1,1,5,5]
    },
  ],
  // function that takes in the results of the current survey and copares the anwers with all other people on the list
  //returns the closes match back to the apiRoutes js
  survCompare: function(newSurv){
    let compareArr = []
    this.friendsArr.forEach(function(frend, fNum){
      let compareObj = {};
      let diff = 0;
      frend.ansArr.forEach(function(fans, index){
        diff += Math.abs(parseInt(fans) - parseInt(newSurv[index]));
      })
      compareObj = {id: fNum, diff: diff};
      compareArr.push(compareObj);
    })
    compareArr = compareArr.sort(function(a,b){
      return(a.diff - b.diff);
    })
    // console.log("comp Arr: ", compareArr);
    return this.friendsArr[compareArr[0].id];
    // return compareArr[0];
  }
}

module.exports = friendsObj;

// let ans = [5,1,3,4,1,2,2,5,4,1]
// friendsObj.survCompare(ans);