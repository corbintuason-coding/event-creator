# 🗓 Event Creator - Laravel Vue

The event creator is a project made by John Corbin Tuason. This project will serve as his submission for the Appetiser Pre-Hire Coding Challenge.

## 🌍 Deployed Website

You may visit the website at https://ignistech.online/

Some information regarding the deployment:

- Website has been deployed using Laravel Forge and Digital Ocean
- `php artisan migrate:fresh --seed` is being ran every deployment. This will generate 10 random events of the current month.

## 📕 Project Breakdown

Branch Names are named after their corresponding linear.app code. Below are the sample tasks used throughout the project

![alt text for screen readers](/public/linear.jpeg 'Text to show on mouseover')

## 🔧 Installation

```bash
// Instal PHP Dependencies
composer install

// Instal Node Modules
npm i
```

## 🧠 Backend Usage (Laravel 9)

Via Laravel

```
php artisan serve

php artisan migrate:fresh --seed

```

⛵️Via Laravel Sail <b>(Make sure your Docker Engine is up)</b>

```
./vendor/bin/sail up

./vendor/bin/sail php artisan migrate:fresh --seed

```

## 🖼 Frontend Usage (Vue 3)

```
npm run watch
```

> After successfully running Laravel and VueJs, you may access the website locally by visiting localhost (http://0.0.0.0:80) on your favorite Web Browser. Have Fun using the Web Application! 😊

## 📞 Contact Information

For Any Questions regarding the project, you may contact me through the following:

- email: johncorbintuason@gmail.com

- mobile no: 09289921274
