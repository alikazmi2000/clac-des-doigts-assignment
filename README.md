# clac-des-doigts-assignment

# Clac des Doigts

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Welcome to Clac des Doigts! This repository contains the source code for [insert project description here].

## Table of Contents

- [Description](#description)
- [Requirements](#requirements)
- [Documentation](#documentation)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

This repo contains the Technical Test Project given by Clac des Doigts 

## Requirements

The objective of this challenge is to create an API in Javascript (NodeJS)
The /chicken webservice will be a CRUD with the following methods: GET /
POST / PUT / PATCH / DELETE

The chicken object is such that:
name: String (required),
birthday: Date,
weight: Number (required),
steps: Number (default 0),
isRunning: Boolean (default false) Then the webservice /chicken/run
will increase the steps variable by 1.

You are free to use the database and frameworks of your
choice. (preference for mongoDB)

Detailed documentation would be a plus!

BONUS: Add a chicken link to another object like farmyard or
coop.

Deliverable: Gitlab or Github.

The project will be judged on the architecture, and the quality of the code, if you want to do more things don't hesitate

## Documentation

For detailed API documentation, please refer to the [Postman API Documentation](https://documenter.getpostman.com/view/4660424/2s9Y5YQguk).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alikazmi2000/clac-des-doigts-assignment.git
   ```
2. Install Dependencys
  ```bash
  npm i
  ```
3. Copy Env file from .env.example to .env . Update the mongodb url
4. Now lets add dummy seeders and fakers using 
```bash
  npm run fresh
```
5. In order to check if code is working run test command
```bash
    npm run test
```

## Usage

1. To clean database
```bash
  npm run clean
```
2. To add mock data in database
```bash
  npm run seed
```

3. To clean and add mock data in database
```bash
  npm run fresh
```




