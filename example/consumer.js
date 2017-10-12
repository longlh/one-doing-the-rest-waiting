const consumer = require('../src').Consumer.create();

consumer.register(channel => {
  console.log('registerConsumer', channel.id);

  return;

  channel.onRequest((command, done) => {
    // do somthing
    setTimeout(() => {
      done();
    }, 1e3);
  });
});
