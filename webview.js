module.exports = (Franz) => {
    const getMessages = function getMessages() {
        const messages = parseInt(document.querySelector('.unread-notifications').text);
        Franz.setBadge(messages);
    };
    Franz.loop(getMessages);
  };