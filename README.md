# Web-server for weather application

## Setting up SSH Keys for Git and Heroku

1. Check if there are SSH keys created
```sh
ls -a -l ~/.ssh
```

2. If there are no files or the folder doesn't exists, a SSH key should be created. If there's a key created, go to Step #4.
```sh
ssh-keygen -t rsa -b 4096 -C "{email}"
```
Hit enter to set all default values

3. Set the SSH so that it can be used for any new SSH connection
```sh
eval "$(ssh-agent -s)"
ssh-add -K ~/.ssh/id_rsa
```

4. Add the SSH key to Git using the Web Application by adding a given title and pasting the contents of the key. To copy the key contents to the clipboard use the following command:
```sh
pbcopy < ~/.ssh/id_rsa.pub
```

5. Finally, test the SSH connection
```sh
ssh -T git@github.com
```

6. To add the SSH key to heroku use the following command:
```sh
heroku keys:add
```

## Heroku deployment process

1. Log in to Heroku account
```sh
heroku login
```

2. Create the application running the following command on the root folder:
```sh
heroku create {proyect-name}
```

