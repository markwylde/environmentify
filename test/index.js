const test = require('tape');
const browserify = require('browserify');
const finalStream = require('final-stream');

test('transforms correctly when undefined', t => {
  t.plan(1);

  const b = browserify({ bare: true, transform: [require('../')] });
  b.add('./test/example.js');
  const stream = b.bundle();

  finalStream(stream, function (error, result) {
    if (error) {
      console.log(error);
      t.fail(error.message);
      return;
    }

    t.ok(result.includes('console.log(undefined)'));
  });
});

test('transforms correctly when defined', t => {
  t.plan(1);

  process.env.TEST = 'HELLO';

  const b = browserify({ bare: true, transform: [require('../')] });
  b.add('./test/example.js');
  const stream = b.bundle();

  finalStream(stream, function (error, result) {
    if (error) {
      console.log(error);
      t.fail(error.message);
      return;
    }

    t.ok(result.includes('console.log("HELLO")'));
  });
});
