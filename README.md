### Run `index.js`
```sh
deno run index.js
```

### Run `index.ts`
```sh
deno run index.ts
```

### Security Flags
- https://deno.land/manual/getting_started/permissions#permissions-list

```sh
# -A, --alow-all
# --allow-env
# --allow-hrtime
# --allow-net
deno run --allow-net=github.com,deno.land fetch.ts
# --allow-plugin
# --allow-read
# --allow-write
deno run --allow-read=/etc https://deno.land/std@0.96.0/examples/cat.ts /etc/passwd
# --allow-run
```