let some:unknown;
some = 'Text';
let str: string;

//з unknown потрібно робити перевірку
if (typeof some === 'string') {
   str = some; 
}


export {};