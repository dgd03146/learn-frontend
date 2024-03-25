const echo = <T>(value: T): T => {
  console.log(value);
  return value;
};

echo(1);
echo('jung');
echo({});

echo<string>('');

const echoLength = <T extends { length: number }>(value: T) => {
  console.log(value.length);

  return value.length;
};

echoLength(['a']);
