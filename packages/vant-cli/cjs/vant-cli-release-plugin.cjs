const releaseIt = require('release-it');
const { execSync } = require('child_process');

class VantCliReleasePlugin extends releaseIt.Plugin {
  async beforeRelease() {
    // log an empty line
    console.log('');

    execSync('vant-cli build');
    execSync('vant-cli changelog');
  }
}

module.exports = VantCliReleasePlugin;
