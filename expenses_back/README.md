Apigility REST API for Expenses Annotations App
===============================================

Requirements for this part: the Backend
---------------------------------------
After clone the whole project (backend and frontend) 

```bash
# git clone https://github.com/damor4321/expenses # optionally, specify the directory in which to clone
$ cd path/to/install/expenses_back
```

You need to use [Composer](https://getcomposer.org/) to install
dependencies for this part. The backend. Please see the [composer.json](composer.json) file 
in path/to/install/expenses_back director. In particular require damor4321/expenseslib from GitHub repository.

Assuming you already have Composer:

```bash
$ cd path/to/install/expenses_back
$ composer install


Launch the Backend of the Expenses App
--------------------------------------

Now, fire it up! Do one of the following:

- Create a vhost in your web server that points the DocumentRoot to the
  `public/` directory of the project
- Fire up the built-in web server in PHP(**note**: do not use this for
  production!)

In the latter case, do the following:

```bash
$ cd path/to/install
$ php -S 0.0.0.0:8080 -ddisplay_errors=0 -t public public/index.php
# OR use the composer alias:
$ composer serve
```

You can then visit the site at http://localhost:8080/ - which will bring up a
welcome page and the ability to visit the dashboard in order to create and
inspect the Expenses API.
