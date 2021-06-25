export interface GeoType {
  lat: number
  lng: number
}
export interface AddressType {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: GeoType
}
export interface CompanyType {
    name: string
    catchPhrase: string
    bs: string
}
export interface UserType {
    id: number | null
    name: string
    username: string
    email: string
    address: AddressType
    phone: string
    website: string
    company: CompanyType
}
