/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface inter{
  title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<inter> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};