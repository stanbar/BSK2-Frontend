import {User, UserDetailed, Mechanic, MechanicDetailed, Car, CarDetailed, Role, RoleDetailed, Rent,RentDetailed, Repair, RepairDetailed} from './ModelView'

export type Tab = {
    name: string,
    component: any,
    detailedComponent: any
}
export const tabs: Array<Tab> = [
    {
        name: 'users',
        component: User,
        detailedComponent: UserDetailed
    },
    {
        name: 'mechanics',
        component: Mechanic,
        detailedComponent: MechanicDetailed
    },
    {
        name: 'cars',
        component: Car,
        detailedComponent: CarDetailed
    },
    {
        name: 'rents',
        component: Rent,
        detailedComponent: RentDetailed
    },
    {
        name: 'repairs',
        component: Repair,
        detailedComponent: RepairDetailed
    },
    {
        name: 'roles',
        component: Role,
        detailedComponent: RoleDetailed
    }
];