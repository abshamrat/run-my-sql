module.exports = function(message, type) {
  const isDebug = process.env.DEBUG === 'true';
  if (isDebug) {
    if (type === 'progress') {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(message);
    } else {
      console[type || 'log'](message);
    }
  }
}