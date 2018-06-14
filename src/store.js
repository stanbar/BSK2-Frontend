import {User, UserDetailed, Mechanic, MechanicDetailed, Car, CarDetailed, Role, RoleDetailed, Rent,RentDetailed,AddNewRentDialog, Repair, RepairDetailed} from './ModelView'

export type Tab = {
    name: string,
    component: any,
    detailedComponent: any,
    addNewItemDialog : any
}
export const tabs: Array<Tab> = [
    {
        name: 'users',
        component: User,
        detailedComponent: UserDetailed,
        addNewItemDialog : null
    },
    {
        name: 'mechanics',
        component: Mechanic,
        detailedComponent: MechanicDetailed,
        addNewItemDialog : null
    },
    {
        name: 'cars',
        component: Car,
        detailedComponent: CarDetailed,
        addNewItemDialog : null
    },
    {
        name: 'rents',
        component: Rent,
        detailedComponent: RentDetailed,
        addNewItemDialog : AddNewRentDialog
    },
    {
        name: 'repairs',
        component: Repair,
        detailedComponent: RepairDetailed,
        addNewItemDialog : null
    },
    {
        name: 'roles',
        component: Role,
        detailedComponent: RoleDetailed,
        addNewItemDialog : null
    }
];