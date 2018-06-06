import {User, UserDetailed, Car, CarDetailed, Role, RoleDetailed, Rent,RentDetailed, Repair, RepairDetailed} from './ModelView'

export type Tab = {
    name: string,
    component: any,
    detailedComponent: any
}
export const Tabs: Array<Tab> = [
    {
        name: 'users',
        component: User,
        detailedComponent: UserDetailed
    },
    {
        name: 'cars',
        component: Car,
        detailedComponent: CarDetailed
    },
    {
        name: 'roles',
        component: Role,
        detailedComponent: RoleDetailed
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
];