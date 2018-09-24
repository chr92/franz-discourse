module.exports = (Franz) => {
    const getMessages = function getMessages() {
        // TODO: Figure out correct selecter
        // const messages = document.querySelectorAll('.hc-mention').length;
        Franz.setBadge(messages);
    };
    Franz.loop(getMessages);
  };