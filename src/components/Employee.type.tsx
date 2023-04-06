export interface IEmployee {
  id: String;
  firstName: String;
  lastName: String;
  email: String;
}

// export const dummyEmployeList: IEmployee[] = [
//   {
//     id: new Date().toJSON().toString(),
//     firstName: "Dummy1",
//     lastName: "emeka",
//     email: "djnchrys@yahoo.com",
//   },
// ];

export enum PageEnum {
  list,
  add,
  edith,
}
