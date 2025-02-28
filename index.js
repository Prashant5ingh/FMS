var fs = require("fs");
arr = []
number_of_faulty_devices = 4;
severities = ["Clear", "Warning", "Major", "Severe", "Critical"]
statuses = ["Unacknowledged", "Acknowledged", "Cleared", "Terminated"]
traps = ["cbgpFsmStateChange", "cbgpBackwardTransition", "cbgpPrefixThresholdExceeded", "cbgpPrefixThresholdClear"]
// module.exports = (req, res, next) => {
//   if (req.method == 'POST' && req.path == '/register') {
//     const date2 = new Date()
//     const date1 = new Date(req.body.joiningDate)
//     console.log("today", date2)
//     console.log("joining date", date1)
//     console.log("6 months before", deltaDate(date2, 0, -6, 0))

//     if (date1 > deltaDate(date2, 0, -6, 0)) {
//       res.status(400).json({
//         ...req.body,
//         message: "You are not eligible for laptop as you have not completed six months"
//       })
//     }
//     else {
//       req.body.message = null
//       next()
//     }
//   }
//   else {
//     next()
//   }
// }

module.exports = (req, res, next) => {
  if (req.path.startsWith("/faults") && req.method == "GET") {
    RunSimulator(() => ReadFaults(res, req))
  }
  else if (req.path.startsWith("/faults/") && req.method == "PUT") {
    let temp = req.path.split('/')
    let id = Number(temp[2])
    if (temp.length === 3) {
      if (!isNaN(id))
        fs.readFile('./faults.json', 'utf8', async function (err, data) {
          let faults = JSON.parse(data)
          let index = 0
          let faultToBeUpdated = {}
          let tempObj = faults.forEach((fault, i) => {
            if (fault.id == id) {
              index = i
              faultToBeUpdated = fault
            }
          })
          tempObj = { ...faultToBeUpdated, ...req.body }
          faults[index] = tempObj
          fs.writeFile("./faults.json", JSON.stringify(faults), (err) => {
            if (err) { console.error(err); };
            console.log("faults has been updated");
          })
          res.status(200).json({
            "message": "Fault has been updated"
          })
        })
      else {
        res.status(400).json({
          "message": "Fault id does not exists"
        })
      }
    }
    else {
      res.status(400).json({
        "message": "Fault id does not exists"
      })
    }
  }
  else if (req.path.startsWith("/login") && req.method == "POST") {
    fs.readFile('./db.json', 'utf8', async function (err, data) {
      let users = (JSON.parse(data)['users'])
      let currentUser = users.find((user) => {
        if (user.username == req.body.username && user.password == req.body.password) {
          return user
        }
      })
      console.log(currentUser)
      if (currentUser) {
        if (currentUser.status == "Activated") {
          res.status(200).json({
            ...currentUser,
            "role": currentUser.role,
            "id": currentUser.id,
            "status": currentUser.status,
            "username": currentUser.username,
            "password": currentUser.password,
            "message": "User is loggined successfully"
          })
        }
        else {
          res.status(400).json({
            "message": "User is deactivated"
          })
        }
      }
      else {
        res.status(400).json({
          "message": "Wrong username or password"
        })
      }
    })

  }

  else {
    next()
  }
}

function ReadFaults(res, req) {
  fs.readFile('./faults.json', 'utf8', async function (err, data) {
    let faults = JSON.parse(data)
    res.status(200).json(
      faults
    )
  })
}

function RunSimulator(callback) {
  fs.readFile('./db.json', 'utf8', async function (err, data) {
    let date = new Date();
    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (let i = 0; i < number_of_faulty_devices; i++) {
      arr.push({
        ...JSON.parse(data)['devices'][generateRandomNumber(0, JSON.parse(data)['devices'].length - 1)],
        id: arr.length,
        "fault_date": date,
        "fault_time_ms": date.getTime(),
        "fault_date_time": date.getDate() + "-" + mL[date.getMonth()] + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
        "status": statuses[0],
        "severity": severities[generateRandomNumber(0, severities.length - 1)],
        "trap": traps[generateRandomNumber(0, traps.length - 1)],
        "Notes": "",
        "occurance": generateRandomNumber(0, 21)
      })
    }
    fs.writeFile("./faults.json", JSON.stringify(arr), (err) => {
      if (err) { console.error(err); return; };
      console.log("faults has been updated");
      if (callback) {
        callback()
      }
    })
  })
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// setInterval(() => {
//   RunSimulator()
// }, 8000);