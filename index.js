/**
 * Loop over generator and get for each item current index.
 * @example
 * ```
    function *foo() {
        while(1) yield "bar";
    }

    for (const [index, item] of enumerate(foo())) {
        console.log(index, item);
        if (index === 2)
            break;
    }
    ```
 */
// async await can be useless but may be usefull if generator passed is async.
async function *enunerate(generator) {
  let i = 0;
  for await (const item of generator) {
    yield [i++, item];
  }
}

export { enumerate };
