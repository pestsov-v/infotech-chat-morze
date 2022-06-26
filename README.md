# Приложения для общения на языке морзе.

Приложение для отправки и получения сообщений, которые написаны с помощью азбуки морзе с откытым исходным кодом и API документацией.
Чтобы отправить соо 

## Оглавление
- [Приложения для общения на языке морзе.](#приложения-для-общения-на-языке-морзе)
	- [Оглавление](#оглавление)
	- [Задачи и их реализация](#задачи-и-их-реализация)
		- [Задача](#задача)
		- [Особенности реализации задачи](#особенности-реализации-задачи)
		- [Допольнительные задачи](#допольнительные-задачи)
	- [Стэк технологий](#стэк-технологий)
	- [Архитектура](#архитектура)
		- [Root folder](#root-folder)
		- [Sourse folder](#sourse-folder)
		- [API folder](#api-folder)
			- [Auth folder](#auth-folder)
			- [Message folder](#message-folder)
			- [User folder](#user-folder)
		- [CLI folder](#cli-folder)
		- [Core folder](#core-folder)
		- [Documentation folder](#documentation-folder)
		- [GUI folder](#gui-folder)
	- [Как читать код](#как-читать-код)
		- [Входная точка в приложение](#входная-точка-в-приложение)
		- [Server](#server)
			- [Файлы отрисовки pug](#файлы-отрисовки-pug)
			- [Session](#session)
			- [Swagger документация](#swagger-документация)
			- [Application programm interface (API)](#application-programm-interface-api)
		- [Database](#database)
		- [CLI](#cli)
	- [Applacation programming interface (API)](#applacation-programming-interface-api)
	- [Command line interface (CLI)](#command-line-interface-cli)
	- [Graphical user interface (GUI)](#graphical-user-interface-gui)
	- [Тестирование](#тестирование)

## Задачи и их реализация

### Задача

Написать веб-сервер и клиент для общения азбукой морзе.

### Особенности реализации задачи

Особенности реализации задачи:
- Сообщения в клиент вводятся **как с помощью обычного текста, так и с помощью азбуки морзе**, отображаются же в виде сообщений форматированных азбуков морзе. (текст написанный только символами: "-" и ".").
- Общение возможно только между двумя пользователями.
- Общение возможно только между авторизированными пользователями.
- Для отправки сообщения в клиенте нужно указать имя получателя и сообщение.
- Сервер не хранит историю переписки, **а только сообщения, которые отправлены непосредственно конкретному пользователю.**

### Допольнительные задачи 
- Если у пользователя чата роль "newby" - у пользователя есть возможность раскодирования сообщения на сервере для отображения в клиенте.
- Функционал для управления пользователями (добавить / забантиь / удалить)

## Стэк технологий

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
| CLI | Inquirer | Реализация интерфейсов коммандной строки |
| Тесты | ts-jest / supertest / mongodb-memory-server | Подключение тестирования и end-to-end тесты |
| Документация | swagger / swagger-ui-express / yamljs | Подключение и описание Swagger документации |

## Архитектура

Приложение построено по архитектуре монолита.

### Root folder

[![architecture-root.png](https://i.postimg.cc/L6SkRGgT/architecture-root.png)](https://postimg.cc/xqsN3xRJ)

Которая состоит из директорий:
- `сonfig` - директория в которой находятся приватные переменные соответствующих режимов запусков приложения.
- `src` - директория со всем програмным кодом приложения.

Файлов:

- `.gitattributes`, `.gitignore` - служебные файлы работы с `GitHub`.
- `jest.config.ts` - файл конфигурация работы фреймворка тестирования - `jest`.
- `LICENSE` - лицензия.
- `package-lock.json` - служебный файл, который отвечает за последующую установку непосредственно тех версий NPM пакетов, какие используются на моей собственной хост машине при запуске данного приложения.
- `package.json` - служебный файл, который хранит внутренние данные приложения и список пакетов, которые должны быть подключения в `development` или `production` режиме.
- `README.md` - инструкция по работе с приложениям.
- `tsconfig.json` - служебный файл подключения `TypeScript` с особенностями его реализации.

### Sourse folder

[![image.png](https://i.postimg.cc/NjBw6G9H/image.png)](https://postimg.cc/ppG7xHBW)

Которая состоит из директорий:
- `api` - директория с различными API сущностями. Подробнее смотрите [API](#applacation-programming-interface-api)
- `cli` - директория с описание интерфейсом командной строки. Подробнее смотрите [CLI](#command-line-interface-cli)
- `core` - директория с подключением базовыми сущностями приложения, а также различными данными, которые проходят "красной" ниткой по всей рубашке приложения.
- `documentation` - директория со swagger документацией.
- `gui` - директория с описанием Front-end части приложения.Подробнее смотрите [GUI](#graphical-user-interface-gui)

и файла `app.ts` - входной точки в приложение, в котором инициализуются сервер, база данных и интерфейс коммандной строки.

### API folder

[![architecture-src-api.png](https://i.postimg.cc/D0SzKvdZ/architecture-src-api.png)](https://postimg.cc/sGRzYRLd)

Которая состоит из директорий:
- `auth` - директория со всеми файлами реализации авторизации пользователя. Подробнее про реализацию авторизации смотрите [Auth Folder](#api-folder)
- `message` - директория со всеми файлами реализации работы с сущностью сообщений. Подробнее про работу с сообщениями смотрите [Message Folder](#message-folder)
- `user` - директория со всеми файлами реализации работы с сущностью пользователя. Подробнее про работу с пользователями смотрите [User Folder](#user-folder)

и файлами:
- `api.model.enum.ts` - унификатор названий моделей сущностей.
- `api.router.path.ts` - API пути машрутизации доступа.
- `api.router.ts` - машрутизатор, в который подключается машрутизаторы различных сущностей API и которым присваивется соответствующий путь маршрутизации.

#### Auth folder

[![architecture-src-api-auth.png](https://i.postimg.cc/tCrLxdjL/architecture-src-api-auth.png)](https://postimg.cc/WhkWRktn)

Которая состоит из директорий:
- `dto` - директория с интерфейсами описывающие интерфейсы входных данных, которые приходят с объектом запроса `req` по соответствующему маршруту.
- `interface` - директория с интерфейсами описывающие классы авторизации.
- `response` - директория с интерфейсами описывающие результаты выполнения различных методов определённых классов авторизации.

а также следующих файлов:
- `auth.constants.ts` - файл с константами, которые используются в классах авторизации.
- `auth.controller.ts` - класс контроллер, задача которого принять данные из объекта запроса `req` и передать его на обработку различных классам авторизации, после чего отправить данные в объекта ответа `res`.
- `auth.cookier.ts` - класс работы с куками.
- `auth.exception.ts` - класс работы с исключениями для обработки пользовательских ошибок, например введения не всех обязательных данных для регистрации и т.д.
- `auth.hasher.ts` - класс хеширования для работы с зашифроваными данными, например паролями.
- `auth.middleware.ts` - класс промежуточного обработчика, в котором описаны методы промежуточных обработчиков авторизации. Такими промежуточными обработчиками есть обработчик авторизации, который даёт доступ к определенным ресурсам API только авторизованным пользователям.
- `auth.responser.ts` - класс формирующий ответы, который отдаются в класс контроллера, который отдаёт этот ответ на клиент.
- `auth.router.path.ts` - файл с описанием путей под каждый определенный метод класса контроллера авторизации.
- `auth.router.ts` - машрутизатор авторизации, в котором описывается путь машрутизации и колбэк - метод класса контроллера, который реализуется по сооветствующему машруту.
- `auth.service.ts` -  класс сервиса, который работает исключительно из базой данных пользователя. 
- `auth.tokenizer.ts` - класс токенов, который отвечает за работу с JWT токенами.
- `auth.validator.ts` - класс валидатор, который отвечает за обработку ответов авторизации в интерфейсе командной строки.

#### Message folder

[![architecture-src-api-message.png](https://i.postimg.cc/y8xXDc1p/architecture-src-api-message.png)](https://postimg.cc/rD6tbdt5)

Которая состоит из директорий:
- `dto` - директория с интерфейсами описывающие интерфейсы входных данных, которые приходят с объектом запроса `req` по соответствующему маршруту.
- `interface` - директория с интерфейсами описывающие классы работы с сообщениями.
- `response` - директория с интерфейсами описывающие результаты выполнения различных методов определённых классов работы с сообщениями.
- `type` - директория с файлами описание различных типов данных.

а также следующих файлов:
- `message.constants.ts` - файл с константами, которые используются в классах работы с сообщениями.
- `message.controller.ts` - класс контроллер, задача которого принять данные из объекта запроса `req` и передать его на обработку различных классам работы с сообщениями, после чего отправить данные в объекта ответа `res`.
- `message.decoder.ts` - класс кодирования, которые переводит текст языка морзе на английский и наоборот - с английского на язык морзе.
- `message.dictionary.ts` - класс словарей, в котором описан перевод каждого символа с английского на язык морзе.
- `message.exception.ts` - класс работы с исключениями для обработки пользовательских ошибок, например введения не верного имени пользователя и т.д.
- `message.helper.ts` - класс помошник, который реализует логику не относящуюся к другим, целевым, классам.
- `message.model.ts` - модель сущности сообщения.
- `message.responser.ts` - класс формирующий ответы, который отдаются в класс контроллера, который отдаёт этот ответ на клиент.
- `message.router.path.ts` - файл с описанием путей под каждый определенный метод класса контроллера сообщений.
- `message.router.ts` - машрутизатор сообщений, в котором описывается путь машрутизации и колбэк - метод класса контроллера, который реализуется по сооветствующему машруту.
- `message.service.ts` -  класс сервиса, который работает исключительно из базой данных сообщений. 

#### User folder

[![architecture-src-api-user.png](https://i.postimg.cc/4yTRdXpw/architecture-src-api-user.png)](https://postimg.cc/1nMj7hCN)

Которая состоит из директорий:
- `enum` - директория с перечислениями, к примеру перечисления ролей пользователя.
- `interface` - директория с интерфейсами описывающие классы работы с пользователями.
- `response` - директория с интерфейсами описывающие результаты выполнения различных методов определённых классов работы с пользователями.
- `tests` - директория с файлами тестирования различных эндпоинтов API работы с сущностью пользователей.

а также следующих файлов:
- `user.constants.ts` - файл с константами, которые используются в классах работы с пользователями.
- `user.controller.ts` - класс контроллер, задача которого принять данные из объекта запроса `req` и передать его на обработку различных классам работы с пользователями, после чего отправить данные в объекта ответа `res`.
- `user.exception.ts` - класс работы с исключениями для обработки пользовательских ошибок, например введения не верного username пользователя и т.д.
- `user.model.ts` - модель сущности пользователя.
- `user.responser.ts` - класс формирующий ответы, который отдаются в класс контроллера, который отдаёт этот ответ на клиент.
- `user.router.path.ts` - файл с описанием путей под каждый определенный метод класса контроллера пользователей.
- `user.router.ts` - машрутизатор пользователей, в котором описывается путь машрутизации и колбэк - метод класса контроллера, который реализуется по сооветствующему машруту.
- `user.service.ts` -  класс сервиса, который работает исключительно из базой данных пользователей. 

### CLI folder

### Core folder

[![architecture-src-core.png](https://i.postimg.cc/yxq383f5/architecture-src-core.png)](https://postimg.cc/gXD2Mjbq)

Которая состоит из слеудющих директорий и вложенных файлах:
- `connection` - директория с файлами подключения базовых сущностей.
  - `cli.connection.ts` - класс подключения интерфейса командной строки.
  - `db.connection.ts` - класс подключения к базе данных.
  - `https.connection.ts` - класс описывающий ключ и сертификат для создания подключения к https протоколу. 
  - `server.connection.ts` - класс экземпляра сервера.
  - `session.connection.ts` - кллас создания сессии. 
  - `swagger.connection.ts` - класс описывающий методы подключения Swagger документации.
- `dto` - директория с файлами описание интерфейсом входящих данных.
  -  `exeption.dto.ts` - интерфейс исключений одинаков для исключений любых типов, поэтому является базовым. 
  -  `session.dto.ts` - интерфейс дополнения интерфейса сессии - `Session` из NPM пакета `express-session`.
- `enum` - 
  - `color.enum.ts` - 
  - `emodji.enum.ts` - s
  - `color.enum.ts` - 
  - `color.enum.ts` - 

### Documentation folder



### GUI folder

## Как читать код

### Входная точка в приложение

файл `app.ts` является точной входа в приложение. В нём инициализуруются классы: 
- `Server` - отвечает за работу всего сервера.
- `Database` - отвечает за подключение базы данных.
- `CLI` - отвечает за работу Command Line Interface. Класс обёрнут в setTimeout для запуска CLI после запуска `Server` и `Database` на следующем витке event loop.

Каждый класс находится в папке `src/core/connection`...собственно там находятся и все остальные подключения.

### Server

В конструкторе класса реализован `app` - результат выполнения функции `express`, после чего в объект `app` записываются все составные компоненты сервера:
- инициализация шаблонизатора `pug` и указание пути к файлам отрисовки.
- инициализация `session`
- иницализация `http` и `https` серверов.
- подключение `swagger` документации.
- присоединения маршрутов `api`, маршрутов файлов отрисовки `pug` и подключение swagger документации.

#### Файлы отрисовки pug

Реализация Front-end'а построена на подключении файлов отрисовки `pug`, статический файлов, который выполняют роль:
- выполнения запросов и получение данных на фронт с помощью `JavaScript`.
- обработка и подключение стилей - файлов `css`.

Подробнее про архитектуру и реализацию Front-end смотрите [GUI](#graphical-user-interface-gui)

#### Session

Сессия реализован в отдельном классе `Session` и подключается из другого файла: `session.connection.ts`. По своей сути представляет отдельный объект подключения к `session` из `express-session`, которая использует в роли хранилища - `MongoStore`.

#### Swagger документация

Swagger подключение описывается отдельным классом Swagger, внутри которого описываются следующие методы:
- подключения файла `yaml` с описанием документации.
- реализации настроек NPM пакета `swagger-ui-express`.
- маршрута по коротому можно получить страницу документации. 

#### Application programm interface (API)

REST API организован по директориям с отдельными сущностями:
- AUTH - API авторизации пользователя.
- MESSAGE - API управления сообщениями.
- USER - API управления пользователями.

Также API имеет общие файлы конфигурации API:
- `api.model.enum.ts` - унификатор названий моделей сущностей.
- `api.router.path.ts` - API пути машрутизации доступа.
- `api.router.ts` - машрутизатор, в который подключается машрутизаторы различных сущностей API и которым присваивется соответствующий путь маршрутизации.

Подробнее про архитектуру и релаизацию API, а также цепочку машрутизации смотрите [API](#applacation-programming-interface-api)

### Database

В конструкторе реализована функция - connection к базе данных, которая является `Promise` и результатом выполнения которой будет или успешное подключение или ошибочное с выбрасыванием ошибки подключения.

### CLI



## Applacation programming interface (API)




## Command line interface (CLI)

## Graphical user interface (GUI)

## Тестирование

