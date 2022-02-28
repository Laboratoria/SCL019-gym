const fs = require("fs");

function isSessionCreated(sessionPath) {
  return fs.existsSync(sessionPath);
}

function createSession(sessionPath) {
  fs.mkdirSync(sessionPath, (error) => {
    if (error) {
      return console.error(error);
    }
  });
  fs.mkdirSync(`${sessionPath}/exercises`, (error) => {
    if (error) {
      return console.error(error);
    }
  });
  fs.closeSync(fs.openSync(`${sessionPath}/README.md`, "w"));
  console.log(`New session folder created successfully at: ./${sessionPath}`);
}

if (!process.argv[2]) {
  console.log("Please add a path for the new session");
  process.exit(1);
}

const sessionPath = process.argv[2];

if (isSessionCreated(sessionPath)) {
  console.log("Session folder already exists");
} else {
  createSession(sessionPath);
}
