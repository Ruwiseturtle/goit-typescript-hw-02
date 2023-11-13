/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type pagesType = {
  [key: string]: string | number | object | [];
}

const page1: pagesType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: pagesType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export {};