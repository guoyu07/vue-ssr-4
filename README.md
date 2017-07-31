## run

- dev

```
$ npm run dev
```

- prod

```
$ npm run build && npm run start
```

## ERROR

- 2017.07.31, 导致路由一直都是指向 `/`

```
--app.use('*', isProd ? render : (req, res) => {--
  console.log('8888');
  readyPromise.then(() => render(req, res))
})
```

应该是(把 `get` 写成了 `use`):

```
app.get('*', isProd ? render : (req, res) => {
  console.log('8888');
  readyPromise.then(() => render(req, res))
})
```

- `runInNewContext: false` 不能设为 `true`