# Приложения для общения на языке морзе

Приложение для отправки и получения сообщений, которые написаны с помощью азбуки морзе с открытым исходным кодом и API документацией.
Чтобы отправлять сообщения, пользователю необходимо войти в свой аккаунт, после чего написать сообщение нужному участнику группы. Сообщения декодируются в азбуку морзе и таким образом, другой пользователь получит письмо уже в виде азбуки морзе. 

📕 Детали и полное описание архитектуры проекта смотрите [Архитектура проекта](/wiki/architecture.md)

## Оглавление

- [Приложения для общения на языке морзе](#приложения-для-общения-на-языке-морзе)
	- [Оглавление](#оглавление)
	- [Задачи и их реализация](#задачи-и-их-реализация)
		- [Задача](#задача)
		- [Особенности реализации задачи](#особенности-реализации-задачи)
		- [Дополнительные задачи](#дополнительные-задачи)
	- [Стек технологий](#стек-технологий)
	- [Запуск приложения](#запуск-приложения)

## Задачи и их реализация

### Задача

Написать веб-сервер и клиент для общения азбукой морзе.

### Особенности реализации задачи

Особенности реализации задачи:
- Сообщения в клиенте вводятся **как с помощью обычного текста, так и с помощью азбуки морзе**, отображаются же в виде сообщений форматированных азбукой морзе. (текст написанный только символами: "-" и ".").
- Общение возможно только между двумя пользователями.
- Общение возможно только между авторизированными пользователями.
- Для отправки сообщения в клиенте нужно указать имя получателя и сообщение.
- Сервер не хранит историю переписки **,а только сообщения, которые отправлены непосредственно конкретному пользователю.**

### Дополнительные задачи 
- Если у пользователя чата роль "newby" - у пользователя есть возможность декодирования сообщения на сервере для отображения в клиенте.
- Функционал для управления пользователями (добавить / забанить / удалить)

## Стек технологий

В приложении задействованы следующие куски разработки или же типы технологий:

| Направленность разработки или тип технологии | Название технологии | Применение |
| :----------: | :-----------------: | :------------- |
| Язык программирования | TypeScript | Back-end и CLI |
| Язык программирования | JavaScript | Front-end он же GUI |
| Фреймворк | Express.js | Back-end |
| База данных | mongoose | NPM модуль для работы с MongoDB |
| Авторизация | jsonwebtoken | Реализация JWT токенов для опознавания пользователя |
| Сессии | connect-mongo / express-session | Реализация хранилища сессий с помощью MongoStore |
| Шаблонизатор | pug | Отрисовка HTML-страничек для Front-end |
| Связь между Back-end и Front-end | axios | Создание запросов для обмена данными между сервером и веб-клиентом |
| Шифрование | bcrypt | Реализация шифрования пароля пользователя |
| Сокрытие приватных переменных | config | Сокрытие приватных переменных для разных режимов работы (development или testing) приложения |
| CLI | Inquirer | Реализация интерфейсов командной строки |
| Тесты | ts-jest / supertest / mongodb-memory-server | Подключение тестирования и end-to-end тесты |
| Документация | swagger / swagger-ui-express / yamljs | Подключение и описание Swagger документации |

## Запуск приложения

В приложение **сознательно добавлена папка `config` с приватными переменными, для ускоренного пользования приложением**.

Для корректной работы приложения необходимо установить Docker и развернуть в нём контейнер образа mongo-express. Чтобы скачать образ перейдите по этой [ссылке](https://hub.docker.com/_/mongo-express)

Чтобы запустить приложение необходимо сделать следующее:
1. Скачать архив с приложением и развернуть архив в любой папке.
2. Ввести `npm install` в консоли, предварительно открыв консоль в корне проекта.
3. Ввести `npm run dev` и открыть приложение по адресу `http:/localhost:3001`.
4. Если происходит регистрация через веб-клиент, то пользователь по умолчанию получит роль: `newby`, тем самым у него будет возможность переводить полученые сообщения.
5. Если происходит регистрация через консольный клиент, то пользователь получит роль: `admin`, тем самым у него не будет возможности переводить полученные сообщения, но будет возможность просматривать всех пользователей, банить их или удалять.