(function() {

  function base64MimeType(encoded) {
    var result = null;

    if (typeof encoded !== 'string') {
      return result;
    }

    var mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);

    if (mime && mime.length) {
      result = mime[1];
    }

    return result;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = base64MimeType;
    }
    exports.base64MimeType = base64MimeType;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return base64MimeType;
    });
  } else {
    this.base64MimeType = base64MimeType;
  }

}).call(this);
