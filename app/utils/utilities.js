
export function getRandomInt(min, max, exclude) {
    var val;
    do {
        val = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (val === exclude);

    return val
}

export function snapshotToArray(snapshot) {
    var returnArr = [];
console.log(snapshot);
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
console.log(item);
        returnArr.push(item);
    });

    return returnArr;
};


export function objToArray(data){
    var arr = []
  data.forEach(ss=>{

    arr.push(ss.child('name').val())
  })
      
      return arr
 // return  Object.entries(data).map(([key, value]) => ({ [key]:value }));
}

export function objToArrayWithKey(data){

    return  Object.entries(data).map(([key, value]) => ({ [key]: value }));
  }

  export function arraySort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export function convertISODate(ISODt){

    var date = new Date(ISODt);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var dt = date.getDate();
    
    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    var strDt =year+'/' + month + '/'+dt
    console.log(strDt);
    if(isNaN(year)){strDt = ""}
    return strDt



}

export var audioList = {
    
        start : document.getElementById("start"),
    }

export var currentAudio;

export function playAudio(item) {
    // console.log(item)
     if (currentAudio != null && item != currentAudio) {
       //  console.log("stop audio");
         currentAudio.pause();
         currentAudio.currentTime = 0;
         currentAudio.volume = 1;
     }
     if (item != null) {
         console.log("play audio");
        console.log(item);
         item.play();
         currentAudio = item;
         item.volume = 1;
     }
 }
 
 function stopAudio(item) {
     try {
 item.pause()
     } catch (e) {
         console.log("cant find audio item: " + item);
     }
 
     
 
 }