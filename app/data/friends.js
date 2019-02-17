friendsObj = {
  friendsArr: [
    {
      name: "Bob Frank",
      photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/41db0511-770f-471c-98d4-9197b0b97009/dbms9q0-5ecac734-cdff-4123-896e-d2e3866eb860.jpg/v1/fill/w_800,h_528,q_70,strp/bob__frank_silva__twin_peaks_by_traku8_dbms9q0-fullview.jpg",
      ansArr: [3,2,6,4,5,1,2,5,4,1],
    },
    {
      name:"Ahmed",
      photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      ansArr:[5,1,4,4,5,1,2,5,4,1]
    },
    {
      name:"Ahmed",
      photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      ansArr:[5,1,3,4,1,2,2,5,4,1]
    },
    {
      name:"Ahmed",
      photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      ansArr:[5,1,3,4,1,2,2,5,4,1]
    },
  ],
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
    console.log("comp Arr: ", compareArr);
    return this.friendsArr[compareArr[0].id];
    // return compareArr[0];
  }
}

module.exports = friendsObj;

// let ans = [5,1,3,4,1,2,2,5,4,1]
// friendsObj.survCompare(ans);