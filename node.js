// const child = require('child_process');
// const fs = require('fs');

// // const output = child.execSync(`git log --format=%B%H----DELIMITER----`).toString('utf-8')
// // const commitsArray = output.split('----DELIMITER----\n').map(commit => {
// //   const [message, sha] = commit.split('\n')
// //   return { sha, message };
// // }).filter(commit => Boolean(commit.sha))
// // console.log({ commitsArray });

// const changeLogPath = "./UNRELEASE.md"
// const allTag = child.execSync(`git tag --list --sort=-version:refname "*" | head -n 2`).toString('utf-8').split("\n")

// //git log $(git describe --abbrev=0 --tags $(git describe --abbrev=0)^)...$(git describe --abbrev=0)
// // allTag.split("\n").slice(0, 1)
// // const betweenTagRecord = child.execSync(`git log '${currentTagHash}'...'${previousTagHash}' --pretty=oneline`)
// let init = process.argv.slice(2);
// const chore = [], feat = [], fix = [], ci = [], bump = [];
// console.log(init.length)

// let initNote = ""
// if (init == "init") {
//   const currentTag = allTag[0].toString('utf8')
//   const previousTag = allTag[1].toString('utf8')
//   const currentTagHash = child.execSync(`git show-ref --tags ${currentTag}`).toString('utf-8').split(" ")[0]
//   const previousTagHash = child.execSync(`git show-ref --tags ${previousTag}`).toString('utf-8').split(" ")[0]
//   initNote = child.execSync(`git log ${allTag[0]} --no-merges --pretty=format:"%h %s" --date=short`).toString('utf8').split("\n")

//   initNote.forEach(element => {

//     if (element.includes("fix: ")) {
//       fix.push(element)

//     }
//   })
//   let newChangelog = `${currentTag}\n \n---\n\n`
//   if (fix.length) {
//     newChangelog += `## Fix \n`;
//     fix.forEach(i => {
//       newChangelog += `* ${i}\n`;
//     });
//     newChangelog += '\n';
//   }
// }
// // const twoVersion
// if (init.length == 0) {
//   const currentTag = allTag[0].toString('utf8')
//   const previousTag = allTag[1].toString('utf8')
//   const currentTagHash = child.execSync(`git show-ref --tags ${currentTag}`).toString('utf-8').split(" ")[0]
//   const previousTagHash = child.execSync(`git show-ref --tags ${previousTag}`).toString('utf-8').split(" ")[0]
//   const releaseNote = child.execSync(`git log ${previousTagHash}..HEAD --no-merges --pretty=format:"%h %s" --date=short`).toString('utf8').split("\n")

//   releaseNote.forEach(element => {

//     if (element.includes("fix: ")) {
//       fix.push(element)

//     }

//     // if (element.startsWith("chore")) {

//     //   chore.push(
//     //     `* ${element.replace("chore ", "")} ([${element.substring(
//     //       0,
//     //       6
//     //     )}](https://github.com/ookangzheng/changelog-generator/commit/${element.split(" ")[0]
//     //     }))\n`
//     //   )

//     // }
//   });

//   let newChangelog = `${currentTag}\n \n---\n\n`
//   if (fix.length) {
//     newChangelog += `## Fix \n`;
//     fix.forEach(i => {
//       newChangelog += `* ${i}\n`;
//     });
//     newChangelog += '\n';
//   }

//   try {
//     if (fs.existsSync(changeLogPath)) {
//       writeLog(changeLogPath, cb)
//     }
//   } catch (err) {
//     console.error(err)
//   }

}


function writeLog(changeLogPath) {
  try {
    if (fs.existsSync(changeLogPath)) {
      writeLog(changeLogPath)

      const currentChangelog = fs.readFileSync(changeLogPath, "utf-8")
      fs.writeFileSync(changeLogPath, `${newChangelog}${currentChangelog}`);
    } else {
      fs.appendFileSync(changeLogPath, "", { encoding: "utf-8", flag: 'w' })
      writeLog(changeLogPath)
    }
  } catch (err) {
    console.error(err)
  }
}

function checkFile(changeLogPath) {
  if (fs.existsSync(changeLogPath)) {
    return
  } else {
    fs.appendFileSync(changeLogPath, "", { encoding: "utf-8", flag: 'w' })
  }
}
