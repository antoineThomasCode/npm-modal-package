'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".modal-container{align-items:center;background-color:hsla(0,0%,100%,.301);display:flex;height:100vh;justify-content:center;margin:0 auto;position:fixed;top:0;width:100vw;z-index:999}.modal-container>button{border-radius:2px;cursor:pointer;font-size:1.5em;font-weight:200;padding:5px 10px;position:absolute;right:62px;top:55px}.modal-container>button,.modal-content{background-color:#fff;border:1px solid #000;box-shadow:5px 15px 33px 14px hsla(0,0%,47%,.089)}.modal-content{align-items:center;border-radius:5px;display:flex;flex-basis:90%;flex-direction:column;height:90vh;justify-content:center}";
styleInject(css_248z);

function Modal({
  children,
  setModalState,
  title
}) {
  function handleCloseModal(e) {
    e.preventDefault();
    setModalState(false);
  }

  const closeOnEscape = e => {
    if ((e.charcode || e.keyCode) === 27) {
      handleCloseModal(e);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscape);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "modal-close",
    onClick: e => handleCloseModal(e)
  }, "\u2715"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-content"
  }, title && /*#__PURE__*/React__default["default"].createElement("h2", null, title), children));
}

module.exports = Modal;
