export class RegistrationModel{
    RegisId: number=0;
    Name: string;
    Email: string;
    Mobile: number;
    Password: string;
    Address: string;
    StateId: string;
    CityId: string;
    ZipCode: number;
    userTypeId: string;
}
export class UserType {
    userTypeId: string;
    userTypeName: string;
  }
  export class StateModel{
    stateId: string;
    stateName: string; 
  }
  export class CityModel{
    cityId: string;
    cityName: string; 
    stateId: string;
 }