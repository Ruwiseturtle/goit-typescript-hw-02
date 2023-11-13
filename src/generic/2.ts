/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

//Pick створюэ тип на основі іншого типу з меньшою кількістю полів

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

type AllTypeTop = Pick<AllType, "name" | "color">;
type AllTypeBottom = Pick<AllType, "position" | "weight">;

function compare (top: AllTypeTop, bottom: AllTypeBottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

export {};