function converMessageToLiteral(options, message) {
  return eval("`" + message + "`");
}

module.exports = function SimpleLogger(options, message) {
  try {
    console.debug(converMessageToLiteral(options, message));
  } catch (err) {
    console.error(err.message);
  }
};
