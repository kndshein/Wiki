## Misc. Commands

- Git Worktree

```
git worktree add <path> <branch>
git worktree remove <path>
```

- Open VSCode as superuser

```
sudo code --user-data-dir=~/root
```

- To Kill a Mocking Port

```
sudo kill -9 $(sudo lsof -t -i:<PORTNUMBER>)
```

- Set mongodb path

```
mongod --dbpath ~/mongodata
```
