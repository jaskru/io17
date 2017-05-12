const push = require('web-push');

// Get the subscription object from the command line.
const subscription = JSON.parse(process.argv[2]);

// Payload is the message we want to push.
const payload = JSON.stringify({
  notification: {
    title: 'NgStore',
    icon: '/assets/logo-96.png',
    body: 'Angular PWAs at Google IO!',
    requireInteraction: false,
  },
});

// Credentials previously generated by push.generateVAPIDKeys().
const credentials = {
  vapidDetails: {
    subject: 'mailto:test@angular.io',
    publicKey: 'BPm3UsR79ZIPppvRYEkWpDzbPB8tTSKKsG16qmvCPv6tyBdUMUu8lOZoRxtLnVSkTbzQlp0b6oJ_1TYXt3sMFdo',
    privateKey: '8KHDAvQF77xinlev5DhLXhz0yzWVRbNcrJuvPhDzcV8',
  },
};

push
  .sendNotification(subscription, payload, credentials)
  .catch(err => console.error(err));
