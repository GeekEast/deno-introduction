const testAwait = () => {
  return new Promise((res, _rej) => setTimeout(() => res('123'), 3000));
};

await testAwait().then(console.log);
